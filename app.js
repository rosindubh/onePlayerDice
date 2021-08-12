/*phil welsby - 11 aug 2021 - one player dice game*/

let playerScore = 0;

/*set variables*/
const playerHeader = document.getElementById('playerHeader');
const playerScoreboard = document.getElementById('scoreboard');
const dice = document.getElementById('dice');
const rollButton = document.getElementById('rollButton');

/*function generateRandomNumber(){

  const rand = Math.floor(Math.random() * (7 - 1) + 1);
  document.getElementById('display').innerText = rand;
  if (rand == 1) {
    img = document.querySelector('img');
    img.src = "./images/loser.jpg";
  }
  else if (rand ==2) {
    img = document.querySelector('img');
    img.src = "./images/2.png";
  }
  else if (rand ==3) {
    img = document.querySelector('img');
    img.src = "./images/3.png";
  }
  else if (rand ==4) {
    img = document.querySelector('img');
    img.src = "./images/4.png";
  }
  else if (rand ==5) {
    img = document.querySelector('img');
    img.src = "./images/5.png";
  }
  else if (rand ==6) {
    img = document.querySelector('img');
    img.src = "./images/6.png";
  }
  
}*/