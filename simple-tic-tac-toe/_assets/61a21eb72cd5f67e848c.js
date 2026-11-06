const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector('#status');
const overlay = document.querySelector('#overlay');
const resultText = document.querySelector('#result-text');
const newGameButton = document.querySelector('#new-game');
const singlePlayerButton = document.querySelector('#single-player');
const twoPlayerButton = document.querySelector('#two-player');

let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let isSinglePlayer = false; // Track if the game is in single-player mode

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Minimax algorithm for AI
function minimax(boardState, depth, isMaximizing) {
    const scores = {
        X: -10,
        O: 10,
        draw: 0
    };

    // Check if the game is over
    const result = checkGameResult(boardState);
    if (result !== null) {
        return scores[result];
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < boardState.length; i++) {
            if (boardState[i] === '') {
                boardState[i] = 'O';
                let score = minimax(boardState, depth + 1, false);
                boardState[i] = '';
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < boardState.length; i++) {
            if (boardState[i] === '') {
                boardState[i] = 'X';
                let score = minimax(boardState, depth + 1, true);
                boardState[i] = '';
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
}

// AI makes a move
function aiMove() {
    let bestScore = -Infinity;
    let bestMove;

    for (let i = 0; i < gameState.length; i++) {
        if (gameState[i] === '') {
            gameState[i] = 'O';
            let score = minimax(gameState, 0, false);
            gameState[i] = '';
            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }

    gameState[bestMove] = 'O';
    cells[bestMove].textContent = 'O';
    cells[bestMove].classList.add('O');
    checkForWinner();
}

// Check if the game is over
function checkGameResult(boardState) {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return boardState[a]; // Return the winning player
        }
    }
    if (!boardState.includes('')) return 'draw'; // Draw
    return null; // Game is not over
}

function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (gameState[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    clickedCell.classList.add(currentPlayer);

    checkForWinner();

    // If single-player mode and game is still active, let AI make a move
    if (isSinglePlayer && gameActive && currentPlayer === 'X') {
        currentPlayer = 'O'; // Switch to AI's turn
        setTimeout(() => {
            aiMove();
            currentPlayer = 'X'; // Switch back to human's turn after AI's move
            updateStatusText(); // Update the status text
        }, 300); // Adjusted delay to 300ms
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch turns in two-player mode
    }
    updateStatusText();
}

function checkForWinner() {
    const result = checkGameResult(gameState);
    if (result === 'X' || result === 'O') {
        showResult(`Player ${result} wins!`);
        gameActive = false;
    } else if (result === 'draw') {
        showResult('Draw!');
        gameActive = false;
    }
}

function updateStatusText() {
    if (currentPlayer === 'X') {
        statusText.innerHTML = `It's <span class="player-x">X</span>'s turn`;
    } else {
        statusText.innerHTML = `It's <span class="player-o">O</span>'s turn`;
    }
}

function showResult(message) {
    resultText.textContent = message;
    overlay.style.display = 'flex';
}

function resetGame() {
    gameState = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    updateStatusText();
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('X', 'O');
    });
    overlay.style.display = 'none';
}

// Highlight the selected mode
function highlightSelectedMode(selectedButton) {
    singlePlayerButton.classList.remove('active');
    twoPlayerButton.classList.remove('active');
    selectedButton.classList.add('active');
}

// Event listeners
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
newGameButton.addEventListener('click', resetGame);

// Mode selection
singlePlayerButton.addEventListener('click', () => {
    isSinglePlayer = true;
    highlightSelectedMode(singlePlayerButton);
    resetGame();
});

twoPlayerButton.addEventListener('click', () => {
    isSinglePlayer = false;
    highlightSelectedMode(twoPlayerButton);
    resetGame();
});

// Initialize the status text and highlight the default mode
updateStatusText();
highlightSelectedMode(singlePlayerButton); // Default to Single Player mode
