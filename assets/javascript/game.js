// Array of the pokemon
const starterPokemon = ['squirtle', 'bulbasaur', 'charmander'];

// Set default values for the variables
var guessedLetters = [];
var computerGuess;
var win = 0;
var guess = 10;

// References to the places in the HTML
var lettersBlanksLink = document.getElementById("letterBlanks");
var pressAnyKeyLink = document.getElementById("pressAnyKey");
var numWinLink = document.getElementById("numWin");
var remainingGuessLink = document.getElementById("remainingGuess");
var guessedLettersLink = document.getElementById("guessedLetters");

// Function to randomly choose a Pokemon
function chooseYou() {
    computerGuess = starterPokemon[Math.floor(Math.random() * starterPokemon.length)];
    console.log(computerGuess);
}

// Function to run when the user presses a letter
document.onkeyup = function(event) {

    // Determine what key was pressed
    let keyPress = event.key;
    // console.log(keyPress);

    // Decrement from the guesses and put the keyPress into the guessedLetters array
    guess--;
    guessedLetters.push(keyPress);
    console.log(guessedLetters);
    

    // Hide the instructions
    pressAnyKeyLink.textContent = "---";
}