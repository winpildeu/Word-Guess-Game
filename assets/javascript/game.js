// Array of the pokemon
const starterPokemon = ['squirtle', 'bulbasaur', 'charmander'];

// Set default values for the variables
var guessedLetters = [];
var wordArray;
var computerGuess;
var win = 0;
var guess = 10;

// References to the places in the HTML
var lettersBlanksLink = document.getElementById("letterBlanks");
var pressAnyKeyLink = document.getElementById("pressAnyKey");
var numWinLink = document.getElementById("numWin");
var remainingGuessLink = document.getElementById("remainingGuess");
var guessedLettersLink = document.getElementById("guessedLetters");

// Initialize
computerGuess = chooseYou(starterPokemon);
wordArray = blankShow(computerGuess.length);
lettersBlanksLink.textContent = wordArray.join(" ");
numWinLink.textContent = win;
remainingGuessLink.textContent = guess;
guessedLettersLink.textContent = guessedLetters;


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
document.onkeyup = function(event) {

    // Determine what key was pressed
    let keyPress = event.key;
    console.log(keyPress);

    // Decrement from the guesses and put the keyPress into the guessedLetters array
    guess--;
    guessedLetters.push(keyPress);

    // Hide the instructions
    pressAnyKeyLink.textContent = "---";
}