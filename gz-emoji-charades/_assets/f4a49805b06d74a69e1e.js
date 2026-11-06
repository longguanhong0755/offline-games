// List of emoji and corresponding answers
const emojiList = [
  { emoji: "🍎🍏", answer: "apple" },
  { emoji: "🐱🐶", answer: "pets" },
  { emoji: "🌞🏖️", answer: "summer" },
  { emoji: "📚🎓", answer: "education" },
  { emoji: "🍕🍔", answer: "fast food" },
  { emoji: "🌈🦄", answer: "rainbow" },
  { emoji: "🎮🕹️", answer: "video games" },
  { emoji: "📷📸", answer: "photography" },
  { emoji: "🚗🛣️", answer: "road trip" },
  { emoji: "🌙🌟", answer: "starry night" },
  { emoji: "🎉🎊", answer: "celebration" },
  { emoji: "🌍🌱", answer: "environment" },
  { emoji: "☕📚", answer: "coffee and books" },
  { emoji: "🌼🐝", answer: "flowers and bees" },
  { emoji: "🍦🎂", answer: "ice cream cake" },
  { emoji: "🌺🌴", answer: "tropical paradise" },
  { emoji: "🎈🎁", answer: "birthday party" },
  { emoji: "🌞🌊", answer: "sunshine and beach" },
  { emoji: "🐼🎋", answer: "panda and bamboo" },
  { emoji: "🚀🌕", answer: "moon landing" },
  { emoji: "🎭🎟️", answer: "theater tickets" },
  { emoji: "📺🍿", answer: "movie night" },
  { emoji: "🌮🌯", answer: "taco and burrito" },
  { emoji: "🎵🎶", answer: "music festival" },
  { emoji: "🌈🍀", answer: "luck of the Irish" },
  { emoji: "📚📝", answer: "study notes" },
  { emoji: "🎮👾", answer: "video game characters" },
  { emoji: "🏰👑", answer: "royal castle" },
  { emoji: "🎤🎵", answer: "singing performance" },
  { emoji: "🍩☕", answer: "coffee and donuts" },
  { emoji: "🐠🐟", answer: "underwater world" },
  { emoji: "🌴🏖️", answer: "palm tree beach" },
  { emoji: "🎭🎬", answer: "theater play" },
  { emoji: "🍔🍟", answer: "burger and fries" },
  { emoji: "🌞🌻", answer: "sunflower" },
  { emoji: "🎣🐠", answer: "fishing" },
  { emoji: "📸🌇", answer: "cityscape photography" },
  { emoji: "🍩🍫", answer: "chocolate donut" },
  { emoji: "🚲🌳", answer: "bike ride in the park" },
  { emoji: "🎭🤡", answer: "circus performance" },
  { emoji: "🎉🎁", answer: "birthday celebration" },
  { emoji: "🏰👸", answer: "fairytale castle" },
  { emoji: "🌍✈️", answer: "world travel" },
  { emoji: "🍦🍨", answer: "ice cream delight" },
  { emoji: "🎮🕹️", answer: "gaming session" },
  { emoji: "🎭🎟️", answer: "theater show" },
  { emoji: "🌴🍹", answer: "tropical cocktail" },
];

let currentQuestion; // Stores the current question
let score = 0; // Stores the player's score

let winSound = new Audio("/_assets/a65e2e731b6a7ae69954.mp3");
let wrongSound = new Audio("/_assets/8a0c9e4d6f6223104476.mp3");

const guessInput = document.getElementById("guess-input");

// Select random emoji and set it as the current question
function selectRandomQuestion() {
  currentQuestion = emojiList[Math.floor(Math.random() * emojiList.length)];
  document.getElementById("emoji").textContent = currentQuestion.emoji;
}

guessInput.addEventListener("keypress", function (e) {
  // If the user presses the "Enter" key on the keyboard
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("submit-btn").click();
  }
});

// Get user input and compare with the answer
document.getElementById("submit-btn").addEventListener("click", function () {
  const resultDiv = document.getElementById("result");

  const userGuess = guessInput.value.toLowerCase();
  const answer = currentQuestion.answer.toLowerCase();

  if (userGuess === answer) {
    winSound.play();
    resultDiv.textContent = "Correct!";
    resultDiv.style.color = "green";
    score++;
    document.getElementById("score").textContent = score;
  } else {
    wrongSound.play();
    resultDiv.textContent = "Incorrect. Try again!";
    resultDiv.style.color = "red";
  }

  // Reset input field and select new random question
  guessInput.value = "";
  selectRandomQuestion();
});

// Call selectRandomQuestion() when the page loads
window.addEventListener("load", selectRandomQuestion);
