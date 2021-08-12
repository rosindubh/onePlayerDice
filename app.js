/*phil welsby - 11 aug 2021 - one player dice game*/

/*Variable to keep players score*/
let playerScore = 0;

/*set variables*/
const playerHeader = document.getElementById('playerHeader');
const playerScoreboard = document.getElementById('scoreboard');
const dice = document.getElementById('dice');
const rollButton = document.getElementById('rollButton');

/*LISTEN FOR*/
rollButton.addEventListener('click', () =>{
  let diceRoll = Math.floor(Math.random() * 6) +1;
  console.log(diceRoll); /*used to test button*/
  /*YOU LOSE*/
  if (diceRoll === 1) {
    gameOver('You Lose!') /*call function <gameOver> with variable <"You Lose">*/
  }

  /*increment players score*/
  playerScore += diceRoll;
  playerScoreboard.textContent = playerScore; /*display players score to screen as an H3 heading*/
});

/*GAME OVER FUNCTION*/
function gameOver(message) { /*this is a parameter*/
  playerHeader.textContent = message;
}

