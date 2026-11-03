/**
 * Quote of the Minute - Vanilla JavaScript Application
 *
 * Features:
 * - Shuffle-bag no-repeat logic across page reloads & visits
 * - Category filtering with per-category shuffle-bags
 * - 60-second auto-refresh timer with high-precision RAF progress bar
 * - Smooth fade/slide transitions
 * - Dynamic subtle ambient gradient backgrounds
 * - Favorites saved in localStorage with slide-in drawer
 * - Copy to clipboard & Web Share API with graceful fallback
 * - Dark/light theme with system preference detection and persistence
 * - Keyboard shortcuts (Space, ArrowRight, Escape)
 * - Safe localStorage wrapper handling private browsing / disabled storage
 * - Accessible (ARIA attributes, aria-live, focus management, reduced motion)
 */

(function () {
  'use strict';

  // --- Safe Storage Wrapper (with in-memory fallback) ---
  const MemoryStore = {
    data: {},
    getItem(key) {
      return Object.prototype.hasOwnProperty.call(this.data, key) ? this.data[key] : null;
    },
    setItem(key, value) {
      this.data[key] = String(value);
    },
    removeItem(key) {
      delete this.data[key];
    }
  };

  const safeStorage = {
    isAvailable() {
      try {
        const testKey = '__qotm_test__';
        window.localStorage.setItem(testKey, testKey);
        window.localStorage.removeItem(testKey);
        return true;
      } catch (e) {
        return false;
      }
    },
    get store() {
      return this.isAvailable() ? window.localStorage : MemoryStore;
    },
    getItem(key) {
      try {
        return this.store.getItem(key);
      } catch (e) {
        return MemoryStore.getItem(key);
      }
    },
    setItem(key, value) {
      try {
        this.store.setItem(key, value);
      } catch (e) {
        MemoryStore.setItem(key, value);
      }
    },
    removeItem(key) {
      try {
        this.store.removeItem(key);
      } catch (e) {
        MemoryStore.removeItem(key);
      }
    }
  };

  // --- Theme Background Gradients ---
  const GRADIENT_PALETTES = {
    dark: [
      'radial-gradient(ellipse at 20% 20%, rgba(56, 189, 248, 0.18) 0%, rgba(9, 13, 22, 0) 70%), radial-gradient(ellipse at 80% 80%, rgba(99, 102, 241, 0.15) 0%, rgba(9, 13, 22, 0) 70%)',
      'radial-gradient(ellipse at 30% 80%, rgba(16, 185, 129, 0.16) 0%, rgba(9, 13, 22, 0) 70%), radial-gradient(ellipse at 70% 20%, rgba(14, 165, 233, 0.16) 0%, rgba(9, 13, 22, 0) 70%)',
      'radial-gradient(ellipse at 75% 25%, rgba(244, 63, 94, 0.15) 0%, rgba(9, 13, 22, 0) 70%), radial-gradient(ellipse at 25% 75%, rgba(139, 92, 246, 0.18) 0%, rgba(9, 13, 22, 0) 70%)',
      'radial-gradient(ellipse at 50% 15%, rgba(245, 158, 11, 0.14) 0%, rgba(9, 13, 22, 0) 70%), radial-gradient(ellipse at 50% 85%, rgba(14, 165, 233, 0.16) 0%, rgba(9, 13, 22, 0) 70%)',
      'radial-gradient(ellipse at 85% 50%, rgba(168, 85, 247, 0.18) 0%, rgba(9, 13, 22, 0) 70%), radial-gradient(ellipse at 15% 50%, rgba(59, 130, 246, 0.16) 0%, rgba(9, 13, 22, 0) 70%)',
      'radial-gradient(ellipse at 20% 70%, rgba(20, 184, 166, 0.18) 0%, rgba(9, 13, 22, 0) 70%), radial-gradient(ellipse at 80% 30%, rgba(99, 102, 241, 0.15) 0%, rgba(9, 13, 22, 0) 70%)'
    ],
    light: [
      'radial-gradient(ellipse at 20% 20%, rgba(2, 132, 199, 0.12) 0%, rgba(248, 250, 252, 0) 70%), radial-gradient(ellipse at 80% 80%, rgba(99, 102, 241, 0.1) 0%, rgba(248, 250, 252, 0) 70%)',
      'radial-gradient(ellipse at 30% 80%, rgba(16, 185, 129, 0.1) 0%, rgba(248, 250, 252, 0) 70%), radial-gradient(ellipse at 70% 20%, rgba(14, 165, 233, 0.1) 0%, rgba(248, 250, 252, 0) 70%)',
      'radial-gradient(ellipse at 75% 25%, rgba(244, 63, 94, 0.09) 0%, rgba(248, 250, 252, 0) 70%), radial-gradient(ellipse at 25% 75%, rgba(139, 92, 246, 0.11) 0%, rgba(248, 250, 252, 0) 70%)',
      'radial-gradient(ellipse at 50% 15%, rgba(245, 158, 11, 0.1) 0%, rgba(248, 250, 252, 0) 70%), radial-gradient(ellipse at 50% 85%, rgba(2, 132, 199, 0.11) 0%, rgba(248, 250, 252, 0) 70%)',
      'radial-gradient(ellipse at 85% 50%, rgba(168, 85, 247, 0.11) 0%, rgba(248, 250, 252, 0) 70%), radial-gradient(ellipse at 15% 50%, rgba(59, 130, 246, 0.1) 0%, rgba(248, 250, 252, 0) 70%)',
      'radial-gradient(ellipse at 20% 70%, rgba(20, 184, 166, 0.11) 0%, rgba(248, 250, 252, 0) 70%), radial-gradient(ellipse at 80% 30%, rgba(99, 102, 241, 0.1) 0%, rgba(248, 250, 252, 0) 70%)'
    ]
  };

  // --- Fallback Quote Dataset if quotes.js is missing or empty ---
  const DEFAULT_QUOTES = [
    {
      text: "The secret of getting ahead is getting started.",
      author: "Mark Twain",
      category: "motivation"
    },
    {
      text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
      author: "Will Durant",
      category: "discipline"
    },
    {
      text: "You have power over your mind - not outside events. Realize this, and you will find strength.",
      author: "Marcus Aurelius",
      category: "mindset"
    }
  ];

  // --- App State ---
  const state = {
    quotes: [],
    activeCategory: 'all',
    currentQuote: null,
    favorites: [],
    theme: 'dark',
    timerDuration: 60000, // 60 seconds
    timerStartTime: 0,
    timerElapsed: 0,
    timerAnimationFrame: null,
    isTimerPaused: false,
    lastGradientIndex: -1,
    isTransitioning: false
  };

  // --- DOM Element References ---
  const dom = {
    html: document.documentElement,
    progressBar: document.getElementById('progress-bar'),
    progressContainer: document.querySelector('.progress-container'),
    ambientBg: document.getElementById('ambient-bg'),
    themeToggle: document.getElementById('theme-toggle'),
    favDrawerToggle: document.getElementById('fav-drawer-toggle'),
    favCountBadge: document.getElementById('fav-count-badge'),
    categoryChips: document.querySelectorAll('.category-chips .chip'),
    quoteCard: document.getElementById('quote-card'),
    quoteText: document.getElementById('quote-text'),
    quoteAuthor: document.getElementById('quote-author'),
    quoteCategory: document.getElementById('quote-category'),
    timerLabel: document.getElementById('timer-label'),
    newQuoteBtn: document.getElementById('new-quote-btn'),
    favoriteBtn: document.getElementById('favorite-btn'),
    copyBtn: document.getElementById('copy-btn'),
    shareBtn: document.getElementById('share-btn'),
    favoritesDrawer: document.getElementById('favorites-drawer'),
    drawerBackdrop: document.getElementById('drawer-backdrop'),
    drawerCloseBtn: document.getElementById('drawer-close-btn'),
    favoritesList: document.getElementById('favorites-list'),
    favoritesEmpty: document.getElementById('favorites-empty'),
    toast: document.getElementById('toast'),
    toastMessage: document.getElementById('toast-message')
  };

  // --- Helper: Unique Hash/Key for Quote ---
  function getQuoteKey(quote) {
    if (!quote) return '';
    return `${quote.author.trim()}::${quote.text.trim()}`;
  }

  // --- Helper: Shuffle Array (Fisher-Yates) ---
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // --- Shuffle-Bag Logic ---
  /**
   * The shuffle-bag guarantees:
   * 1. Quotes are never repeated until all quotes in the active category have been shown.
   * 2. After all are shown, the list is reshuffled.
   * 3. On page refresh, a new quote is drawn immediately.
   * 4. Reshuffle ensures the next quote is not identical to the last shown quote.
   */
  const ShuffleBag = {
    getStorageKey(category) {
      return `qotm_bag_${category}`;
    },

    getLastQuoteKey() {
      return safeStorage.getItem('qotm_last_quote_key') || '';
    },

    setLastQuoteKey(key) {
      safeStorage.setItem('qotm_last_quote_key', key);
    },

    getPool(category) {
      if (category === 'all') {
        return state.quotes;
      }
      return state.quotes.filter(q => q.category.toLowerCase() === category.toLowerCase());
    },

    loadBag(category) {
      const raw = safeStorage.getItem(this.getStorageKey(category));
      if (!raw) return null;
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch (e) {
        // Corrupted JSON in storage, ignore
      }
      return null;
    },

    saveBag(category, bag) {
      safeStorage.setItem(this.getStorageKey(category), JSON.stringify(bag));
    },

    /**
     * Refill and shuffle a new bag for the category.
     * Prevents the first item in the new bag from matching lastShownKey if pool > 1.
     */
    createNewBag(category, pool, lastShownKey) {
      const keys = pool.map(q => getQuoteKey(q));
      let shuffled = shuffleArray(keys);

      // If more than 1 quote and the first item equals last shown, swap it
      if (shuffled.length > 1 && shuffled[0] === lastShownKey) {
        const swapIdx = Math.floor(Math.random() * (shuffled.length - 1)) + 1;
        [shuffled[0], shuffled[swapIdx]] = [shuffled[swapIdx], shuffled[0]];
      }

      return shuffled;
    },

    /**
     * Draw the next quote for the category without repeats.
     */
    drawNext(category) {
      const pool = this.getPool(category);
      if (!pool || pool.length === 0) {
        return DEFAULT_QUOTES[0];
      }

      if (pool.length === 1) {
        return pool[0];
      }

      const lastShownKey = this.getLastQuoteKey();
      let bag = this.loadBag(category);

      // Validate bag entries still exist in pool
      const poolKeyMap = new Map();
      pool.forEach(q => poolKeyMap.set(getQuoteKey(q), q));

      if (!bag || bag.length === 0) {
        bag = this.createNewBag(category, pool, lastShownKey);
      } else {
        // Filter out keys no longer in pool
        bag = bag.filter(key => poolKeyMap.has(key));
        if (bag.length === 0) {
          bag = this.createNewBag(category, pool, lastShownKey);
        }
      }

      // If the top item happens to be identical to lastShownKey and there are more items, rotate it
      if (bag.length > 1 && bag[0] === lastShownKey) {
        const next = bag.shift();
        bag.push(next);
      }

      // Pop the next key
      const chosenKey = bag.shift();

      // Save remaining bag
      this.saveBag(category, bag);
      this.setLastQuoteKey(chosenKey);

      return poolKeyMap.get(chosenKey) || pool[0];
    }
  };

  // --- Dynamic Ambient Background ---
  function updateAmbientBackground() {
    if (!dom.ambientBg) return;
    const currentTheme = state.theme === 'light' ? 'light' : 'dark';
    const palette = GRADIENT_PALETTES[currentTheme];
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * palette.length);
    } while (palette.length > 1 && newIndex === state.lastGradientIndex);

    state.lastGradientIndex = newIndex;
    dom.ambientBg.style.background = palette[newIndex];
  }

  // --- Display Quote with Smooth Transition ---
  function displayQuote(quote, animate = true) {
    if (!quote) return;
    state.currentQuote = quote;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const applyContent = () => {
      dom.quoteText.textContent = `“${quote.text}”`;
      dom.quoteAuthor.textContent = quote.author;
      dom.quoteCategory.textContent = quote.category;

      // Handle extra long quotes with responsive class
      if (quote.text.length > 180) {
        dom.quoteText.classList.add('long-quote');
      } else {
        dom.quoteText.classList.remove('long-quote');
      }

      // Update favorite button state
      updateFavoriteButtonState();

      // Update dynamic gradient
      updateAmbientBackground();
    };

    if (!animate || prefersReducedMotion) {
      applyContent();
      return;
    }

    // Animate out
    state.isTransitioning = true;
    dom.quoteCard.classList.add('quote-exit');

    setTimeout(() => {
      applyContent();
      dom.quoteCard.classList.remove('quote-exit');
      dom.quoteCard.classList.add('quote-enter');

      // Trigger reflow
      void dom.quoteCard.offsetHeight;

      dom.quoteCard.classList.remove('quote-enter');
      state.isTransitioning = false;
    }, 180);
  }

  // --- 60s Progress Bar & Auto-Refresh Timer ---
  function startTimer() {
    stopTimer();
    state.timerStartTime = performance.now();
    state.timerElapsed = 0;
    state.isTimerPaused = false;

    function step(now) {
      if (state.isTimerPaused) return;

      const elapsed = (now - state.timerStartTime) + state.timerElapsed;
      const progress = Math.min(elapsed / state.timerDuration, 1);

      if (dom.progressBar) {
        dom.progressBar.style.width = `${progress * 100}%`;
      }

      const secondsLeft = Math.max(0, Math.ceil((state.timerDuration - elapsed) / 1000));
      if (dom.timerLabel) {
        dom.timerLabel.textContent = `${secondsLeft}s`;
      }
      if (dom.progressContainer) {
        dom.progressContainer.setAttribute('aria-valuenow', Math.round(progress * 60));
      }

      if (elapsed >= state.timerDuration) {
        // Auto-refresh triggers next quote
        triggerNextQuote(true);
        resetTimer();
        return;
      }

      state.timerAnimationFrame = requestAnimationFrame(step);
    }

    state.timerAnimationFrame = requestAnimationFrame(step);
  }

  function stopTimer() {
    if (state.timerAnimationFrame) {
      cancelAnimationFrame(state.timerAnimationFrame);
      state.timerAnimationFrame = null;
    }
  }

  function resetTimer() {
    stopTimer();
    if (dom.progressBar) {
      dom.progressBar.style.width = '0%';
    }
    if (dom.timerLabel) {
      dom.timerLabel.textContent = '60s';
    }
    if (dom.progressContainer) {
      dom.progressContainer.setAttribute('aria-valuenow', '0');
    }
    startTimer();
  }

  function pauseTimer() {
    if (state.isTimerPaused) return;
    state.isTimerPaused = true;
    stopTimer();
    state.timerElapsed += performance.now() - state.timerStartTime;
  }

  function resumeTimer() {
    if (!state.isTimerPaused) return;
    state.isTimerPaused = false;
    state.timerStartTime = performance.now();

    function step(now) {
      if (state.isTimerPaused) return;
      const elapsed = (now - state.timerStartTime) + state.timerElapsed;
      const progress = Math.min(elapsed / state.timerDuration, 1);

      if (dom.progressBar) {
        dom.progressBar.style.width = `${progress * 100}%`;
      }
      const secondsLeft = Math.max(0, Math.ceil((state.timerDuration - elapsed) / 1000));
      if (dom.timerLabel) {
        dom.timerLabel.textContent = `${secondsLeft}s`;
      }
      if (dom.progressContainer) {
        dom.progressContainer.setAttribute('aria-valuenow', Math.round(progress * 60));
      }

      if (elapsed >= state.timerDuration) {
        triggerNextQuote(true);
        resetTimer();
        return;
      }
      state.timerAnimationFrame = requestAnimationFrame(step);
    }

    state.timerAnimationFrame = requestAnimationFrame(step);
  }

  // Handle tab visibility to pause/resume cleanly
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      pauseTimer();
    } else {
      resumeTimer();
    }
  });

  // --- Trigger Next Quote ---
  function triggerNextQuote(isAuto = false) {
    if (state.isTransitioning) return;
    const nextQuote = ShuffleBag.drawNext(state.activeCategory);
    displayQuote(nextQuote, true);
    if (!isAuto) {
      resetTimer();
    }
  }

  // --- Category Filter Handling ---
  function setCategory(category) {
    if (state.activeCategory === category) return;
    state.activeCategory = category;

    // Update chip active classes
    dom.categoryChips.forEach(chip => {
      const isSelected = chip.dataset.category.toLowerCase() === category.toLowerCase();
      chip.classList.toggle('active', isSelected);
      chip.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    });

    // Save preference
    safeStorage.setItem('qotm_active_category', category);

    // Immediately fetch a fresh quote from the selected category bag
    const quote = ShuffleBag.drawNext(category);
    displayQuote(quote, true);
    resetTimer();
  }

  // --- Toast Notification ---
  let toastTimeout = null;
  function showToast(message) {
    if (!dom.toast || !dom.toastMessage) return;
    dom.toastMessage.textContent = message;
    dom.toast.classList.add('show');

    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }
    toastTimeout = setTimeout(() => {
      dom.toast.classList.remove('show');
    }, 2400);
  }

  // --- Favorites Management ---
  function loadFavorites() {
    const raw = safeStorage.getItem('qotm_favorites');
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {
      // Corrupt data fallback
    }
    return [];
  }

  function saveFavorites(favs) {
    state.favorites = favs;
    safeStorage.setItem('qotm_favorites', JSON.stringify(favs));
    updateFavoritesUI();
  }

  function isCurrentQuoteFavorite() {
    if (!state.currentQuote) return false;
    const currentKey = getQuoteKey(state.currentQuote);
    return state.favorites.some(f => getQuoteKey(f) === currentKey);
  }

  function updateFavoriteButtonState() {
    if (!dom.favoriteBtn) return;
    const isFav = isCurrentQuoteFavorite();
    dom.favoriteBtn.setAttribute('aria-pressed', isFav ? 'true' : 'false');
    dom.favoriteBtn.classList.toggle('is-favorite', isFav);
    dom.favoriteBtn.title = isFav ? 'Remove from favorites' : 'Save to favorites';
  }

  function toggleFavorite() {
    if (!state.currentQuote) return;
    const currentKey = getQuoteKey(state.currentQuote);
    const existingIndex = state.favorites.findIndex(f => getQuoteKey(f) === currentKey);

    let updatedFavorites;
    if (existingIndex >= 0) {
      updatedFavorites = state.favorites.filter((_, idx) => idx !== existingIndex);
      saveFavorites(updatedFavorites);
      showToast('Removed from favorites');
    } else {
      updatedFavorites = [state.currentQuote, ...state.favorites];
      saveFavorites(updatedFavorites);
      showToast('Saved to favorites');
    }

    updateFavoriteButtonState();
  }

  function removeFavorite(key) {
    const updated = state.favorites.filter(f => getQuoteKey(f) !== key);
    saveFavorites(updated);
    updateFavoriteButtonState();
    showToast('Quote removed');
  }

  function updateFavoritesUI() {
    const count = state.favorites.length;

    // Badge
    if (dom.favCountBadge) {
      dom.favCountBadge.textContent = count;
      dom.favCountBadge.setAttribute('data-count', count);
      dom.favCountBadge.setAttribute('aria-label', `${count} saved quotes`);
    }

    if (dom.favDrawerToggle) {
      dom.favDrawerToggle.setAttribute('aria-label', `Open saved favorite quotes (${count} saved)`);
    }

    // List rendering
    if (!dom.favoritesList || !dom.favoritesEmpty) return;

    if (count === 0) {
      dom.favoritesEmpty.style.display = 'flex';
      dom.favoritesList.innerHTML = '';
      return;
    }

    dom.favoritesEmpty.style.display = 'none';
    dom.favoritesList.innerHTML = '';

    state.favorites.forEach(fav => {
      const li = document.createElement('li');
      li.className = 'fav-item';

      const key = getQuoteKey(fav);

      li.innerHTML = `
        <div class="fav-item-header">
          <span class="fav-category">${escapeHTML(fav.category)}</span>
          <div class="fav-actions">
            <button class="fav-btn-icon view-btn" title="View this quote" aria-label="View quote by ${escapeHTML(fav.author)}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
            <button class="fav-btn-icon delete-btn" title="Remove from favorites" aria-label="Remove quote by ${escapeHTML(fav.author)}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </div>
        <p class="fav-text">“${escapeHTML(fav.text)}”</p>
        <span class="fav-author">— ${escapeHTML(fav.author)}</span>
      `;

      // Event listener: view quote
      const viewBtn = li.querySelector('.view-btn');
      const textElem = li.querySelector('.fav-text');
      const loadThisQuote = () => {
        displayQuote(fav, true);
        resetTimer();
        closeDrawer();
      };
      viewBtn.addEventListener('click', loadThisQuote);
      textElem.addEventListener('click', loadThisQuote);

      // Event listener: delete quote
      const deleteBtn = li.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        removeFavorite(key);
      });

      dom.favoritesList.appendChild(li);
    });
  }

  function escapeHTML(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --- Drawer Open / Close & Focus Trap ---
  let lastActiveElement = null;

  function openDrawer() {
    lastActiveElement = document.activeElement;
    dom.favoritesDrawer.removeAttribute('hidden');
    // Force reflow
    void dom.favoritesDrawer.offsetHeight;
    dom.favoritesDrawer.classList.add('open');
    dom.drawerBackdrop.classList.add('active');
    dom.favDrawerToggle.setAttribute('aria-expanded', 'true');

    // Focus close button inside drawer
    if (dom.drawerCloseBtn) {
      dom.drawerCloseBtn.focus();
    }
  }

  function closeDrawer() {
    dom.favoritesDrawer.classList.remove('open');
    dom.drawerBackdrop.classList.remove('active');
    dom.favDrawerToggle.setAttribute('aria-expanded', 'false');

    setTimeout(() => {
      dom.favoritesDrawer.setAttribute('hidden', '');
      if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
        lastActiveElement.focus();
      }
    }, 280);
  }

  // --- Copy to Clipboard ---
  function copyCurrentQuote() {
    if (!state.currentQuote) return;
    const formatted = `“${state.currentQuote.text}” — ${state.currentQuote.author}`;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(formatted)
        .then(() => showToast('Quote copied to clipboard!'))
        .catch(() => fallbackCopy(formatted));
    } else {
      fallbackCopy(formatted);
    }
  }

  function fallbackCopy(text) {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textarea);
      if (successful) {
        showToast('Quote copied to clipboard!');
      } else {
        showToast('Unable to copy quote');
      }
    } catch (err) {
      showToast('Unable to copy quote');
    }
  }

  // --- Web Share API with Fallback ---
  function shareCurrentQuote() {
    if (!state.currentQuote) return;
    const formatted = `“${state.currentQuote.text}” — ${state.currentQuote.author}`;

    if (navigator.share) {
      navigator.share({
        title: 'Quote of the Minute',
        text: formatted,
        url: window.location.href
      }).then(() => {
        showToast('Shared successfully!');
      }).catch((err) => {
        // User aborted share dialog
        if (err.name === 'AbortError') return;
        // Other errors -> fallback to copy
        copyCurrentQuote();
      });
    } else {
      // Fallback to clipboard
      copyCurrentQuote();
    }
  }

  // --- Theme Switching ---
  function initTheme() {
    const savedTheme = safeStorage.getItem('qotm_theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme, false);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light', false);
    }

    // System preference change listener
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const userSelected = safeStorage.getItem('qotm_theme');
      if (!userSelected) {
        setTheme(e.matches ? 'dark' : 'light', true);
      }
    });
  }

  function setTheme(theme, save = true) {
    state.theme = theme;
    dom.html.setAttribute('data-theme', theme);

    const isDark = theme === 'dark';
    if (dom.themeToggle) {
      dom.themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      dom.themeToggle.title = isDark ? 'Switch to light theme' : 'Switch to dark theme';
    }

    // Update meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isDark ? '#090d16' : '#f8fafc');
    }

    if (save) {
      safeStorage.setItem('qotm_theme', theme);
    }

    updateAmbientBackground();
  }

  function toggleTheme() {
    const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme, true);
  }

  // --- Keyboard Shortcuts ---
  function initKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      // If drawer is open, Escape closes it
      if (e.key === 'Escape') {
        if (dom.favoritesDrawer && dom.favoritesDrawer.classList.contains('open')) {
          e.preventDefault();
          closeDrawer();
          return;
        }
      }

      // Check if user is typing in an editable field or focused on an interactive button
      const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
      const isInteractive = tag === 'input' || tag === 'textarea' || tag === 'select' || tag === 'button' || (e.target && e.target.isContentEditable);

      if (isInteractive) return;

      // Spacebar or Right Arrow triggers fresh quote
      if (e.key === ' ' || e.code === 'Space' || e.key === 'ArrowRight') {
        // Prevent default spacebar scrolling
        if (e.key === ' ' || e.code === 'Space') {
          e.preventDefault();
        }
        triggerNextQuote(false);
      }
    });
  }

  // --- Attach Event Listeners ---
  function attachEventListeners() {
    // New Quote button
    if (dom.newQuoteBtn) {
      dom.newQuoteBtn.addEventListener('click', () => triggerNextQuote(false));
    }

    // Favorite button
    if (dom.favoriteBtn) {
      dom.favoriteBtn.addEventListener('click', toggleFavorite);
    }

    // Copy button
    if (dom.copyBtn) {
      dom.copyBtn.addEventListener('click', copyCurrentQuote);
    }

    // Share button
    if (dom.shareBtn) {
      dom.shareBtn.addEventListener('click', shareCurrentQuote);
    }

    // Theme toggle
    if (dom.themeToggle) {
      dom.themeToggle.addEventListener('click', toggleTheme);
    }

    // Favorites Drawer toggle
    if (dom.favDrawerToggle) {
      dom.favDrawerToggle.addEventListener('click', () => {
        const isOpen = dom.favoritesDrawer.classList.contains('open');
        if (isOpen) {
          closeDrawer();
        } else {
          openDrawer();
        }
      });
    }

    // Drawer close button & backdrop
    if (dom.drawerCloseBtn) {
      dom.drawerCloseBtn.addEventListener('click', closeDrawer);
    }
    if (dom.drawerBackdrop) {
      dom.drawerBackdrop.addEventListener('click', closeDrawer);
    }

    // Category chips
    dom.categoryChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const cat = chip.dataset.category;
        setCategory(cat);
      });
    });
  }

  // --- Application Initialization ---
  function init() {
    // 1. Load dataset (from window.QUOTES_DATA or fallback)
    if (window.QUOTES_DATA && Array.isArray(window.QUOTES_DATA) && window.QUOTES_DATA.length > 0) {
      state.quotes = window.QUOTES_DATA;
    } else {
      state.quotes = DEFAULT_QUOTES;
    }

    // 2. Initialize theme
    initTheme();

    // 3. Load saved favorites
    state.favorites = loadFavorites();
    updateFavoritesUI();

    // 4. Restore active category filter if previously chosen
    const savedCategory = safeStorage.getItem('qotm_active_category') || 'all';
    state.activeCategory = savedCategory;
    dom.categoryChips.forEach(chip => {
      const isSelected = chip.dataset.category.toLowerCase() === savedCategory.toLowerCase();
      chip.classList.toggle('active', isSelected);
      chip.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    });

    // 5. Draw fresh initial quote via shuffle-bag
    const initialQuote = ShuffleBag.drawNext(state.activeCategory);
    displayQuote(initialQuote, false);

    // 6. Start 60-second timer & progress bar
    resetTimer();

    // 7. Setup keyboard shortcuts and events
    initKeyboardShortcuts();
    attachEventListeners();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
