
// Screens
const loading = document.getElementById("loading");
const startScreen = document.getElementById("startScreen");
const selectScreen = document.getElementById("selectScreen");
const gameScreen = document.getElementById("gameScreen");
const endScreen = document.getElementById("endScreen");

// Game Area
const gameArea = document.getElementById("gameArea");

// Sounds
const bgMusic = document.getElementById("bgMusic");
const hitSound = document.getElementById("hitSound");
const overSound = document.getElementById("overSound");

// Data
let score = 0;
let life = 3;
let level = 1;
let time = 60;
let player = "";

let insectInterval;
let timerInterval;

let selectedInsect = "";

// Themes
const themes = ["default","jungle","neon","fire"];
let currentTheme = 0;


// Loading Screen
window.onload = ()=>{

setTimeout(()=>{

loading.style.display="none";
startScreen.classList.add("active");

},1500);

};


// Start Button
function startGame(){

player = document.getElementById("playerName").value;

if(player===""){
alert("Enter Your Name!");
return;
}

startScreen.classList.remove("active");
selectScreen.classList.add("active");

}


// Select Insect
function selectInsect(img){

document.querySelectorAll(".selectBox img")
.forEach(i=>i.classList.remove("active"));

img.classList.add("active");

selectedInsect = img.src;

}


// Start Real Game
function startRealGame(){

if(selectedInsect===""){
alert("Please Select Insect!");
return;
}

selectScreen.classList.remove("active");
gameScreen.classList.add("active");

bgMusic.volume = 0.5;
bgMusic.play();

resetGame();
startTimer();
startInsects();

}


// Reset Game
function resetGame(){

score = 0;
life = 3;
level = 1;
time = 60;

updateUI();
gameArea.innerHTML = "";

}


// Update UI
function updateUI(){

document.getElementById("score").innerText = score;
document.getElementById("life").innerText = life;
document.getElementById("level").innerText = level;
document.getElementById("time").innerText = time;

}


// Timer System
function startTimer(){

clearInterval(timerInterval);

timerInterval = setInterval(()=>{

time--;

updateUI();

if(time <= 0 || life <= 0){
endGame();
}

},1000);

}


// Insect Generator
function startInsects(){

clearInterval(insectInterval);

insectInterval = setInterval(()=>{

createInsect();

},1500 - (level * 100));

}


// Create Insect
function createInsect(){

const img = document.createElement("img");

img.src = selectedInsect;

img.classList.add("insect");

// Random Position
const maxX = window.innerWidth - 80;
const maxY = window.innerHeight - 220;

const x = Math.random() * maxX;
const y = Math.random() * maxY;

img.style.left = x + "px";
img.style.top = y + "px";


// Click Effect
img.onclick = ()=>{

hitSound.currentTime = 0;
hitSound.play();

// Glow Effect
img.style.filter = "drop-shadow(0 0 30px lime)";
img.style.transform = "scale(1.5)";

// Score
score++;

if(score % 10 === 0){
level++;
startInsects(); // speed increase
}

updateUI();

setTimeout(()=>{
img.remove();
},150);

};


gameArea.appendChild(img);


// Missed Insect
setTimeout(()=>{

if(img.parentNode){

img.remove();
life--;

updateUI();

}

},2000);

}


// Game Over
function endGame(){

clearInterval(insectInterval);
clearInterval(timerInterval);

bgMusic.pause();
overSound.play();

gameScreen.classList.remove("active");
endScreen.classList.add("active");

let emoji = "😢";

if(score >= 25){
emoji = "🔥😎 LEGEND!";
}
else if(score >= 15){
emoji = "😄 GREAT!";
}
else if(score >= 8){
emoji = "🙂 GOOD!";
}
else{
emoji = "😢 TRY AGAIN!";
}

document.getElementById("finalScore").innerText =
player + " Score: " + score + " " + emoji;


// High Score Save
let high = localStorage.getItem("highScore") || 0;

if(score > high){
localStorage.setItem("highScore", score);
high = score;
}

document.getElementById("highScore").innerText =
"High Score: " + high;

}


// Restart
function restartGame(){

endScreen.classList.remove("active");
startScreen.classList.add("active");

gameArea.innerHTML = "";

}


// Theme Switch
function changeTheme(){

document.body.classList.remove(themes[currentTheme]);

currentTheme++;

if(currentTheme >= themes.length){
currentTheme = 0;
}

document.body.classList.add(themes[currentTheme]);

}
