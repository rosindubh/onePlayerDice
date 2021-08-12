/*phil welsby - 11 aug 2021 - one player dice game*/

let playerScore = 0;

/*set variables*/
const playerHeader = document.getElementById('playerHeader');
const playerScoreboard = document.getElementById('scoreboard');
const dice = document.getElementById('dice');
const rollButton = document.getElementById('rollButton');

rollButton.addEventListener('click', () =>{
  let diceRoll = Math.floor(Math.random() * 6) +1;
  console.log(diceRoll); /*used to test button*/
  if (diceRoll === 1) {
    gameOver('You Lose!')
  }

  playerScore += diceRoll;
  playerScoreboard.textContent = playerScore;
});

function gameOver(message) {
  playerHeader.textContent = message;
}

