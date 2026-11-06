const notes = document.querySelectorAll('.note');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-button');
let score = 0;
let gameStarted = false;
let sequence = [];
let userSequence = [];
let currentNoteIndex = 0;
let speed = 1000; // Initial speed in milliseconds

const noteSounds = {
    "C": new Audio("/_assets/3e9d9a590a57992f85f5.wav"),
    "D": new Audio("/_assets/33d7181de596b9a17546.wav"),
    "E": new Audio("/_assets/a5c6c372bba2ebf9fec9.wav"),
    "F": new Audio("/_assets/0c7088dfac61d128f9cd.wav"),
    "G": new Audio("/_assets/bee3bb434f3ed4971f51.wav"),
    "A": new Audio("/_assets/6203ad0a7382ad00ed32.wav"),
    "B": new Audio("/_assets/7acb6d9895f10923dfc6.wav")
};

// Function to stop all currently playing sounds
function stopAllSounds() {
    for (const sound in noteSounds) {
        noteSounds[sound].pause();
        noteSounds[sound].currentTime = 0; // Reset to the beginning
    }
}

startButton.addEventListener('click', () => {
    gameStarted = true;
    score = 0;
    scoreDisplay.textContent = score;
    sequence = [];
    userSequence = [];
    currentNoteIndex = 0;
    speed = 1000; // Reset speed
    startGame();
});

function startGame() {
    generateSequence();
    playSequence();
}

function generateSequence() {
    let sequenceLength = Math.floor(Math.random() * 5) + 1;
    for (let i = 0; i < sequenceLength; i++) {
        let randomNote = notes[Math.floor(Math.random() * notes.length)].dataset.note;
        sequence.push(randomNote);
    }
}

function playSequence() {
    currentNoteIndex = 0;
    let intervalId = setInterval(() => {
        let note = sequence[currentNoteIndex];
        let noteElement = document.querySelector(`.note[data-note="${note}"]`);
        noteElement.classList.add('selected');
        stopAllSounds(); // Stop any other sounds before playing this note
        noteSounds[note].play();

        // Move the setTimeout inside the interval callback for better timing
        setTimeout(() => {
            noteElement.classList.remove('selected');
            currentNoteIndex++;
            if (currentNoteIndex >= sequence.length) {
                clearInterval(intervalId);
                userSequence = [];
                currentNoteIndex = 0;
            }
        }, 500); // Use speed for the interval
    }, speed);

    // Decrease speed after each successful round
    speed = Math.max(speed - 100, 200); // Adjust the decrease amount and minimum speed
}

notes.forEach(note => {
    note.addEventListener('click', () => {
        if (gameStarted) {
            let clickedNote = note.dataset.note;
            stopAllSounds(); // Stop any other sounds before playing this note
            if (clickedNote === sequence[currentNoteIndex]) {
                noteSounds[clickedNote].play();
                note.classList.add('selected');

                // Move the setTimeout inside the click handler for better timing
                setTimeout(() => {
                    note.classList.remove('selected');
                    userSequence.push(clickedNote);
                    currentNoteIndex++;
                    if (userSequence.length === sequence.length) {
                        score++;
                        scoreDisplay.textContent = score;
                        startGame();
                    }
                }, 500);
            } else {
                let errorSound = new Audio("sounds/error.wav");
                errorSound.play();
                note.classList.add('wrong');
                setTimeout(() => {
                    note.classList.remove('wrong');
                    startGame();
                }, 500);
            }
        }
    });
});