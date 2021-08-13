/*phil welsby - 11 aug 2021 - one player dice game*/

/*Variable to keep players score*/
let playerScore = 0;

/*set variables*/
const playerHeader = document.getElementById('playerHeader');
const playerScoreboard = document.getElementById('scoreboard');
const player1 = document.getElementById('player1')
const dice = document.getElementById('dice');
const rollButton = document.getElementById('rollButton');
const resetButton = document.getElementById("resetButton");

/*LISTEN FOR click*/
rollButton.addEventListener('click', () =>{
  let diceRoll = Math.floor(Math.random() * 6) +1;
  //console.log('diceRoll =', diceRoll); /*used to test button*/

  /*YOU LOSE*/
  if (diceRoll === 1) {
    console.log('diceRoll', diceRoll);
    gameOver('You Lose!'); /*call function <gameOver> with variable <"You Lose">*/
  }

  else if (diceRoll == 2) {
    console.log('diceRoll', diceRoll);
  }
  else if (diceRoll == 3) {
    console.log('diceRoll', diceRoll)
  }
  else if (diceRoll == 4) {
    console.log('diceRoll', diceRoll)
  }
  else if (diceRoll == 5) {
    console.log('diceRoll', diceRoll);
  }
  else if (diceRoll == 6) {
    console.log('diceRoll', diceRoll);
  }
  /*increment players score*/
  playerScore += diceRoll;
  playerScoreboard.textContent = playerScore; /*display players score to screen as an H3 heading*/

// WINNER
if (playerScore >= 20) {
  gameOver("Your a WINNER!!!");
}





  // RESET BUTTON
  resetButton.addEventListener("click", () => {
    playerScore = 0;
    playerHeader.textContent = "";

    // 
    playerScoreboard.textContent = 0;
})



});

/*use <switch> to show images*/

/*GAME OVER FUNCTION*/
function gameOver(message) { /*this is a parameter*/
  playerHeader.textContent = message;
}

