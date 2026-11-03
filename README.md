# Quote of the Minute

A modern, elegant, single-page website that presents a fresh, verifiable quote every minute. Built using pure HTML5, CSS3, and vanilla JavaScript—zero frameworks, zero build tools, and no backend or API keys required. It operates completely offline by opening `index.html`.

---

## ✨ Features

- **Shuffle-Bag No-Repeat Logic**:
  - Every page visit or reload draws a different quote from the previous visit.
  - Never repeats any quote until the entire library (or filtered category) has been viewed.
  - Automatically reshuffles when the bag is depleted, ensuring consecutive quotes are never identical.
- **Auto-Refresh & Smooth Progress Bar**:
  - Auto-rotates every 60 seconds with an animated top progress bar.
  - Pauses smoothly when the browser tab is hidden to conserve resources and resumes seamlessly.
- **Instant Controls & Keyboard Shortcuts**:
  - Click **"New Quote"** or press <kbd>Space</kbd> or <kbd>→</kbd> (Right Arrow) to instantly load a new quote.
- **7 Curated Categories**:
  - `Motivation`, `Discipline`, `Success`, `Philosophy`, `Learning`, `Perseverance`, and `Mindset`.
  - Filter chips isolate quotes for the selected theme with independent shuffle-bags.
- **Favorites Drawer**:
  - Save quotes with the heart button; stored persistently in `localStorage`.
  - Slide-in side drawer lets you browse, directly view, or remove saved quotes.
- **Copy & Share**:
  - One-click copy formatted quote to clipboard with toast confirmation.
  - Web Share API support with automatic clipboard fallback.
- **Theme & Atmosphere**:
  - Polished Light and Dark themes (defaults to system preference via `prefers-color-scheme`).
  - Subtle dynamic radial ambient background that shifts with each quote.
  - High-readability serif typography with system fallbacks for full offline usage.
- **Accessibility & Resilience**:
  - Semantic HTML5, `aria-live="polite"` quote announcements, visible focus rings, keyboard trapping in drawer, and `prefers-reduced-motion` compliance.
  - Robust memory fallback when `localStorage` is disabled or blocked.

---

## 🚀 How to Run

1. **Directly in your browser**:
   Double-click `index.html` or drag it into any modern web browser (Chrome, Edge, Firefox, Safari).
2. **Via local server (optional)**:
   ```bash
   npx serve .
   # or
   python -m http.server 8000
   ```

---

## ✍️ How to Add New Quotes

All quotes reside in `quotes.js` as an array of objects.

1. Open `quotes.js` in your editor.
2. Add your quote object inside the `QUOTES_DATA` array:
   ```javascript
   {
     text: "Your verifiable quote text here.",
     author: "Accredited Author",
     category: "motivation" // Choose from: motivation, discipline, success, philosophy, learning, perseverance, mindset
   }
   ```
3. Save the file and refresh `index.html`. The shuffle bag will automatically incorporate the new quote.

> **Note on Attributions**: Only add real, verifiable quotes attributed to the historical or authenticated author.

---

## 📁 File Structure

```text
quote-of-the-minute/
├── index.html     # Semantic markup, drawer, progress bar, accessibility
├── style.css      # Design system, glassmorphism, responsive styles, animations
├── script.js     # State management, shuffle bag, timer, favorites, events
├── quotes.js      # Hardcoded dataset of 290+ authentic verified quotes
└── README.md      # Documentation and usage guide
```
