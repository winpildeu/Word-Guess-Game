// ========== STARTING VARIABLES ==========

const starterPokemon = ['squirtle', 'bulbasaur', 'charmander'];
var word = {
    guessedLetters: [],
    wordArray: [],
    computerGuess: [],
    guess: 10,
    win: 0
}

// References to the places in the HTML
var lettersBlanksLink = document.getElementById("letterBlanks");
var pressAnyKeyLink = document.getElementById("pressAnyKey");
var numWinLink = document.getElementById("numWin");
var remainingGuessLink = document.getElementById("remainingGuess");
var guessedLettersLink = document.getElementById("guessedLetters");

// ========== FUNCTIONS ==========

// Reset function
function reset(obj) {
    obj.guess = 10;
    obj.computerGuess = chooseYou(starterPokemon).split('');
    obj.wordArray = blankShow(obj.computerGuess.length);
    lettersBlanksLink.textContent = obj.wordArray.join(" ");
    numWinLink.textContent = obj.win;
    remainingGuessLink.textContent = obj.guess;
    guessedLettersLink.textContent = obj.guessedLetters;
}

// Function to randomly choose a Pokemon and reset the guesses
function chooseYou(list) {
    return list[Math.floor(Math.random() * list.length)];
}

// Makes an array that shows blanks instead of letters
function blankShow(num) {
    let array = [];
    for (let index = 0; index < num; index++) {
        array.push("_");
    }
    return array;
}

// Function to check for letters matching
function checkConditions(letter, obj) {
    let array = [];
    for (let index = 0; index < obj.computerGuess.length; index++) {
        if (letter === obj.computerGuess[index]) {
            array.push(letter);
        } else if (letter != obj.computerGuess[index] && obj.wordArray[index] === '_') {
            array.push('_');
        } else {
            array.push(obj.computerGuess[index]);
        }
    }
    obj.wordArray = [...array];
}

// Function to check for win/lose and reset
function checkWinLose(obj) {
    // console.log(`Comp: ${obj.computerGuess}`);
    // console.log(`User: ${obj.wordArray}`);
    if (obj.wordArray.join() === obj.computerGuess.join()) {
        obj.win++;
        alert("You WIN!");
        reset(obj);
    }
    else if(obj.guess === 0) {
        alert("You lose... try again!");
        reset(obj);
    }
}

// ========== CODE ==========

// Show the initial values on the HTML page
reset(word);
console.log(word.computerGuess);

// Runs when the user presses a letter
document.onkeyup = function (event) {

    // Hide the instructions
    pressAnyKeyLink.textContent = "---";

    // Decrement from the guesses
    word.guess--;

    // Determine what key was pressed
    let keyPress = event.key;
    // Check for matching letters
    checkConditions(keyPress, word);

    // Update the letters that were guessed and remaining guesses
    word.guessedLetters.push(keyPress);
    console.log(word.wordArray);
    lettersBlanksLink.textContent = word.wordArray.join(" ");
    guessedLettersLink.textContent = word.guessedLetters;
    remainingGuessLink.textContent = word.guess;

    // Check for win/ lose
    checkWinLose(word);
}