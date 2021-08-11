/*phil welsby - 11 aug 2021 - one player dice game*/

// Function to generate random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

/*run function and display*/
let num = randomNumber(1, 7);
/*document.write( randomNumber(1, 7) );*/
