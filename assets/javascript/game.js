/*first call out the variables/game object */
/*var playerWins = "win";
var hiddenWord = "word";
var totalGuesses = "guesses";
var boneYard = "yard";
*/
var game = {
    playerWins = "win",
    hiddenWord = "word",
    totalGuesses = "guesses",
    boneYard = "yard",
    words = ['sid', 
    'rex', 
    'andy', 
    'woody', 
    'buzz', 
    'aliens', 
    'slinky', 
    'little bo peep',
    'hamm',
    'sergeant',
    'shark', 
    'troll'],
    letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"]

}

/*var wins = 12;
var words = ['sid', 'rex', 'andy', 'woody', 'buzz', 'aliens', 'slinky', 'little bo peep', 'hamm','sergeant','shark', 'troll']
var word = chooseWord(words);
var guesses =new set([]);
var game_obj = game.Game(win, word, guesses);
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
$(document).keypress(function(i) {
    handleInput(i);
});
var handleInput =function(i) {
    if (!isLetter(e.key) || (game_obj.guesses.has(e.key))) {
        return;
    }
    game_obj = game_obj.addGuess(e.key);
    scr = screen.Screen(game_obj);
    drawScreen(scr);
}*/

var Game = function()