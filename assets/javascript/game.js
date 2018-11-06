// Array of the pokemon
const starterPokemon = ['squirtle', 'bulbasaur', 'charmander'];

// Set default values for the variables
var guessedLetters = [];
var win = 0;
var guess = 10;

// References to the places in the HTML
var lettersBlanksLink = document.getElementById("letterBlanks");
var pressAnyKeyLink = document.getElementById("pressAnyKey");
var numWinLink = document.getElementById("numWin");
var remainingGuessLink = document.getElementById("remainingGuess");
var guessedLettersLink = document.getElementById("guessedLetters");

// Function to run when the user presses a letter
document.onkeyup = function(event) {

}