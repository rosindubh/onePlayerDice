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
const diceroll = document.getElementById('diceroll');

//block display of reset button
resetButton.style.display = "none";

/*LISTEN FOR click*/
rollButton.addEventListener('click', () =>{
  let diceRoll = Math.floor(Math.random() * 6) +1;
  //console.log('diceRoll =', diceRoll); /*used to test button*/
  diceroll.textContent = diceRoll;

  /*YOU LOSE*/
  if (diceRoll === 1) {
    console.log('diceRoll', diceRoll);
    dice.src="images/1.png"
    gameOver('You Lose!'); /*call function <gameOver> with variable <"You Lose">*/
  }

  else if (diceRoll == 2) {
    dice.src="images/2.png";
  }
  else if (diceRoll == 3) {
    dice.src="images/3.png";
  }
  else if (diceRoll == 4) {
    dice.src="images/4.png";
  }
  else if (diceRoll == 5) {
    dice.src="images/5.png";
  }
  else if (diceRoll == 6) {
    dice.src="images/6.png";
  }

  /*increment players score*/
  playerScore += diceRoll;
  playerScoreboard.textContent = playerScore; /*display players score to screen as an H3 heading*/

// WINNER
if (playerScore >= 20) {
  gameOver("Your a WINNER!!!");
}

});

  // RESET BUTTON
resetButton.addEventListener("click", () => {
  playerScore = 0;
  playerScoreboard.textContent = 0;
  rollButton.style.display = "block";
  resetButton.style.display = "none";
  playerHeader.textContent = "";


  diceroll.textContent = "";
})

/*GAME OVER FUNCTION*/
function gameOver(message) { /*this is a parameter*/
  playerHeader.textContent = message;
  resetButton.style.display = "block";
  rollButton.style.display = "none";

}


