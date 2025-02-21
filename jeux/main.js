const cells = document.querySelectorAll('[data-cell]');
const gameStatus = document.getElementById('gameStatus');
const endGameStatus = document.getElementById('endGameStatus');
const playerOne = 'X'; 
const playerTwo = 'O';
let playerTurn = playerOne;
let scoreX = 0;
let scoreO = 0;

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

cells.forEach(cell => {
  cell.addEventListener('click', playGame, { once: true });
});

document.getElementById('resetScoresButton').addEventListener('click', resetScores);

function playGame(e) {
  e.target.innerHTML = playerTurn;

  if (checkWin(playerTurn)) {
    updateGameStatus("wins" + playerTurn);
    updateScore(playerTurn); 
    return endGame();
  } else if (checkDraw()) {
    updateGameStatus("draw");
    return endGame();
  }

  updateGameStatus(playerTurn);
  playerTurn == playerOne ? playerTurn = playerTwo : playerTurn = playerOne;
}

function checkWin(playerTurn) {
  return winningPatterns.some(combination => {
    return combination.every(index => {
      return cells[index].innerHTML == playerTurn;
    });
  });
}

function checkDraw() {
  return [...cells].every(cell => {
    return cell.innerHTML == playerOne || cell.innerHTML == playerTwo;
  });
}

function updateGameStatus(status) {
  let statusText;

  switch (status) {
    case 'X':
      statusText = "À ton tour joueur 2 !(O)";
      break;
    case 'O':
      statusText = "Au tour du joueur 1 !(X)";
      break;
    case 'winsX':
      statusText = "Le joueur 1 (X) vous a écrasé!";
      break;
    case 'winsO':
      statusText = "Le joueur 2 (O) vous a battu!";
      break;
    case 'draw':
      statusText = "TERRIBLE Egalité! Personne n'a gagné :/";
      break;
  }

  gameStatus.innerHTML = statusText;
  endGameStatus.innerHTML = statusText;
}

function updateScore(winner) {
  if (winner === 'X') {
    scoreX++;
  } else if (winner === 'O') {
    scoreO++;
  }

  document.getElementById('scoreX').innerHTML = `Joueur 1 (X) : ${scoreX}`;
  document.getElementById('scoreO').innerHTML = `Joueur 2 (O) : ${scoreO}`;
}

function endGame() { 
  document.getElementById('gameEnd').style.display = "block"; 
}

function reloadGame() {
  // Réinitialiser les cellules
  cells.forEach(cell => cell.innerHTML = '');

  gameStatus.innerHTML = "Au tour du joueur 1 !(X)";

  document.getElementById('gameEnd').style.display = "none";

  playerTurn = playerOne;


  cells.forEach(cell => {
    cell.addEventListener('click', playGame, { once: true });
  });
}

// Fonctionreset
function resetScores() {
  scoreX = 0;
  scoreO = 0;
  
  // Mettre à jour l'affichage des scores
  document.getElementById('scoreX').innerHTML = `Joueur 1 (X) : ${scoreX}`;
  document.getElementById('scoreO').innerHTML = `Joueur 2 (O) : ${scoreO}`;
  
  // Réinitialiser l'état du jeu
  reloadGame();
}