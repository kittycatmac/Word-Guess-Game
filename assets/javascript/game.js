
    var word;
    var allowedGuesses;
    var guessWord;
    var wrongGuesses;

    var wordElement = document.getElementById('word');
    var letterCountElement = document.getElementById('letterCount');
    var lettersGuessedElement = document.getElementById('lettersGuessed');

    var words = ["sid", 
    "rex", 
    "andy", 
    "woody", 
    "buzz", 
    "aliens", 
    "slinky", 
    "little bo peep",
    "hamm",
    "sergeant",
    "shark", 
    "troll"];
    var letters = ["abcdefghijklmnopqrstuvwyxz"];
    

// computer random picking from "word" array
    var computerPick = words[Math.floor(Math.random()*words.length)];
    var guessWord = new Array(computerPick.length);

    function initializeGame() {
// computer random picking from "word" array
        var computerPick = words[Math.floor(Math.random()*words.length)];
        var guessWord = new Array(computerPick.length);
        allowedGuesses = 25;
        correctGuess = [];
        boneYard = [];
        
// empty variable computer guess with _ by for loop*/
    for (var i = 0; i < guessWord.length; i++) {
    guessWord.push('_');
    }

// my console for allowedGuesses and  guessWord
    wordElement.innerHTML = guessWord.join('_');
    letterCountElement.innerHTML = allowedGuesses;
}

//print hidden word by _ length
    document.getElementById("word").innerHTML = guessWord;
    
//update guesses
    function updateGuesses(letter) {

}
//compare the letter to the letters in the hidden computer pick    
//create event listener for one up key
    document.onkeyup = function (event) {
        var lettersGuessed =String.fromCharCode(event.keyCode).toLocaleLowerCase();
        updateGuesses(lettersGuessed);
        checkWin();
    };


var Game = function()