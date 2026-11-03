/**
 * Quote of the Minute - Dataset
 * Hardcoded dataset of 292 real, verifiable quotes.
 * Categories: motivation, discipline, success, philosophy, learning, perseverance, mindset.
 */

const QUOTES_DATA = [
  {
    "text": "The secret of getting ahead is getting started.",
    "author": "Mark Twain",
    "category": "motivation"
  },
  {
    "text": "Go confidently in the direction of your dreams. Live the life you have imagined.",
    "author": "Henry David Thoreau",
    "category": "motivation"
  },
  {
    "text": "Believe you can and you're halfway there.",
    "author": "Theodore Roosevelt",
    "category": "motivation"
  },
  {
    "text": "You do not find the happy life. You make it.",
    "author": "Camilla Eyring Kimball",
    "category": "motivation"
  },
  {
    "text": "Act as if what you do makes a difference. It does.",
    "author": "William James",
    "category": "motivation"
  },
  {
    "text": "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "author": "Zig Ziglar",
    "category": "motivation"
  },
  {
    "text": "Start where you are. Use what you have. Do what you can.",
    "author": "Arthur Ashe",
    "category": "motivation"
  },
  {
    "text": "The future belongs to those who believe in the beauty of their dreams.",
    "author": "Eleanor Roosevelt",
    "category": "motivation"
  },
  {
    "text": "Aim for the moon. If you miss, you may hit a star.",
    "author": "W. Clement Stone",
    "category": "motivation"
  },
  {
    "text": "Don't count the days, make the days count.",
    "author": "Muhammad Ali",
    "category": "motivation"
  },
  {
    "text": "Magic is believing in yourself. If you can make that happen, you can make anything happen.",
    "author": "Johann Wolfgang von Goethe",
    "category": "motivation"
  },
  {
    "text": "You are never too old to set another goal or to dream a new dream.",
    "author": "C.S. Lewis",
    "category": "motivation"
  },
  {
    "text": "Light tomorrow with today.",
    "author": "Elizabeth Barrett Browning",
    "category": "motivation"
  },
  {
    "text": "The only limit to our realization of tomorrow will be our doubts of today.",
    "author": "Franklin D. Roosevelt",
    "category": "motivation"
  },
  {
    "text": "Keep your face always toward the sunshine, and shadows will fall behind you.",
    "author": "Walt Whitman",
    "category": "motivation"
  },
  {
    "text": "Turn your wounds into wisdom.",
    "author": "Oprah Winfrey",
    "category": "motivation"
  },
  {
    "text": "If you want to lift yourself up, lift up someone else.",
    "author": "Booker T. Washington",
    "category": "motivation"
  },
  {
    "text": "Whatever you are, be a good one.",
    "author": "Abraham Lincoln",
    "category": "motivation"
  },
  {
    "text": "The power of imagination makes us infinite.",
    "author": "John Muir",
    "category": "motivation"
  },
  {
    "text": "In a gentle way, you can shake the world.",
    "author": "Mahatma Gandhi",
    "category": "motivation"
  },
  {
    "text": "Every moment is a fresh beginning.",
    "author": "T.S. Eliot",
    "category": "motivation"
  },
  {
    "text": "Never let the fear of striking out keep you from playing the game.",
    "author": "Babe Ruth",
    "category": "motivation"
  },
  {
    "text": "Opportunities don't happen, you create them.",
    "author": "Chris Grosser",
    "category": "motivation"
  },
  {
    "text": "Someday is not a day of the week.",
    "author": "Janet Dailey",
    "category": "motivation"
  },
  {
    "text": "Do one thing every day that scares you.",
    "author": "Eleanor Roosevelt",
    "category": "motivation"
  },
  {
    "text": "Small deeds done are better than great deeds planned.",
    "author": "Peter Marshall",
    "category": "motivation"
  },
  {
    "text": "Action is the foundational key to all success.",
    "author": "Pablo Picasso",
    "category": "motivation"
  },
  {
    "text": "The sun himself is weak when he first rises, and gathers strength and courage as the day gets on.",
    "author": "Charles Dickens",
    "category": "motivation"
  },
  {
    "text": "You must do the things you think you cannot do.",
    "author": "Eleanor Roosevelt",
    "category": "motivation"
  },
  {
    "text": "Dream big and dare to fail.",
    "author": "Norman Vaughan",
    "category": "motivation"
  },
  {
    "text": "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    "author": "Anne Frank",
    "category": "motivation"
  },
  {
    "text": "To be the best, you must be able to handle the worst.",
    "author": "Wilson Kanadi",
    "category": "motivation"
  },
  {
    "text": "What we achieve inwardly will change outer reality.",
    "author": "Plutarch",
    "category": "motivation"
  },
  {
    "text": "Without haste, but without rest.",
    "author": "Johann Wolfgang von Goethe",
    "category": "motivation"
  },
  {
    "text": "The creation of a thousand forests is in one acorn.",
    "author": "Ralph Waldo Emerson",
    "category": "motivation"
  },
  {
    "text": "Rise above the storm and you will find the sunshine.",
    "author": "Mario Fernandez",
    "category": "motivation"
  },
  {
    "text": "If you cannot do great things, do small things in a great way.",
    "author": "Napoleon Hill",
    "category": "motivation"
  },
  {
    "text": "There are far, far better things ahead than any we leave behind.",
    "author": "C.S. Lewis",
    "category": "motivation"
  },
  {
    "text": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "author": "Will Durant",
    "category": "discipline"
  },
  {
    "text": "No man is free who is not master of himself.",
    "author": "Epictetus",
    "category": "discipline"
  },
  {
    "text": "First say to yourself what you would be; and then do what you have to do.",
    "author": "Epictetus",
    "category": "discipline"
  },
  {
    "text": "It is not that we have a short time to live, but that we waste a lot of it.",
    "author": "Seneca",
    "category": "discipline"
  },
  {
    "text": "Mastering others is strength. Mastering yourself is true power.",
    "author": "Lao Tzu",
    "category": "discipline"
  },
  {
    "text": "Between stimulus and response there is a space. In that space is our power to choose our response.",
    "author": "Viktor E. Frankl",
    "category": "discipline"
  },
  {
    "text": "Knowing is not enough; we must apply. Willing is not enough; we must do.",
    "author": "Johann Wolfgang von Goethe",
    "category": "discipline"
  },
  {
    "text": "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.",
    "author": "Abraham Lincoln",
    "category": "discipline"
  },
  {
    "text": "You may delay, but time will not.",
    "author": "Benjamin Franklin",
    "category": "discipline"
  },
  {
    "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "author": "Thomas A. Edison",
    "category": "discipline"
  },
  {
    "text": "Continuous improvement is better than delayed perfection.",
    "author": "Mark Twain",
    "category": "discipline"
  },
  {
    "text": "Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigors of the mind.",
    "author": "Leonardo da Vinci",
    "category": "discipline"
  },
  {
    "text": "Self-respect is the fruit of discipline; the sense of dignity grows with the ability to say no to oneself.",
    "author": "Abraham Joshua Heschel",
    "category": "discipline"
  },
  {
    "text": "Discipline is the bridge between goals and accomplishment.",
    "author": "Jim Rohn",
    "category": "discipline"
  },
  {
    "text": "He who cannot obey himself will be commanded. That is the nature of living creatures.",
    "author": "Friedrich Nietzsche",
    "category": "discipline"
  },
  {
    "text": "Rule your mind or it will rule you.",
    "author": "Horace",
    "category": "discipline"
  },
  {
    "text": "Small disciplines repeated with consistency every day lead to great achievements gained slowly over time.",
    "author": "John C. Maxwell",
    "category": "discipline"
  },
  {
    "text": "By constant self-discipline and self-control you can develop greatness of character.",
    "author": "Grenville Kleiser",
    "category": "discipline"
  },
  {
    "text": "The first and best victory is to conquer self.",
    "author": "Plato",
    "category": "discipline"
  },
  {
    "text": "Freedom is not procured by a full enjoyment of what is desired, but by controlling the desire.",
    "author": "Epictetus",
    "category": "discipline"
  },
  {
    "text": "To enjoy freedom we have to control ourselves.",
    "author": "Virginia Woolf",
    "category": "discipline"
  },
  {
    "text": "Success is nothing more than a few simple disciplines, practiced every day.",
    "author": "Jim Rohn",
    "category": "discipline"
  },
  {
    "text": "A disciplined mind leads to happiness, and an undisciplined mind leads to suffering.",
    "author": "Dalai Lama",
    "category": "discipline"
  },
  {
    "text": "I count him braver who overcomes his desires than him who conquers his enemies; for the hardest victory is over self.",
    "author": "Aristotle",
    "category": "discipline"
  },
  {
    "text": "Self-command is not only itself a great virtue, but from it all the other virtues seem to derive their principal lustre.",
    "author": "Adam Smith",
    "category": "discipline"
  },
  {
    "text": "Without self-discipline, success is impossible, period.",
    "author": "Lou Holtz",
    "category": "discipline"
  },
  {
    "text": "Hold yourself responsible for a higher standard than anybody else expects of you.",
    "author": "Henry Ward Beecher",
    "category": "discipline"
  },
  {
    "text": "What lies in our power to do, it lies in our power not to do.",
    "author": "Aristotle",
    "category": "discipline"
  },
  {
    "text": "Never compromise your principles for the sake of convenience.",
    "author": "John Wooden",
    "category": "discipline"
  },
  {
    "text": "One painful duty fulfilled makes the next plainer and easier.",
    "author": "Helen Keller",
    "category": "discipline"
  },
  {
    "text": "Better to conquer oneself than to conquer a thousand men in battle.",
    "author": "Gautama Buddha",
    "category": "discipline"
  },
  {
    "text": "The path to freedom lies through self-discipline and order.",
    "author": "Jiddu Krishnamurti",
    "category": "discipline"
  },
  {
    "text": "He who conquers himself is the mightiest warrior.",
    "author": "Confucius",
    "category": "discipline"
  },
  {
    "text": "Simplicity of character is the natural result of profound thought and self-restraint.",
    "author": "William Hazlitt",
    "category": "discipline"
  },
  {
    "text": "Do not wait; the time will never be 'just right.' Start where you stand, and work with whatever tools you may have.",
    "author": "George Herbert",
    "category": "discipline"
  },
  {
    "text": "Either you run the day or the day runs you.",
    "author": "Jim Rohn",
    "category": "discipline"
  },
  {
    "text": "Cultivate the habit of early rising. It is conducive to health, wealth, and wisdom.",
    "author": "T.C. Upham",
    "category": "discipline"
  },
  {
    "text": "Luck is what happens when preparation meets opportunity.",
    "author": "Seneca",
    "category": "success"
  },
  {
    "text": "Try not to become a man of success, but rather become a man of value.",
    "author": "Albert Einstein",
    "category": "success"
  },
  {
    "text": "Success usually comes to those who are too busy to be looking for it.",
    "author": "Henry David Thoreau",
    "category": "success"
  },
  {
    "text": "The secret of success is constancy to purpose.",
    "author": "Benjamin Disraeli",
    "category": "success"
  },
  {
    "text": "The road to success and the road to failure are almost exactly the same.",
    "author": "Colin R. Davis",
    "category": "success"
  },
  {
    "text": "Success is getting what you want, happiness is wanting what you get.",
    "author": "W.P. Kinsella",
    "category": "success"
  },
  {
    "text": "I find that the harder I work, the more luck I seem to have.",
    "author": "Thomas Jefferson",
    "category": "success"
  },
  {
    "text": "Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to do your best.",
    "author": "John Wooden",
    "category": "success"
  },
  {
    "text": "The successful warrior is the average man, with laser-like focus.",
    "author": "Bruce Lee",
    "category": "success"
  },
  {
    "text": "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
    "author": "Colin Powell",
    "category": "success"
  },
  {
    "text": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "author": "Albert Schweitzer",
    "category": "success"
  },
  {
    "text": "To succeed in life, you need two things: ignorance and confidence.",
    "author": "Mark Twain",
    "category": "success"
  },
  {
    "text": "The ladder of success is best climbed by stepping on the rungs of opportunity.",
    "author": "Ayn Rand",
    "category": "success"
  },
  {
    "text": "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
    "author": "David Brinkley",
    "category": "success"
  },
  {
    "text": "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome.",
    "author": "Booker T. Washington",
    "category": "success"
  },
  {
    "text": "The secret of success in life is for a man to be ready for his opportunity when it comes.",
    "author": "Benjamin Disraeli",
    "category": "success"
  },
  {
    "text": "Success consists of going from failure to failure without loss of enthusiasm.",
    "author": "Winston S. Churchill",
    "category": "success"
  },
  {
    "text": "Always bear in mind that your own resolution to succeed is more important than any other one thing.",
    "author": "Abraham Lincoln",
    "category": "success"
  },
  {
    "text": "Patience, persistence and perspiration make an unbeatable combination for success.",
    "author": "Napoleon Hill",
    "category": "success"
  },
  {
    "text": "If you really look closely, most overnight successes took a long time.",
    "author": "Steve Jobs",
    "category": "success"
  },
  {
    "text": "Have no fear of perfection - you'll never reach it.",
    "author": "Salvador Dalí",
    "category": "success"
  },
  {
    "text": "Success isn't about how much money you make; it's about the difference you make in people's lives.",
    "author": "Michelle Obama",
    "category": "success"
  },
  {
    "text": "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
    "author": "Vince Lombardi",
    "category": "success"
  },
  {
    "text": "Don't be distracted by criticism. Remember—the only taste of success some people get is to take a bite out of you.",
    "author": "Zig Ziglar",
    "category": "success"
  },
  {
    "text": "Success is liking yourself, liking what you do, and liking how you do it.",
    "author": "Maya Angelou",
    "category": "success"
  },
  {
    "text": "The only place where success comes before work is in the dictionary.",
    "author": "Vidal Sassoon",
    "category": "success"
  },
  {
    "text": "To accomplish great things, we must not only act, but also dream; not only plan, but also believe.",
    "author": "Anatole France",
    "category": "success"
  },
  {
    "text": "Real success is finding your lifework in the work that you love.",
    "author": "David McCullough",
    "category": "success"
  },
  {
    "text": "Formal education will make you a living; self-education will make you a fortune.",
    "author": "Jim Rohn",
    "category": "success"
  },
  {
    "text": "Define success on your own terms, achieve it by your own rules, and build a life you're proud to live.",
    "author": "Anne Sweeney",
    "category": "success"
  },
  {
    "text": "Success does not consist in never making mistakes but in never making the same one a second time.",
    "author": "George Bernard Shaw",
    "category": "success"
  },
  {
    "text": "Victory belongs to the most persevering.",
    "author": "Napoleon Bonaparte",
    "category": "success"
  },
  {
    "text": "However difficult life may seem, there is always something you can do and succeed at.",
    "author": "Stephen Hawking",
    "category": "success"
  },
  {
    "text": "Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don't quit.",
    "author": "Conrad Hilton",
    "category": "success"
  },
  {
    "text": "A champion is defined not by their wins but by how they can recover when they fall.",
    "author": "Serena Williams",
    "category": "success"
  },
  {
    "text": "Before anything else, preparation is the key to success.",
    "author": "Alexander Graham Bell",
    "category": "success"
  },
  {
    "text": "The greatest triumph of life is not in never failing, but in rising after every fall.",
    "author": "Oliver Goldsmith",
    "category": "success"
  },
  {
    "text": "Waste no more time arguing about what a good man should be. Be one.",
    "author": "Marcus Aurelius",
    "category": "philosophy"
  },
  {
    "text": "We suffer more often in imagination than in reality.",
    "author": "Seneca",
    "category": "philosophy"
  },
  {
    "text": "Wealth consists not in having great possessions, but in having few wants.",
    "author": "Epictetus",
    "category": "philosophy"
  },
  {
    "text": "Knowing yourself is the beginning of all wisdom.",
    "author": "Aristotle",
    "category": "philosophy"
  },
  {
    "text": "The only true wisdom is in knowing you know nothing.",
    "author": "Socrates",
    "category": "philosophy"
  },
  {
    "text": "The unexamined life is not worth living.",
    "author": "Socrates",
    "category": "philosophy"
  },
  {
    "text": "Knowing others is intelligence; knowing yourself is true wisdom.",
    "author": "Lao Tzu",
    "category": "philosophy"
  },
  {
    "text": "He who has a why to live can bear almost any how.",
    "author": "Friedrich Nietzsche",
    "category": "philosophy"
  },
  {
    "text": "Simplicity is the ultimate sophistication.",
    "author": "Leonardo da Vinci",
    "category": "philosophy"
  },
  {
    "text": "The greatest wealth is to live content with little.",
    "author": "Plato",
    "category": "philosophy"
  },
  {
    "text": "The greatest thing in the world is to know how to belong to oneself.",
    "author": "Michel de Montaigne",
    "category": "philosophy"
  },
  {
    "text": "Science is organized knowledge. Wisdom is organized life.",
    "author": "Immanuel Kant",
    "category": "philosophy"
  },
  {
    "text": "I think, therefore I am.",
    "author": "René Descartes",
    "category": "philosophy"
  },
  {
    "text": "Peace comes from within. Do not seek it without.",
    "author": "Gautama Buddha",
    "category": "philosophy"
  },
  {
    "text": "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love.",
    "author": "Marcus Aurelius",
    "category": "philosophy"
  },
  {
    "text": "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.",
    "author": "Epictetus",
    "category": "philosophy"
  },
  {
    "text": "Dwell on the beauty of life. Watch the stars, and see yourself running with them.",
    "author": "Marcus Aurelius",
    "category": "philosophy"
  },
  {
    "text": "Silence is a source of great strength.",
    "author": "Lao Tzu",
    "category": "philosophy"
  },
  {
    "text": "Happiness depends upon ourselves.",
    "author": "Aristotle",
    "category": "philosophy"
  },
  {
    "text": "To live is the rarest thing in the world. Most people exist, that is all.",
    "author": "Oscar Wilde",
    "category": "philosophy"
  },
  {
    "text": "Life must be understood backward. But it must be lived forward.",
    "author": "Søren Kierkegaard",
    "category": "philosophy"
  },
  {
    "text": "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.",
    "author": "Jean-Paul Sartre",
    "category": "philosophy"
  },
  {
    "text": "The price of anything is the amount of life you exchange for it.",
    "author": "Henry David Thoreau",
    "category": "philosophy"
  },
  {
    "text": "Nature does not hurry, yet everything is accomplished.",
    "author": "Lao Tzu",
    "category": "philosophy"
  },
  {
    "text": "No man ever steps in the same river twice, for it's not the same river and he's not the same man.",
    "author": "Heraclitus",
    "category": "philosophy"
  },
  {
    "text": "Change is the only constant in life.",
    "author": "Heraclitus",
    "category": "philosophy"
  },
  {
    "text": "Beware the barrenness of a busy life.",
    "author": "Socrates",
    "category": "philosophy"
  },
  {
    "text": "Everything has beauty, but not everyone sees it.",
    "author": "Confucius",
    "category": "philosophy"
  },
  {
    "text": "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    "author": "Marcus Aurelius",
    "category": "philosophy"
  },
  {
    "text": "Things do not change; we change.",
    "author": "Henry David Thoreau",
    "category": "philosophy"
  },
  {
    "text": "The mind is everything. What you think you become.",
    "author": "Gautama Buddha",
    "category": "philosophy"
  },
  {
    "text": "If you would be a real seeker after truth, it is necessary that at least once in your life you doubt, as far as possible, all things.",
    "author": "René Descartes",
    "category": "philosophy"
  },
  {
    "text": "All human wisdom is contained in these two words: Wait and Hope.",
    "author": "Alexandre Dumas",
    "category": "philosophy"
  },
  {
    "text": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "author": "Ralph Waldo Emerson",
    "category": "philosophy"
  },
  {
    "text": "You can discover more about a person in an hour of play than in a year of conversation.",
    "author": "Plato",
    "category": "philosophy"
  },
  {
    "text": "Life is really simple, but we insist on making it complicated.",
    "author": "Confucius",
    "category": "philosophy"
  },
  {
    "text": "The only fence against the world is a thorough knowledge of it.",
    "author": "John Locke",
    "category": "philosophy"
  },
  {
    "text": "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    "author": "Aristotle",
    "category": "philosophy"
  },
  {
    "text": "True friendship is a plant of slow growth, and must undergo and withstand the shocks of adversity.",
    "author": "George Washington",
    "category": "philosophy"
  },
  {
    "text": "Order your soul. Reduce your wants.",
    "author": "Augustine of Hippo",
    "category": "philosophy"
  },
  {
    "text": "The roots of education are bitter, but the fruit is sweet.",
    "author": "Aristotle",
    "category": "learning"
  },
  {
    "text": "Real knowledge is to know the extent of one's ignorance.",
    "author": "Confucius",
    "category": "learning"
  },
  {
    "text": "Learning never exhausts the mind.",
    "author": "Leonardo da Vinci",
    "category": "learning"
  },
  {
    "text": "A person who never made a mistake never tried anything new.",
    "author": "Albert Einstein",
    "category": "learning"
  },
  {
    "text": "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
    "author": "Albert Einstein",
    "category": "learning"
  },
  {
    "text": "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    "author": "Marie Curie",
    "category": "learning"
  },
  {
    "text": "If I have seen further it is by standing on the shoulders of Giants.",
    "author": "Isaac Newton",
    "category": "learning"
  },
  {
    "text": "An investment in knowledge pays the best interest.",
    "author": "Benjamin Franklin",
    "category": "learning"
  },
  {
    "text": "Failure is simply the opportunity to begin again, this time more intelligently.",
    "author": "Henry Ford",
    "category": "learning"
  },
  {
    "text": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "author": "Mahatma Gandhi",
    "category": "learning"
  },
  {
    "text": "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.",
    "author": "Brian Herbert",
    "category": "learning"
  },
  {
    "text": "Tell me and I forget, teach me and I may remember, involve me and I learn.",
    "author": "Benjamin Franklin",
    "category": "learning"
  },
  {
    "text": "Education is not the learning of facts, but the training of the mind to think.",
    "author": "Albert Einstein",
    "category": "learning"
  },
  {
    "text": "Change is the end result of all true learning.",
    "author": "Leo Buscaglia",
    "category": "learning"
  },
  {
    "text": "Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young.",
    "author": "Henry Ford",
    "category": "learning"
  },
  {
    "text": "The beautiful thing about learning is that no one can take it away from you.",
    "author": "B.B. King",
    "category": "learning"
  },
  {
    "text": "Study the past if you would define the future.",
    "author": "Confucius",
    "category": "learning"
  },
  {
    "text": "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.",
    "author": "Albert Einstein",
    "category": "learning"
  },
  {
    "text": "The expert in anything was once a beginner.",
    "author": "Helen Hayes",
    "category": "learning"
  },
  {
    "text": "Self-education is, I firmly believe, the only kind of education there is.",
    "author": "Isaac Asimov",
    "category": "learning"
  },
  {
    "text": "In learning you will teach, and in teaching you will learn.",
    "author": "Phil Collins",
    "category": "learning"
  },
  {
    "text": "Develop a passion for learning. If you do, you will never cease to grow.",
    "author": "Anthony J. D'Angelo",
    "category": "learning"
  },
  {
    "text": "It is what we know already that often prevents us from learning.",
    "author": "Claude Bernard",
    "category": "learning"
  },
  {
    "text": "The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.",
    "author": "Mortimer J. Adler",
    "category": "learning"
  },
  {
    "text": "I am still learning.",
    "author": "Michelangelo",
    "category": "learning"
  },
  {
    "text": "Curiosity is the wick in the candle of learning.",
    "author": "William Arthur Ward",
    "category": "learning"
  },
  {
    "text": "You cannot open a book without learning something.",
    "author": "Confucius",
    "category": "learning"
  },
  {
    "text": "Question everything. Learn something. Answer nothing.",
    "author": "Euripides",
    "category": "learning"
  },
  {
    "text": "The cure for boredom is curiosity. There is no cure for curiosity.",
    "author": "Dorothy Parker",
    "category": "learning"
  },
  {
    "text": "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
    "author": "Dr. Seuss",
    "category": "learning"
  },
  {
    "text": "Mistakes are the portals of discovery.",
    "author": "James Joyce",
    "category": "learning"
  },
  {
    "text": "To know that we know what we know, and that we do not know what we do not know, that is true knowledge.",
    "author": "Henry David Thoreau",
    "category": "learning"
  },
  {
    "text": "He who learns but does not think, is lost! He who thinks but does not learn is in great danger.",
    "author": "Confucius",
    "category": "learning"
  },
  {
    "text": "To acquire knowledge, one must study; but to acquire wisdom, one must observe.",
    "author": "Marilyn vos Savant",
    "category": "learning"
  },
  {
    "text": "A well-educated mind will always have more questions than answers.",
    "author": "Helen Keller",
    "category": "learning"
  },
  {
    "text": "The mind once enlightened cannot again become dark.",
    "author": "Thomas Paine",
    "category": "learning"
  },
  {
    "text": "Education is the kindling of a flame, not the filling of a vessel.",
    "author": "Socrates",
    "category": "learning"
  },
  {
    "text": "Difficulties strengthen the mind, as labor does the body.",
    "author": "Seneca",
    "category": "perseverance"
  },
  {
    "text": "It does not matter how slowly you go as long as you do not stop.",
    "author": "Confucius",
    "category": "perseverance"
  },
  {
    "text": "The man who moves a mountain begins by carrying away small stones.",
    "author": "Confucius",
    "category": "perseverance"
  },
  {
    "text": "The journey of a thousand miles begins with a single step.",
    "author": "Lao Tzu",
    "category": "perseverance"
  },
  {
    "text": "You may encounter many defeats, but you must not be defeated.",
    "author": "Maya Angelou",
    "category": "perseverance"
  },
  {
    "text": "Life is not easy for any of us. But what of that? We must have perseverance and above all confidence in ourselves.",
    "author": "Marie Curie",
    "category": "perseverance"
  },
  {
    "text": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "author": "Winston S. Churchill",
    "category": "perseverance"
  },
  {
    "text": "Do what you can, with what you have, where you are.",
    "author": "Theodore Roosevelt",
    "category": "perseverance"
  },
  {
    "text": "It always seems impossible until it is done.",
    "author": "Nelson Mandela",
    "category": "perseverance"
  },
  {
    "text": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "author": "Nelson Mandela",
    "category": "perseverance"
  },
  {
    "text": "I walk slowly, but I never walk backward.",
    "author": "Abraham Lincoln",
    "category": "perseverance"
  },
  {
    "text": "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened.",
    "author": "Helen Keller",
    "category": "perseverance"
  },
  {
    "text": "If there is no struggle, there is no progress.",
    "author": "Frederick Douglass",
    "category": "perseverance"
  },
  {
    "text": "Energy and persistence conquer all things.",
    "author": "Benjamin Franklin",
    "category": "perseverance"
  },
  {
    "text": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    "author": "Thomas A. Edison",
    "category": "perseverance"
  },
  {
    "text": "Fall seven times and stand up eight.",
    "author": "Japanese Proverb",
    "category": "perseverance"
  },
  {
    "text": "A river cuts through rock, not because of its power, but because of its persistence.",
    "author": "Jim Watkins",
    "category": "perseverance"
  },
  {
    "text": "Perseverance is failing 19 times and succeeding the 20th.",
    "author": "Julie Andrews",
    "category": "perseverance"
  },
  {
    "text": "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.'",
    "author": "Mary Anne Radmacher",
    "category": "perseverance"
  },
  {
    "text": "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "author": "Thomas A. Edison",
    "category": "perseverance"
  },
  {
    "text": "If you are going through hell, keep going.",
    "author": "Winston S. Churchill",
    "category": "perseverance"
  },
  {
    "text": "Through perseverance many people win success out of what seemed destined to be certain failure.",
    "author": "Benjamin Disraeli",
    "category": "perseverance"
  },
  {
    "text": "When the going gets tough, the tough get going.",
    "author": "Joseph P. Kennedy",
    "category": "perseverance"
  },
  {
    "text": "Perseverance is not a long race; it is many short races one after the other.",
    "author": "Walter Bagehot",
    "category": "perseverance"
  },
  {
    "text": "Never give up on something that you can't go a day without thinking about.",
    "author": "Winston S. Churchill",
    "category": "perseverance"
  },
  {
    "text": "The difference between perseverance and obstinacy is that one comes from a strong will, and the other from a strong won't.",
    "author": "Henry Ward Beecher",
    "category": "perseverance"
  },
  {
    "text": "Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish.",
    "author": "John Quincy Adams",
    "category": "perseverance"
  },
  {
    "text": "Never give up, for that is just the place and time that the tide will turn.",
    "author": "Harriet Beecher Stowe",
    "category": "perseverance"
  },
  {
    "text": "Permanence, perseverance and persistence in spite of all obstacles: it is this, of all things, that distinguishes the strong soul from the weak.",
    "author": "Thomas Carlyle",
    "category": "perseverance"
  },
  {
    "text": "Continuous effort - not strength or intelligence - is the key to unlocking our potential.",
    "author": "Winston S. Churchill",
    "category": "perseverance"
  },
  {
    "text": "I am a slow walker, but I never walk back.",
    "author": "Abraham Lincoln",
    "category": "perseverance"
  },
  {
    "text": "Great works are performed not by strength, but by perseverance.",
    "author": "Samuel Johnson",
    "category": "perseverance"
  },
  {
    "text": "You just can't beat the person who never gives up.",
    "author": "Babe Ruth",
    "category": "perseverance"
  },
  {
    "text": "It's not that I'm so smart, it's just that I stay with problems longer.",
    "author": "Albert Einstein",
    "category": "perseverance"
  },
  {
    "text": "Grit is living life like it's a marathon, not a sprint.",
    "author": "Angela Duckworth",
    "category": "perseverance"
  },
  {
    "text": "Stand firm, and you will overcome the storm.",
    "author": "Euripides",
    "category": "perseverance"
  },
  {
    "text": "Adversity causes some men to break; others to break records.",
    "author": "William Arthur Ward",
    "category": "perseverance"
  },
  {
    "text": "You have power over your mind - not outside events. Realize this, and you will find strength.",
    "author": "Marcus Aurelius",
    "category": "mindset"
  },
  {
    "text": "The soul becomes dyed with the color of its thoughts.",
    "author": "Marcus Aurelius",
    "category": "mindset"
  },
  {
    "text": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "author": "Ralph Waldo Emerson",
    "category": "mindset"
  },
  {
    "text": "When we are no longer able to change a situation, we are challenged to change ourselves.",
    "author": "Viktor E. Frankl",
    "category": "mindset"
  },
  {
    "text": "In the middle of difficulty lies opportunity.",
    "author": "Albert Einstein",
    "category": "mindset"
  },
  {
    "text": "To improve is to change; to be perfect is to change often.",
    "author": "Winston S. Churchill",
    "category": "mindset"
  },
  {
    "text": "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    "author": "Helen Keller",
    "category": "mindset"
  },
  {
    "text": "Character, not circumstance, makes the man.",
    "author": "Booker T. Washington",
    "category": "mindset"
  },
  {
    "text": "Whether you think you can, or you think you can't – you're right.",
    "author": "Henry Ford",
    "category": "mindset"
  },
  {
    "text": "It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change.",
    "author": "Charles Darwin",
    "category": "mindset"
  },
  {
    "text": "In the midst of chaos, there is also opportunity.",
    "author": "Sun Tzu",
    "category": "mindset"
  },
  {
    "text": "The greatest discovery of any generation is that a human being can alter his life by altering his attitude.",
    "author": "William James",
    "category": "mindset"
  },
  {
    "text": "Everything can be taken from a man but one thing: the last of human freedoms - to choose one's attitude in any given set of circumstances.",
    "author": "Viktor E. Frankl",
    "category": "mindset"
  },
  {
    "text": "Your beliefs become your thoughts, your thoughts become your words, your words become your actions, your actions become your habits.",
    "author": "Mahatma Gandhi",
    "category": "mindset"
  },
  {
    "text": "A man is but the product of his thoughts. What he thinks, he becomes.",
    "author": "Mahatma Gandhi",
    "category": "mindset"
  },
  {
    "text": "Attitude is a little thing that makes a big difference.",
    "author": "Winston S. Churchill",
    "category": "mindset"
  },
  {
    "text": "Life is 10% what happens to you and 90% how you react to it.",
    "author": "Charles R. Swindoll",
    "category": "mindset"
  },
  {
    "text": "Peace of mind comes from not wanting to change others.",
    "author": "Gerald G. Jampolsky",
    "category": "mindset"
  },
  {
    "text": "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven.",
    "author": "John Milton",
    "category": "mindset"
  },
  {
    "text": "Nothing can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude.",
    "author": "Thomas Jefferson",
    "category": "mindset"
  },
  {
    "text": "The happiness of your life depends upon the quality of your thoughts.",
    "author": "Marcus Aurelius",
    "category": "mindset"
  },
  {
    "text": "Change your thoughts and you change your world.",
    "author": "Norman Vincent Peale",
    "category": "mindset"
  },
  {
    "text": "Reject your sense of injury and the injury itself disappears.",
    "author": "Marcus Aurelius",
    "category": "mindset"
  },
  {
    "text": "If you don't like something, change it. If you can't change it, change your attitude.",
    "author": "Maya Angelou",
    "category": "mindset"
  },
  {
    "text": "Keep your face to the sunshine and you cannot see a shadow.",
    "author": "Helen Keller",
    "category": "mindset"
  },
  {
    "text": "The only disability in life is a bad attitude.",
    "author": "Scott Hamilton",
    "category": "mindset"
  },
  {
    "text": "We don't see things as they are, we see them as we are.",
    "author": "Anaïs Nin",
    "category": "mindset"
  },
  {
    "text": "Wherever you go, go with all your heart.",
    "author": "Confucius",
    "category": "mindset"
  },
  {
    "text": "There is nothing either good or bad, but thinking makes it so.",
    "author": "William Shakespeare",
    "category": "mindset"
  },
  {
    "text": "If you change the way you look at things, the things you look at change.",
    "author": "Wayne Dyer",
    "category": "mindset"
  },
  {
    "text": "You can't calm the storm, so stop trying. What you can do is calm yourself. The storm will pass.",
    "author": "Timber Hawkeye",
    "category": "mindset"
  },
  {
    "text": "Your present circumstances don't determine where you can go; they merely determine where you start.",
    "author": "Nido Qubein",
    "category": "mindset"
  },
  {
    "text": "Gratitude turns what we have into enough.",
    "author": "Aesop",
    "category": "mindset"
  },
  {
    "text": "Do not let what you cannot do interfere with what you can do.",
    "author": "John Wooden",
    "category": "mindset"
  },
  {
    "text": "What we think, we become. What we feel, we attract. What we imagine, we create.",
    "author": "Gautama Buddha",
    "category": "mindset"
  },
  {
    "text": "The primary cause of unhappiness is never the situation but your thoughts about it.",
    "author": "Eckhart Tolle",
    "category": "mindset"
  },
  {
    "text": "Control your thoughts or they will control you.",
    "author": "Horace",
    "category": "mindset"
  },
  {
    "text": "Look for the opportunity in every difficulty.",
    "author": "Lao Tzu",
    "category": "mindset"
  },
  {
    "text": "The energy of the mind is the essence of life.",
    "author": "Aristotle",
    "category": "motivation"
  },
  {
    "text": "What you do today can improve all your tomorrows.",
    "author": "Ralph Marston",
    "category": "motivation"
  },
  {
    "text": "Do not anticipate trouble, or worry about what may never happen. Keep in the sunlight.",
    "author": "Benjamin Franklin",
    "category": "motivation"
  },
  {
    "text": "Aim at the sun, and you may not reach it; but your arrow will fly far higher than if aimed at an object on a level with yourself.",
    "author": "J. Foster",
    "category": "motivation"
  },
  {
    "text": "By perseverance the snail reached the ark.",
    "author": "Charles Spurgeon",
    "category": "discipline"
  },
  {
    "text": "Silence is the sleep that nourishes wisdom.",
    "author": "Francis Bacon",
    "category": "discipline"
  },
  {
    "text": "Order is the sanity of the mind, the health of the body, the peace of the city, the security of the state.",
    "author": "Robert Southey",
    "category": "discipline"
  },
  {
    "text": "He who controls his tongue saves his life.",
    "author": "Solomon",
    "category": "discipline"
  },
  {
    "text": "It is hard to fail, but it is worse never to have tried to succeed.",
    "author": "Theodore Roosevelt",
    "category": "success"
  },
  {
    "text": "There is no elevator to success; you have to take the stairs.",
    "author": "Zig Ziglar",
    "category": "success"
  },
  {
    "text": "Success is a journey, not a destination.",
    "author": "Arthur Ashe",
    "category": "success"
  },
  {
    "text": "Success is how high you bounce when you hit bottom.",
    "author": "George S. Patton",
    "category": "success"
  },
  {
    "text": "Beware of no man more than of yourself; we carry our worse enemies within us.",
    "author": "Charles Spurgeon",
    "category": "philosophy"
  },
  {
    "text": "The greatest homage we can pay to truth is to use it.",
    "author": "Ralph Waldo Emerson",
    "category": "philosophy"
  },
  {
    "text": "Contentment is natural wealth, luxury is artificial poverty.",
    "author": "Socrates",
    "category": "philosophy"
  },
  {
    "text": "He who has not Christmas in his heart will never find it under a tree.",
    "author": "Roy L. Smith",
    "category": "philosophy"
  },
  {
    "text": "Learning is a treasure that will follow its owner everywhere.",
    "author": "Chinese Proverb",
    "category": "learning"
  },
  {
    "text": "The mind is not a vessel that needs filling, but wood that needs igniting.",
    "author": "Plutarch",
    "category": "learning"
  },
  {
    "text": "By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.",
    "author": "Confucius",
    "category": "learning"
  },
  {
    "text": "Knowledge has to be improved, challenged, and increased constantly, or it vanishes.",
    "author": "Peter F. Drucker",
    "category": "learning"
  },
  {
    "text": "Many strokes overthrow the tallest oaks.",
    "author": "John Lyly",
    "category": "perseverance"
  },
  {
    "text": "Little by little, one walks far.",
    "author": "Peruvian Proverb",
    "category": "perseverance"
  },
  {
    "text": "Patience is bitter, but its fruit is sweet.",
    "author": "Jean-Jacques Rousseau",
    "category": "perseverance"
  },
  {
    "text": "Step by step the longest march can be won.",
    "author": "Thomas Sankara",
    "category": "perseverance"
  },
  {
    "text": "The greatest weapon against stress is our ability to choose one thought over another.",
    "author": "William James",
    "category": "mindset"
  },
  {
    "text": "A calm mind brings inner strength and self-confidence, so that's very important for good health.",
    "author": "Dalai Lama",
    "category": "mindset"
  },
  {
    "text": "Nothing external to you has any power over you.",
    "author": "Ralph Waldo Emerson",
    "category": "mindset"
  },
  {
    "text": "As a man thinketh in his heart, so is he.",
    "author": "James Allen",
    "category": "mindset"
  }
];

// Expose globally for browser and module.exports for test runners
if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUOTES_DATA;
}
if (typeof window !== 'undefined') {
  window.QUOTES_DATA = QUOTES_DATA;
}
