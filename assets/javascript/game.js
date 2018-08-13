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
var game = {
  guessed: [],
  left: 15,
// computer random picking from "word" array and empty variable computer guess with _ by for loop 
  start: function() {
    this.complete = false;
    this.word = words[Math.floor(Math.random() * words.length)];
    this.$right = document.getElementById('right');
    this.$wrong = document.getElementById('yard');
    this.$remain = document.getElementById('remain');
    this.$right.innerHTML = ' _ '.repeat(this.word.length);
  },
//compare the letter to the letters in the hidden computer pick   
  guess: function(letter) {
    if (this.left > 0 && this.complete != true) {
      if (this.word.indexOf(letter) > 0 || this.guessed.indexOf(letter) > 0) {
        this.right(letter);
      } else {
        this.wrong(letter);
      }
    }
  },
 //ERROR fix the replace of letter to  _ index to win game  
  right: function(letter) {
    for(var i = 0; i < this.word.length; i++) {
      if (this.word[i] == letter) {
        var word = this.$right.innerHTML.split('');
        word[i] = letter;
        this.$right.innerHTML = word.join('');
      }
    }
    if (this.$right.innerHTML.indexOf('_') < 0) {
      alert('you win!');
      this.complete = true;
    }
  },
  
  wrong: function(letter) {
    this.guessed.push(letter);
    this.$wrong.innerHTML += ' ' + letter;
    this.left--;
    this.$remain.innerHTML = this.left;
    if (this.left < 1) {
      alert('you lose! '+ this.word);
      this.complete = true;
    }
  }
};
//create event listener for one up key
game.start();
document.onkeyup = function(event) {
  var letter = String.fromCharCode(event.keyCode).toLowerCase();
  game.guess(letter);
};    
//auto play again 
//$(document).ready(function(document) {
   // $('#playAgain').click(document);
    //});