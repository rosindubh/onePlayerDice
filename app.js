/*phil welsby - 11 aug 2021 - one player dice game
  Function to generate random number*/

/*const number = document.getElementById('button');

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);

}

num = randomNumber(1, 7);
console.dir(num);*/

function generateRandomNumber(){

  const rand = Math.floor(Math.random() * (7 - 1) + 1);
 /* const rand = Math.random();*/
  document.getElementById('display').innerText = rand;
  
}
