const allQuotes = [
  {
    Quote: "Don't cry because it's over, smile because it happened.",
    Author: "Dr. Seuss",
    Tags: [
      "attributed-no-source",
      "cry",
      "crying",
      "experience",
      "happiness",
      "joy",
      "life",
      "misattributed-dr-seuss",
      "optimism",
      "sadness",
      "smile",
      "smiling "
    ],
    Category: "life"
  },
  {
    Quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    Author: "Marilyn Monroe",
    Tags: [
      "attributed-no-source",
      "best",
      "life",
      "love",
      "mistakes",
      "out-of-control",
      "truth",
      "worst "
    ],
    Popularity: 0.12912212912212911,
    Category: "love"
  },

  {
    Quote: "Be yourself; everyone else is already taken.",
    Author: "Oscar Wilde",
    Tags: [
      "attributed-no-source",
      "be-yourself",
      "honesty",
      "inspirational",
      "misattributed-oscar-wilde "
    ],
    Popularity: 0.11322311322311322,
    Category: "inspiration"
  },
  {
    Quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    Author: "Albert Einstein",
    Tags: [
      "attributed-no-source",
      "human-nature",
      "humor",
      "infinity",
      "philosophy",
      "science",
      "stupidity",
      "universe "
    ],
    Popularity: 0.10312710312710313,
    Category: "humor"
  },

  {
    Quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    Author: "Bernard M. Baruch",
    Tags: [
      "ataraxy",
      "be-yourself",
      "confidence",
      "fitting-in",
      "individuality",
      "those-who-matter "
    ],
    Popularity: 0.10189010189010189,
    Category: ""
  },
  {
    Quote:
      "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
    Author: "William W. Purkey",
    Tags: ["dance", "heaven", "hurt", "inspirational", "life", "love", "sing "],
    Popularity: 0.10005610005610005,
    Category: "love"
  },
  {
    Quote:
      "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
    Author: "William W. Purkey",
    Tags: ["dance", "heaven", "hurt", "inspirational", "life", "love", "sing "],
    Popularity: 0.10005610005610005,
    Category: "life"
  },
  {
    Quote:
      "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
    Author: "William W. Purkey",
    Tags: ["dance", "heaven", "hurt", "inspirational", "life", "love", "sing "],
    Popularity: 0.10005610005610005,
    Category: "inspiration"
  },
  {
    Quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    Author: "Dr. Seuss",
    Tags: ["attributed-no-source", "dreams", "love", "reality", "sleep "],
    Popularity: 0.09572409572409572,
    Category: "love"
  },
  {
    Quote: "A room without books is like a body without a soul.",
    Author: "Marcus Tullius Cicero",
    Tags: ["attributed-no-source", "books", "simile", "soul "],
    Popularity: 0.09537509537509538,
    Category: "soul"
  },
  {
    Quote: "A room without books is like a body without a soul.",
    Author: "Marcus Tullius Cicero",
    Tags: ["attributed-no-source", "books", "simile", "soul "],
    Popularity: 0.09537509537509538,
    Category: "books"
  },
  {
    Quote: "So many books, so little time.",
    Author: "Frank Zappa",
    Tags: ["books", "humor "],
    Popularity: 0.09506809506809506,
    Category: "humor"
  },
  {
    Quote: "So many books, so little time.",
    Author: "Frank Zappa",
    Tags: ["books", "humor "],
    Popularity: 0.09506809506809506,
    Category: "books"
  },
  {
    Quote: "You only live once, but if you do it right, once is enough.",
    Author: "Mae West",
    Tags: ["humor", "life "],
    Popularity: 0.08772108772108772,
    Category: "life"
  },
  {
    Quote: "You only live once, but if you do it right, once is enough.",
    Author: "Mae West",
    Tags: ["humor", "life "],
    Popularity: 0.08772108772108772,
    Category: "humor"
  },
  {
    Quote: "Be the change that you wish to see in the world.",
    Author: "Mahatma Gandhi",
    Tags: ["action", "change", "inspirational", "philosophy", "wish "],
    Popularity: 0.08524808524808525,
    Category: "inspiration"
  },
  {
    Quote: "Be the change that you wish to see in the world.",
    Author: "Mahatma Gandhi",
    Tags: ["action", "change", "inspirational", "philosophy", "wish "],
    Popularity: 0.08524808524808525,
    Category: "philosophy"
  },
  {
    Quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    Author: "Robert Frost",
    Tags: ["life "],
    Popularity: 0.08117608117608117,
    Category: "life"
  },
  {
    Quote:
      'Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .',
    Author: "C.S. Lewis,  The Four Loves",
    Tags: ["friendship "],
    Popularity: 0.07332207332207333,
    Category: ""
  },
  {
    Quote:
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    Author: "J.K. Rowling,  Harry Potter and the Goblet of Fire",
    Tags: ["from-charles-bayard-miliken", "misattributed-j-k-rowling "],
    Popularity: 0.07218607218607219,
    Category: ""
  },
  {
    Quote:
      "Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend",
    Author: "Albert Camus",
    Tags: ["friends", "friendship", "misattributed-albert-camus "],
    Popularity: 0.07155007155007155,
    Category: ""
  },
  {
    Quote: "No one can make you feel inferior without your consent.",
    Author: "Eleanor Roosevelt,  This is My Story",
    Tags: ["confidence", "inspirational", "wisdom "],
    Popularity: 0.06906506906506907,
    Category: "inspiration"
  },
  {
    Quote: "No one can make you feel inferior without your consent.",
    Author: "Eleanor Roosevelt,  This is My Story",
    Tags: ["confidence", "inspirational", "wisdom "],
    Popularity: 0.06906506906506907,
    Category: "wisdom"
  },
  {
    Quote: "If you tell the truth, you don't have to remember anything.",
    Author: "Mark Twain",
    Tags: ["lies", "lying", "memory", "truth "],
    Popularity: 0.06795206795206796,
    Category: "truth"
  },
  {
    Quote: "A friend is someone who knows all about you and still loves you.",
    Author: "Elbert Hubbard",
    Tags: ["friend", "friendship", "knowledge", "love "],
    Popularity: 0.0661000661000661,
    Category: "love"
  },
  {
    Quote: "A friend is someone who knows all about you and still loves you.",
    Author: "Elbert Hubbard",
    Tags: ["friend", "friendship", "knowledge", "love "],
    Popularity: 0.0661000661000661,
    Category: "knowledge"
  },
  {
    Quote: "Always forgive your enemies; nothing annoys them so much.",
    Author: "Oscar Wilde",
    Tags: ["attributed-no-source", "enemies", "forgiveness", "strategy "],
    Popularity: 0.061497061497061495,
    Category: ""
  },
  {
    Quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    Author: "Maya Angelou",
    Tags: ["61419 likes "],
    Popularity: 0.06141906141906142,
    Category: ""
  },
  {
    Quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    Author: "Mahatma Gandhi",
    Tags: ["carpe-diem", "education", "inspirational", "learning "],
    Popularity: 0.05958405958405959,
    Category: "inspiration"
  },
  {
    Quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    Author: "Mahatma Gandhi",
    Tags: ["carpe-diem", "education", "inspirational", "learning "],
    Popularity: 0.05958405958405959,
    Category: "education"
  },
  {
    Quote:
      "I am so clever that sometimes I don't understand a single word of what I am saying.",
    Author: "Oscar Wilde,  The Happy Prince and Other Stories",
    Tags: ["intelligence", "self-deprecation "],
    Popularity: 0.05826905826905827,
    Category: ""
  },
  {
    Quote:
      "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    Author:
      "Martin Luther King Jr.,  A Testament of Hope: The Essential Writings and Speeches",
    Tags: [
      "darkness",
      "drive-out",
      "hate",
      "inspirational",
      "light",
      "love",
      "peace "
    ],
    Popularity: 0.05806205806205806,
    Category: "love"
  },
  {
    Quote:
      "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    Author:
      "Martin Luther King Jr.,  A Testament of Hope: The Essential Writings and Speeches",
    Tags: [
      "darkness",
      "drive-out",
      "hate",
      "inspirational",
      "light",
      "love",
      "peace "
    ],
    Popularity: 0.05806205806205806,
    Category: "inspiration"
  },
  {
    Quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    Author: "Oscar Wilde",
    Tags: ["life "],
    Popularity: 0.058033058033058034,
    Category: "life"
  },
  {
    Quote: "Without music, life would be a mistake.",
    Author: "Friedrich Nietzsche,  Twilight of the Idols",
    Tags: ["inspirational", "music", "philosophy "],
    Popularity: 0.05467605467605468,
    Category: "inspiration"
  },
  {
    Quote: "Without music, life would be a mistake.",
    Author: "Friedrich Nietzsche,  Twilight of the Idols",
    Tags: ["inspirational", "music", "philosophy "],
    Popularity: 0.05467605467605468,
    Category: "philosophy"
  },
  {
    Quote:
      "Insanity is doing the same thing, over and over again, but expecting different results.",
    Author: "Narcotics Anonymous",
    Tags: [
      "humor",
      "insanity",
      "life",
      "misattributed-ben-franklin",
      "misattributed-mark-twain",
      "misattributed-to-einstein "
    ],
    Popularity: 0.054046054046054046,
    Category: "life"
  },
  {
    Quote:
      "Insanity is doing the same thing, over and over again, but expecting different results.",
    Author: "Narcotics Anonymous",
    Tags: [
      "humor",
      "insanity",
      "life",
      "misattributed-ben-franklin",
      "misattributed-mark-twain",
      "misattributed-to-einstein "
    ],
    Popularity: 0.054046054046054046,
    Category: "humor"
  },
  {
    Quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    Author: "Ralph Waldo Emerson",
    Tags: [
      "accomplishment",
      "attributed-no-source",
      "be-yourself",
      "conformity",
      "individuality "
    ],
    Popularity: 0.05383405383405383,
    Category: ""
  },
  {
    Quote:
      "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.",
    Author: "Marilyn Monroe",
    Tags: ["attributed-no-source "],
    Popularity: 0.05256605256605257,
    Category: ""
  },
  {
    Quote:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    Author: "H. Jackson Brown Jr.,  P.S. I Love You",
    Tags: [
      "actions",
      "disappointed",
      "disappointment",
      "dream",
      "dreams",
      "explore",
      "misattributed-mark-twain",
      "sail "
    ],
    Popularity: 0.05128305128305128,
    Category: ""
  },
  {
    Quote: "We accept the love we think we deserve.",
    Author: "Stephen Chbosky,  The Perks of Being a Wallflower",
    Tags: ["inspirational", "love "],
    Popularity: 0.0504030504030504,
    Category: "love"
  },
  {
    Quote: "We accept the love we think we deserve.",
    Author: "Stephen Chbosky,  The Perks of Being a Wallflower",
    Tags: ["inspirational", "love "],
    Popularity: 0.0504030504030504,
    Category: "inspiration"
  },
  {
    Quote:
      "It is better to be hated for what you are than to be loved for what you are not.",
    Author: "André Gide,  Autumn Leaves",
    Tags: ["life", "love "],
    Popularity: 0.04762504762504763,
    Category: "love"
  },
  {
    Quote:
      "It is better to be hated for what you are than to be loved for what you are not.",
    Author: "André Gide,  Autumn Leaves",
    Tags: ["life", "love "],
    Popularity: 0.04762504762504763,
    Category: "life"
  },
  {
    Quote:
      "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
    Author: "Marilyn Monroe",
    Tags: ["attributed-no-source", "be-yourself", "inspirational "],
    Popularity: 0.04319004319004319,
    Category: "inspiration"
  },
  {
    Quote:
      "All that is gold does not glitter,Not all those who wander are lost;The old that is strong does not wither,Deep roots are not reached by the frost.From the ashes a fire shall be woken,A light from the shadows shall spring;Renewed shall be blade that was broken,The crownless again shall be king.",
    Author: "J.R.R. Tolkien,  The Fellowship of the Ring",
    Tags: [
      "frost",
      "glitter",
      "gold",
      "lost",
      "poetry",
      "roots",
      "strength",
      "strong",
      "wander",
      "wither "
    ],
    Popularity: 0.043077043077043076,
    Category: "poetry"
  },
  {
    Quote:
      "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
    Author: "Jane Austen,  Northanger Abbey",
    Tags: ["aliteracy", "books", "classic", "humor "],
    Popularity: 0.04092704092704093,
    Category: "humor"
  },
  {
    Quote:
      "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
    Author: "Jane Austen,  Northanger Abbey",
    Tags: ["aliteracy", "books", "classic", "humor "],
    Popularity: 0.04092704092704093,
    Category: "books"
  },
  {
    Quote:
      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    Author: "Albert Einstein",
    Tags: [
      "attributed-no-source",
      "inspirational",
      "life",
      "live",
      "miracle",
      "miracles "
    ],
    Popularity: 0.040579040579040576,
    Category: "life"
  },
  {
    Quote:
      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    Author: "Albert Einstein",
    Tags: [
      "attributed-no-source",
      "inspirational",
      "life",
      "live",
      "miracle",
      "miracles "
    ],
    Popularity: 0.040579040579040576,
    Category: "inspiration"
  },
  {
    Quote:
      "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.",
    Author: "Maurice Switzer",
    Tags: ["misattributed-to-abraham-lincoln", "remaining-silent", "wisdom "],
    Popularity: 0.04028004028004028,
    Category: "wisdom"
  },
  {
    Quote:
      "As he read, I fell in love the way you fall asleep: slowly, and then all at once.",
    Author: "John Green,  The Fault in Our Stars",
    Tags: ["love "],
    Popularity: 0.039633039633039636,
    Category: "love"
  },
  {
    Quote:
      "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    Author: "J.K. Rowling,  Harry Potter and the Chamber of Secrets",
    Tags: ["abilities", "choices "],
    Popularity: 0.03955003955003955,
    Category: ""
  },
  {
    Quote: "Life is what happens to you while you're busy making other plans.",
    Author: "Allen Saunders",
    Tags: ["fate", "life", "misattributed-john-lennon", "planning", "plans "],
    Popularity: 0.03891403891403891,
    Category: "life"
  },
  {
    Quote:
      "Good friends, good books, and a sleepy conscience: this is the ideal life.",
    Author: "Mark Twain",
    Tags: ["books", "contentment", "friends", "friendship", "life "],
    Popularity: 0.038455038455038455,
    Category: "life"
  },
  {
    Quote:
      "Good friends, good books, and a sleepy conscience: this is the ideal life.",
    Author: "Mark Twain",
    Tags: ["books", "contentment", "friends", "friendship", "life "],
    Popularity: 0.038455038455038455,
    Category: "books"
  },
  {
    Quote:
      "Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).",
    Author: "Mark Twain",
    Tags: [
      "individuality",
      "majority",
      "minority",
      "pause",
      "reflect",
      "wisdom "
    ],
    Popularity: 0.03822203822203822,
    Category: "wisdom"
  },
  {
    Quote: "It does not do to dwell on dreams and forget to live.",
    Author: "J.K. Rowling,  Harry Potter and the Sorcerer's Stone",
    Tags: ["dreams", "life "],
    Popularity: 0.03810703810703811,
    Category: "life"
  },
  {
    Quote:
      "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    Author: "William Shakespeare,  As You Like It",
    Tags: ["wisdom "],
    Popularity: 0.03784503784503784,
    Category: "wisdom"
  },
  {
    Quote:
      "A woman is like a tea bag; you never know how strong it is until it's in hot water.",
    Author: "Eleanor Roosevelt",
    Tags: ["attributed-no-source", "misattributed-eleanor-roosevelt "],
    Popularity: 0.036795036795036797,
    Category: ""
  },
  {
    Quote:
      "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    Author: "Bil Keane",
    Tags: [
      "attributed-no-source",
      "hope",
      "inspirational",
      "misattributed-eleanor-roosevelt",
      "past",
      "present",
      "widely-misattributed "
    ],
    Popularity: 0.036685036685036684,
    Category: "inspiration"
  },
  {
    Quote:
      "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    Author: "Bil Keane",
    Tags: [
      "attributed-no-source",
      "hope",
      "inspirational",
      "misattributed-eleanor-roosevelt",
      "past",
      "present",
      "widely-misattributed "
    ],
    Popularity: 0.036685036685036684,
    Category: "hope"
  },
  {
    Quote: "We are all in the gutter, but some of us are looking at the stars.",
    Author: "Oscar Wilde,  Lady Windermere's Fan",
    Tags: ["inspirational", "optimism", "perception", "pessimism "],
    Popularity: 0.035583035583035584,
    Category: "inspiration"
  },
  {
    Quote: "If you don't stand for something you will fall for anything.",
    Author: "Gordon A. Eadie",
    Tags: [
      "belief",
      "integrity",
      "misattributed-to-malcolm-x",
      "misattributed-to-rosa-parks "
    ],
    Popularity: 0.03557703557703558,
    Category: ""
  },
  {
    Quote:
      "The man who does not read has no advantage over the man who cannot read.",
    Author: "Mark Twain",
    Tags: ["aliteracy", "attributed-no-source", "literacy "],
    Popularity: 0.0346990346990347,
    Category: ""
  },
  {
    Quote: "I have not failed. I've just found 10,000 ways that won't work.",
    Author: "Thomas A. Edison",
    Tags: ["edison", "failure", "inspirational", "paraphrased "],
    Popularity: 0.03406803406803407,
    Category: "inspiration"
  },
  {
    Quote:
      "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
    Author: "Friedrich Nietzsche",
    Tags: [
      "friendship",
      "lack-of-friendship",
      "lack-of-love",
      "love",
      "marriage",
      "unhappy-marriage "
    ],
    Popularity: 0.03397803397803398,
    Category: "friendship"
  },
  {
    Quote:
      "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
    Author: "Friedrich Nietzsche",
    Tags: [
      "friendship",
      "lack-of-friendship",
      "lack-of-love",
      "love",
      "marriage",
      "unhappy-marriage "
    ],
    Popularity: 0.03397803397803398,
    Category: "love"
  },
  {
    Quote:
      "The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.",
    Author: "Elie Wiesel",
    Tags: [
      "activism",
      "apathy",
      "hate",
      "indifference",
      "inspirational",
      "love",
      "opposite",
      "philosophy "
    ],
    Popularity: 0.03324703324703325,
    Category: "love"
  },
  {
    Quote:
      "The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.",
    Author: "Elie Wiesel",
    Tags: [
      "activism",
      "apathy",
      "hate",
      "indifference",
      "inspirational",
      "love",
      "opposite",
      "philosophy "
    ],
    Popularity: 0.03324703324703325,
    Category: "inspiration"
  },
  {
    Quote:
      "The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.",
    Author: "Elie Wiesel",
    Tags: [
      "activism",
      "apathy",
      "hate",
      "indifference",
      "inspirational",
      "love",
      "opposite",
      "philosophy "
    ],
    Popularity: 0.03324703324703325,
    Category: "philosophy"
  },
  {
    Quote:
      "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
    Author: "Neil Gaiman,  Coraline",
    Tags: [
      "books",
      "dragons",
      "fairy-tales",
      "inspirational",
      "paraphrasing-g-k-chesterton "
    ],
    Popularity: 0.03288803288803289,
    Category: "inspiration"
  },
  {
    Quote:
      "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
    Author: "Neil Gaiman,  Coraline",
    Tags: [
      "books",
      "dragons",
      "fairy-tales",
      "inspirational",
      "paraphrasing-g-k-chesterton "
    ],
    Popularity: 0.03288803288803289,
    Category: "books"
  },
  {
    Quote:
      "Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.",
    Author:
      "Groucho Marx,  The Essential Groucho: Writings For By And About Groucho Marx",
    Tags: ["animals", "books", "dogs", "friends", "humor "],
    Popularity: 0.03286403286403287,
    Category: "humor"
  },
  {
    Quote:
      "Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.",
    Author:
      "Groucho Marx,  The Essential Groucho: Writings For By And About Groucho Marx",
    Tags: ["animals", "books", "dogs", "friends", "humor "],
    Popularity: 0.03286403286403287,
    Category: "books"
  },
  {
    Quote:
      "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
    Author: "Douglas Adams,  The Long Dark Tea-Time of the Soul",
    Tags: ["life", "navigation "],
    Popularity: 0.03283903283903284,
    Category: "life"
  },
  {
    Quote:
      "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    Author: "Albert Einstein",
    Tags: ["1929", "imagination", "inspirational", "viereck-interview "],
    Popularity: 0.03210403210403211,
    Category: "inspiration"
  },
  {
    Quote: "A day without sunshine is like, you know, night.",
    Author: "Steve Martin",
    Tags: ["humor", "obvious", "simile "],
    Popularity: 0.03204503204503204,
    Category: "humor"
  },
  {
    Quote:
      "I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.",
    Author: "Dr. Seuss",
    Tags: ["fantasy "],
    Popularity: 0.031993031993031995,
    Category: ""
  },
  {
    Quote:
      "Never put off till tomorrow what may be done day after tomorrow just as well.",
    Author: "Mark Twain",
    Tags: ["humor", "procrastination "],
    Popularity: 0.03153803153803154,
    Category: "humor"
  },
  {
    Quote:
      "I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.",
    Author: "Pablo Neruda,  100 Love Sonnets",
    Tags: ["love", "poetry "],
    Popularity: 0.03138303138303138,
    Category: "love"
  },
  {
    Quote:
      "I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.",
    Author: "Pablo Neruda,  100 Love Sonnets",
    Tags: ["love", "poetry "],
    Popularity: 0.03138303138303138,
    Category: "poetry"
  },
  {
    Quote: "I solemnly swear that I am up to no good.",
    Author: "J.K. Rowling,  Harry Potter and the Prisoner of Azkaban",
    Tags: ["mischief "],
    Popularity: 0.031184031184031184,
    Category: ""
  },
  {
    Quote: "That which does not kill us makes us stronger.",
    Author: "Friedrich Nietzsche",
    Tags: ["paraphrased", "strength "],
    Popularity: 0.03055903055903056,
    Category: ""
  },
  {
    Quote:
      "Have you ever been in love? Horrible isn't it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.",
    Author: "Neil Gaiman,  The Sandman, Vol. 9: The Kindly Ones",
    Tags: ["love "],
    Popularity: 0.030386030386030386,
    Category: "love"
  },
  {
    Quote: "Love all, trust a few, do wrong to none.",
    Author: "William Shakespeare,  All's Well That Ends Well",
    Tags: ["do-wrong", "love", "trust", "wrong "],
    Popularity: 0.03012703012703013,
    Category: "love"
  },
  {
    Quote:
      "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...",
    Author: "Dr. Seuss,  Oh, The Places You'll Go!",
    Tags: ["inspirational "],
    Popularity: 0.02965902965902966,
    Category: "inspiration"
  },
  {
    Quote: "If you judge people, you have no time to love them.",
    Author: "Mother Teresa",
    Tags: ["attributed-no-source "],
    Popularity: 0.029295029295029296,
    Category: ""
  },
  {
    Quote:
      "There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.",
    Author: "Sarah Dessen,  The Truth About Forever",
    Tags: ["love "],
    Popularity: 0.028858028858028857,
    Category: "love"
  },
  {
    Quote:
      "For every minute you are angry you lose sixty seconds of happiness.",
    Author: "Ralph Waldo Emerson",
    Tags: ["happiness "],
    Popularity: 0.028285028285028286,
    Category: "happiness"
  },
  {
    Quote:
      "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    Author: "Lao Tzu",
    Tags: [
      "courage",
      "deeply-loved",
      "love",
      "strength",
      "widely-misattributed "
    ],
    Popularity: 0.027698027698027698,
    Category: "love"
  },
  {
    Quote: "My thoughts are stars I cannot fathom into constellations.",
    Author: "John Green,  The Fault in Our Stars",
    Tags: ["27515 likes "],
    Popularity: 0.027515027515027515,
    Category: ""
  },
  {
    Quote:
      "I love deadlines. I love the whooshing noise they make as they go by.",
    Author: "Douglas Adams,  The Salmon of Doubt",
    Tags: ["deadlines", "humor", "humour", "work", "writing "],
    Popularity: 0.027476027476027474,
    Category: "humor"
  },
  {
    Quote:
      "I love deadlines. I love the whooshing noise they make as they go by.",
    Author: "Douglas Adams,  The Salmon of Doubt",
    Tags: ["deadlines", "humor", "humour", "work", "writing "],
    Popularity: 0.027476027476027474,
    Category: "writing"
  },
  {
    Quote: "It is never too late to be what you might have been.",
    Author: "George Eliot",
    Tags: ["inspirational "],
    Popularity: 0.026834026834026834,
    Category: "inspiration"
  },
  {
    Quote:
      "Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.",
    Author: "Garrison Keillor",
    Tags: ["humor", "religion "],
    Popularity: 0.026595026595026595,
    Category: "humor"
  },
  {
    Quote:
      "Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.",
    Author: "Garrison Keillor",
    Tags: ["humor", "religion "],
    Popularity: 0.026595026595026595,
    Category: "religion"
  },
  {
    Quote:
      "A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.",
    Author: "George R.R. Martin,  A Dance with Dragons",
    Tags: ["read", "readers", "reading", "reading-books "],
    Popularity: 0.026393026393026393,
    Category: ""
  },
  {
    Quote:
      "I'm not upset that you lied to me, I'm upset that from now on I can't believe you.",
    Author: "Friedrich Nietzsche",
    Tags: ["lies", "lying", "trust "],
    Popularity: 0.026019026019026018,
    Category: ""
  },
  {
    Quote:
      "If you can't explain it to a six year old, you don't understand it yourself.",
    Author: "Albert Einstein",
    Tags: ["attributed-no-source", "simplicity", "understand "],
    Popularity: 0.025967025967025967,
    Category: ""
  },
  {
    Quote:
      "Women and cats will do as they please, and men and dogs should relax and get used to the idea.",
    Author: "Robert A. Heinlein",
    Tags: ["cats", "humor", "women "],
    Popularity: 0.025792025792025792,
    Category: "humor"
  },
  {
    Quote:
      "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
    Author: "J.K. Rowling,  Harry Potter and the Sorcerer's Stone",
    Tags: ["courage", "friends "],
    Popularity: 0.02565802565802566,
    Category: ""
  },
  {
    Quote:
      "Love is that condition in which the happiness of another person is essential to your own.",
    Author: "Robert A. Heinlein,  Stranger in a Strange Land",
    Tags: ["essential", "happiness", "love "],
    Popularity: 0.025575025575025574,
    Category: "love"
  },
  {
    Quote:
      "Love is that condition in which the happiness of another person is essential to your own.",
    Author: "Robert A. Heinlein,  Stranger in a Strange Land",
    Tags: ["essential", "happiness", "love "],
    Popularity: 0.025575025575025574,
    Category: "happiness"
  },
  {
    Quote:
      "Sometimes the questions are complicated and the answers are simple.",
    Author: "Dr. Seuss",
    Tags: ["attributed-no-source", "life "],
    Popularity: 0.02498002498002498,
    Category: "life"
  },
  {
    Quote: "I have always imagined that Paradise will be a kind of library.",
    Author: "Jorge Luis Borges",
    Tags: ["books", "library "],
    Popularity: 0.024943024943024944,
    Category: "books"
  },
  {
    Quote: "We read to know we're not alone.",
    Author: "William Nicholson,  Shadowlands",
    Tags: ["misattributed-to-c-s-lewis", "reading "],
    Popularity: 0.024803024803024803,
    Category: ""
  },
  {
    Quote: 'You love me. Real or not real?"I tell him, "Real.',
    Author: "Suzanne Collins,  Mockingjay",
    Tags: ["katniss", "love", "peeta", "suzanne-collins", "the-hunger-games "],
    Popularity: 0.024678024678024678,
    Category: "love"
  },
  {
    Quote: "We don't see things as they are, we see them as we are.",
    Author: "Anaïs Nin",
    Tags: ["24217 likes "],
    Popularity: 0.024217024217024218,
    Category: ""
  },
  {
    Quote:
      "Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye.",
    Author: "Jim Henson",
    Tags: ["humor "],
    Popularity: 0.024027024027024026,
    Category: "humor"
  },
  {
    Quote:
      "All you need is love. But a little chocolate now and then doesn't hurt.",
    Author: "Charles M. Schulz",
    Tags: ["chocolate", "food", "humor "],
    Popularity: 0.024000024000024,
    Category: "humor"
  },
  {
    Quote: "Everything you can imagine is real.",
    Author: "Pablo Picasso",
    Tags: ["art", "imagination", "inspirational", "life "],
    Popularity: 0.023496023496023494,
    Category: "life"
  },
  {
    Quote: "Everything you can imagine is real.",
    Author: "Pablo Picasso",
    Tags: ["art", "imagination", "inspirational", "life "],
    Popularity: 0.023496023496023494,
    Category: "inspiration"
  },
  {
    Quote: "There is no greater agony than bearing an untold story inside you.",
    Author: "Maya Angelou,  I Know Why the Caged Bird Sings",
    Tags: ["1970", "inspirational", "stories", "writing "],
    Popularity: 0.023332023332023333,
    Category: "inspiration"
  },
  {
    Quote: "There is no greater agony than bearing an untold story inside you.",
    Author: "Maya Angelou,  I Know Why the Caged Bird Sings",
    Tags: ["1970", "inspirational", "stories", "writing "],
    Popularity: 0.023332023332023333,
    Category: "writing"
  },
  {
    Quote:
      "Today you are You, that is truer than true. There is no one alive who is Youer than You.",
    Author: "Dr. Seuss,  Happy Birthday to You!",
    Tags: ["comedy", "life", "yourself "],
    Popularity: 0.02332002332002332,
    Category: "life"
  },
  {
    Quote:
      "Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.",
    Author: "John Green,  The Fault in Our Stars",
    Tags: ["books", "power-of-words", "reading "],
    Popularity: 0.0228020228020228,
    Category: "books"
  },
  {
    Quote: "Never trust anyone who has not brought a book with them.",
    Author: "Lemony Snicket,  Horseradish",
    Tags: ["books", "reading "],
    Popularity: 0.022655022655022655,
    Category: "books"
  },
  {
    Quote:
      "Whenever I feel the need to exercise, I lie down until it goes away.",
    Author: "Paul Terry",
    Tags: ["exercise", "humor", "laziness", "misattributed-to-hutchins "],
    Popularity: 0.02264802264802265,
    Category: "humor"
  },
  {
    Quote:
      "I'm not afraid of death; I just don't want to be there when it happens.",
    Author: "Woody Allen",
    Tags: ["death", "fear", "humor", "life "],
    Popularity: 0.022418022418022418,
    Category: "life"
  },
  {
    Quote:
      "I'm not afraid of death; I just don't want to be there when it happens.",
    Author: "Woody Allen",
    Tags: ["death", "fear", "humor", "life "],
    Popularity: 0.022418022418022418,
    Category: "humor"
  },
  {
    Quote:
      "I'm not afraid of death; I just don't want to be there when it happens.",
    Author: "Woody Allen",
    Tags: ["death", "fear", "humor", "life "],
    Popularity: 0.022418022418022418,
    Category: "death"
  },
  {
    Quote:
      "I am nothing special, of this I am sure. I am a common man with common thoughts and I've led a common life. There are no monuments dedicated to me and my name will soon be forgotten, but I've loved another with all my heart and soul, and to me, this has always been enough..",
    Author: "Nicholas Sparks,  The Notebook",
    Tags: ["love "],
    Popularity: 0.022304022304022304,
    Category: "love"
  },
  {
    Quote:
      "If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.",
    Author: "Albert Einstein",
    Tags: ["attributed-no-source", "children", "fairy-tales "],
    Popularity: 0.021959021959021958,
    Category: ""
  },
  {
    Quote:
      'Have you fallen in love with the wrong person yet?\'Jace said, "Unfortunately, Lady of the Haven, my one true love remains myself."..."At least,"she said, "you don\'t have to worry about rejection, Jace Wayland.""Not necessarily. I turn myself down occasionally, just to keep it interesting.',
    Author: "Cassandra Clare,  City of Bones",
    Tags: ["city-of-bones", "jace "],
    Popularity: 0.02183802183802184,
    Category: ""
  },
  {
    Quote:
      "If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.",
    Author: "Joan Powers,  Pooh's Little Instruction Book",
    Tags: ["friendship", "misattributed-a-a-milne "],
    Popularity: 0.02177002177002177,
    Category: ""
  },
  {
    Quote:
      "Logic will get you from A to Z; imagination will get you everywhere.",
    Author: "Albert Einstein",
    Tags: ["attributed-no-source", "imagination "],
    Popularity: 0.021745021745021745,
    Category: ""
  },
  {
    Quote: "One good thing about music, when it hits you, you feel no pain.",
    Author: "Bob Marley",
    Tags: ["music "],
    Popularity: 0.02171902171902172,
    Category: ""
  },
  {
    Quote:
      "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
    Author: "Dr. Seuss,  I Can Read With My Eyes Shut!",
    Tags: ["learning", "reading", "seuss "],
    Popularity: 0.021513021513021514,
    Category: ""
  },
  {
    Quote:
      "Not all of us can do great things. But we can do small things with great love.",
    Author: "Mother Teresa",
    Tags: ["misattributed-to-mother-teresa", "paraphrased "],
    Popularity: 0.021368021368021368,
    Category: ""
  },
  {
    Quote:
      "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.",
    Author: "J.K. Rowling",
    Tags: ["21322 likes "],
    Popularity: 0.021322021322021323,
    Category: ""
  },
  {
    Quote:
      "You don't get to choose if you get hurt in this world...but you do have some say in who hurts you. I like my choices.",
    Author: "John Green,  The Fault in Our Stars",
    Tags: ["satisfaction", "self-determination "],
    Popularity: 0.021176021176021177,
    Category: ""
  },
  {
    Quote:
      "You don’t have a soul, Doctor. You are a soul. You have a body, temporarily.",
    Author: "Walter M. Miller Jr.,  A Canticle for Leibowitz",
    Tags: ["body-soul", "misattributed-to-c-s-lewis "],
    Popularity: 0.02103002103002103,
    Category: ""
  },
  {
    Quote:
      "The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.",
    Author: "Bob Marley",
    Tags: ["friendship "],
    Popularity: 0.02101902101902102,
    Category: ""
  },
  {
    Quote:
      "Folks are usually about as happy as they make their minds up to be.",
    Author: "Abraham Lincoln",
    Tags: ["attributed-no-source", "happiness "],
    Popularity: 0.020998020998021,
    Category: "happiness"
  },
  {
    Quote:
      "Love looks not with the eyes, but with the mind,And therefore is winged Cupid painted blind.",
    Author: "William Shakespeare,  A Midsummer Night's Dream",
    Tags: ["love "],
    Popularity: 0.020813020813020812,
    Category: "love"
  },
  {
    Quote:
      "If you only read the books that everyone else is reading, you can only think what everyone else is thinking.",
    Author: "Haruki Murakami,  Norwegian Wood",
    Tags: ["books", "thought "],
    Popularity: 0.020794020794020793,
    Category: "books"
  },
  {
    Quote: "Love is like the wind, you can't see it but you can feel it.",
    Author: "Nicholas Sparks,  A Walk to Remember",
    Tags: ["love", "simile "],
    Popularity: 0.020613020613020613,
    Category: "love"
  },
  {
    Quote:
      "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?",
    Author: "J.K. Rowling,  Harry Potter and the Deathly Hallows",
    Tags: ["dumbledore "],
    Popularity: 0.020612020612020613,
    Category: ""
  },
  {
    Quote:
      "Sometimes people are beautiful.Not in looks.Not in what they say.Just in what they are.",
    Author: "Markus Zusak,  I Am the Messenger",
    Tags: ["beauty", "life "],
    Popularity: 0.020555020555020554,
    Category: "life"
  },
  {
    Quote:
      "You can never get a cup of tea large enough or a book long enough to suit me.",
    Author: "C.S. Lewis",
    Tags: ["books", "inspirational", "reading", "tea "],
    Popularity: 0.020489020489020487,
    Category: "inspiration"
  },
  {
    Quote:
      "You can never get a cup of tea large enough or a book long enough to suit me.",
    Author: "C.S. Lewis",
    Tags: ["books", "inspirational", "reading", "tea "],
    Popularity: 0.020489020489020487,
    Category: "books"
  },
  {
    Quote:
      "If one cannot enjoy reading a book over and over again, there is no use in reading it at all.",
    Author: "Oscar Wilde",
    Tags: ["books", "reading "],
    Popularity: 0.020436020436020438,
    Category: "books"
  },
  {
    Quote:
      "The difference between genius and stupidity is: genius has its limits.",
    Author: "Alexandre Dumas-fils",
    Tags: ["misattributed-to-einstein "],
    Popularity: 0.02043302043302043,
    Category: ""
  },
  {
    Quote:
      "I would venture to guess that Anon, who wrote so many poems without signing them, was often a woman.",
    Author: "Virginia Woolf",
    Tags: ["women "],
    Popularity: 0.020335020335020337,
    Category: ""
  },
  {
    Quote: "Do what you can, with what you have, where you are.",
    Author: "Theodore Roosevelt",
    Tags: ["inspirational "],
    Popularity: 0.020182020182020182,
    Category: "inspiration"
  },
  {
    Quote: "If you can make a woman laugh, you can make her do anything.",
    Author: "Marilyn Monroe",
    Tags: ["attributed-no-source", "girls", "love "],
    Popularity: 0.02004002004002004,
    Category: "love"
  },
  {
    Quote: "To the well-organized mind, death is but the next great adventure.",
    Author: "J.K. Rowling,  Harry Potter and the Sorcerer's Stone",
    Tags: ["death", "inspirational "],
    Popularity: 0.020004020004020004,
    Category: "inspiration"
  },
  {
    Quote: "To the well-organized mind, death is but the next great adventure.",
    Author: "J.K. Rowling,  Harry Potter and the Sorcerer's Stone",
    Tags: ["death", "inspirational "],
    Popularity: 0.020004020004020004,
    Category: "death"
  },
  {
    Quote:
      "Listen to the mustn'ts, child. Listen to the don'ts. Listen to the shouldn'ts, the impossibles, the won'ts. Listen to the never haves, then listen close to me... Anything can happen, child. Anything can be.",
    Author: "Shel Silverstein",
    Tags: [
      "anything-can-be",
      "hope",
      "impossible",
      "inspirational",
      "musn-t",
      "possibilities",
      "shouldn-t",
      "won-t "
    ],
    Popularity: 0.019753019753019754,
    Category: "inspiration"
  },
  {
    Quote:
      "Listen to the mustn'ts, child. Listen to the don'ts. Listen to the shouldn'ts, the impossibles, the won'ts. Listen to the never haves, then listen close to me... Anything can happen, child. Anything can be.",
    Author: "Shel Silverstein",
    Tags: [
      "anything-can-be",
      "hope",
      "impossible",
      "inspirational",
      "musn-t",
      "possibilities",
      "shouldn-t",
      "won-t "
    ],
    Popularity: 0.019753019753019754,
    Category: "hope"
  },
  {
    Quote:
      "We’re all a little weird. And life is a little weird. And when we find someone whose weirdness is compatible with ours, we join up with them and fall into mutually satisfying weirdness—and call it love—true love.",
    Author: "Robert Fulghum,  True Love",
    Tags: ["love", "weirdness "],
    Popularity: 0.01958001958001958,
    Category: "love"
  },
  {
    Quote:
      "I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.",
    Author: "Groucho Marx",
    Tags: ["books", "humor", "reading", "television "],
    Popularity: 0.019536019536019536,
    Category: "humor"
  },
  {
    Quote:
      "I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.",
    Author: "Groucho Marx",
    Tags: ["books", "humor", "reading", "television "],
    Popularity: 0.019536019536019536,
    Category: "books"
  },
  {
    Quote:
      "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
    Author: "Helen Keller",
    Tags: ["inspirational "],
    Popularity: 0.0195010195010195,
    Category: "inspiration"
  },
  {
    Quote:
      "Life isn't about finding yourself. Life is about creating yourself.",
    Author: "George Bernard Shaw",
    Tags: ["inspirational", "life", "yourself "],
    Popularity: 0.0194980194980195,
    Category: "life"
  },
  {
    Quote:
      "Life isn't about finding yourself. Life is about creating yourself.",
    Author: "George Bernard Shaw",
    Tags: ["inspirational", "life", "yourself "],
    Popularity: 0.0194980194980195,
    Category: "inspiration"
  },
  {
    Quote:
      "You don't love someone because they're perfect, you love them in spite of the fact that they're not.",
    Author: "Jodi Picoult,  My Sister's Keeper",
    Tags: ["imperfect", "love "],
    Popularity: 0.01936801936801937,
    Category: "love"
  },
  {
    Quote: "He's like a drug for you, Bella.",
    Author: "Stephenie Meyer,  Eclipse",
    Tags: ["drug", "romance", "simile "],
    Popularity: 0.019348019348019347,
    Category: "romance"
  },
  {
    Quote:
      "A wise girl kisses but doesn't love, listens but doesn't believe, and leaves before she is left.",
    Author: "Marilyn Monroe",
    Tags: ["attributed-no-source "],
    Popularity: 0.019075019075019076,
    Category: ""
  },
  {
    Quote:
      "The real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.",
    Author: "Marilyn Monroe",
    Tags: ["attributed-no-source", "love "],
    Popularity: 0.01899101899101899,
    Category: "love"
  },
  {
    Quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    Author: "Albert Einstein",
    Tags: ["life", "simile "],
    Popularity: 0.01883101883101883,
    Category: "life"
  },
  {
    Quote: "Some infinities are bigger than other infinities.",
    Author: "John Green,  The Fault in Our Stars",
    Tags: [
      "infinity",
      "john-green",
      "life",
      "tfios",
      "the-fault-in-our-stars "
    ],
    Popularity: 0.01882101882101882,
    Category: "life"
  },
  {
    Quote:
      "Love never dies a natural death. It dies because we don't know how to replenish its source. It dies of blindness and errors and betrayals. It dies of illness and wounds; it dies of weariness, of witherings, of tarnishings.",
    Author: "Anaïs Nin",
    Tags: ["death", "love "],
    Popularity: 0.01874901874901875,
    Category: "love"
  },
  {
    Quote:
      "Love never dies a natural death. It dies because we don't know how to replenish its source. It dies of blindness and errors and betrayals. It dies of illness and wounds; it dies of weariness, of witherings, of tarnishings.",
    Author: "Anaïs Nin",
    Tags: ["death", "love "],
    Popularity: 0.01874901874901875,
    Category: "death"
  },
  {
    Quote: "There is no friend as loyal as a book.",
    Author: "Ernest Hemingway",
    Tags: ["books", "friends", "novelist-quotes "],
    Popularity: 0.01872001872001872,
    Category: "books"
  },
  {
    Quote:
      "Who are you to judge the life I live?I know I'm not perfect-and I don't live to be-but before you start pointing fingers...make sure you hands are clean!",
    Author: "Bob Marley",
    Tags: ["judge", "life", "live", "perfection "],
    Popularity: 0.018584018584018584,
    Category: "life"
  },
  {
    Quote:
      "The story so far:In the beginning the Universe was created.This has made a lot of people very angry and been widely regarded as a bad move.",
    Author: "Douglas Adams,  The Restaurant at the End of the Universe",
    Tags: ["humor", "scifi "],
    Popularity: 0.01857101857101857,
    Category: "humor"
  },
  {
    Quote: "Time you enjoy wasting is not wasted time.",
    Author: "Marthe Troly-Curtin,  Phrynette Married",
    Tags: [
      "happiness",
      "misattributed-john-lennon",
      "procrastination",
      "time "
    ],
    Popularity: 0.01855001855001855,
    Category: "happiness"
  },
  {
    Quote:
      'Piglet sidled up to Pooh from behind. "Pooh!"he whispered."Yes, Piglet?""Nothing,"said Piglet, taking Pooh\'s paw. "I just wanted to be sure of you.',
    Author: "A.A. Milne,  The House at Pooh Corner",
    Tags: ["friendship", "piglet", "pooh", "reassurance "],
    Popularity: 0.018504018504018505,
    Category: ""
  },
  {
    Quote:
      "I am good, but not an angel. I do sin, but I am not the devil. I am just a small girl in a big world trying to find someone to love.",
    Author: "Marilyn Monroe",
    Tags: ["attributed-no-source "],
    Popularity: 0.01848901848901849,
    Category: "love"
  },
  {
    Quote:
      "There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves, it is not my nature.",
    Author: "Jane Austen,  Northanger Abbey",
    Tags: ["friendship", "love "],
    Popularity: 0.01832801832801833,
    Category: "love"
  },
  {
    Quote: "Do one thing every day that scares you.",
    Author: "Eleanor Roosevelt",
    Tags: ["attributed", "fear", "inspiration "],
    Popularity: 0.018268018268018268,
    Category: "inspiration"
  },
  {
    Quote:
      "The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.",
    Author: "Terry Pratchett,  Diggers",
    Tags: ["humor", "open-mind", "thinking "],
    Popularity: 0.018121018121018122,
    Category: "humor"
  },
  {
    Quote:
      "If I had a flower for every time I thought of you...I could walk through my garden forever.",
    Author: "Alfred Lord Tennyson",
    Tags: ["friendship", "love "],
    Popularity: 0.018109018109018108,
    Category: "love"
  },
  {
    Quote: "It matters not what someone is born, but what they grow to be.",
    Author: "J.K. Rowling,  Harry Potter and the Goblet of Fire",
    Tags: ["dumbledore "],
    Popularity: 0.018081018081018082,
    Category: ""
  },
  {
    Quote:
      "Some people never go crazy. What truly horrible lives they must lead.",
    Author: "Charles Bukowski",
    Tags: ["humor "],
    Popularity: 0.017926017926017924,
    Category: "humor"
  },
  {
    Quote: "Reality continues to ruin my life.",
    Author: "Bill Watterson,  The Complete Calvin and Hobbes",
    Tags: ["calvin-and-hobbes", "humor", "life "],
    Popularity: 0.01781901781901782,
    Category: "life"
  },
  {
    Quote: "Reality continues to ruin my life.",
    Author: "Bill Watterson,  The Complete Calvin and Hobbes",
    Tags: ["calvin-and-hobbes", "humor", "life "],
    Popularity: 0.01781901781901782,
    Category: "humor"
  },
  {
    Quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    Author: "Winston S. Churchill",
    Tags: ["bravery", "courage", "failure", "inspirational", "success "],
    Popularity: 0.017806017806017805,
    Category: "inspiration"
  },
  {
    Quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    Author: "Winston S. Churchill",
    Tags: ["bravery", "courage", "failure", "inspirational", "success "],
    Popularity: 0.017806017806017805,
    Category: "success"
  }
];

export function getAllQuotes() {
  let allQ = [];
  let completed = {};
  allQuotes.map(q => {
    if (q.Quote in completed === false) {
      completed[q.Quote] = q.Quote;
      allQ.push(q.Quote);
    }
  });

  return allQ;
}

export function getAllQuotesWithAuthor() {
  let QwithAuthor = [];
  let completed = {};
  allQuotes.map(q => {
    if (q.Quote in completed === false) {
      completed[q.Quote] = q.Author;
    }
  });
  QwithAuthor.push(completed);

  return QwithAuthor;
}

export function getTagsForQuote() {
  let QwithTag = [];
  let completed = {};
  allQuotes.map(q => {
    if (q.Quote in completed === false) {
      completed[q.Quote] = q.Tags;
    }
  });
  QwithTag.push(completed);

  return QwithTag;
}
