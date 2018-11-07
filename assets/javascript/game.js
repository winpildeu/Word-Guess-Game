// Array of the pokemon
const starterPokemon = ['squirtle', 'bulbasaur', 'charmander'];

// Set default values for the variables
var word = {
    "guessedLetters": [],
    "wordArray": [],
    "guess": 10,
    "win": 0
}
var computerGuess;
// var guessedLetters = [];
// var wordArray;
// var win = 0;
// var guess = 10;

// References to the places in the HTML
var lettersBlanksLink = document.getElementById("letterBlanks");
var pressAnyKeyLink = document.getElementById("pressAnyKey");
var numWinLink = document.getElementById("numWin");
var remainingGuessLink = document.getElementById("remainingGuess");
var guessedLettersLink = document.getElementById("guessedLetters");

// Initialize
computerGuess = chooseYou(starterPokemon);
word.wordArray = blankShow(computerGuess.length);
lettersBlanksLink.textContent = word.wordArray.join(" ");
numWinLink.textContent = word.win;
remainingGuessLink.textContent = word.guess;
guessedLettersLink.textContent = word.guessedLetters;

// Function to randomly choose a Pokemon and reset the guesses
function chooseYou(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function blankShow(num) {
    let array = [];
    for (let index = 0; index < num; index++) {
        array.push("_");
    }
    return array;
}

// Function to run when the user presses a letter
document.onkeyup = function (event) {

    // Hide the instructions
    pressAnyKeyLink.textContent = "---";

    // Decrement from the guesses
    word.guess--;

    // Determine what key was pressed
    let keyPress = event.key;
    // Check for win/ lose
    // checkConditions (keyPress, word);

    // Update the letters that were guessed and remaining guesses
    word.guessedLetters.push(keyPress);
    guessedLettersLink.textContent = word.guessedLetters;
    remainingGuessLink.textContent = word.guess;

    console.log("Key: " + keyPress);
    console.log("Remain: " + word.guess);
    console.log("Guessed letters: " + word.guessedLetters);

}