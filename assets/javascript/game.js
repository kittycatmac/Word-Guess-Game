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
    this.$right.innerHTML = '_'.repeat(this.word.length);
  },
//compare the letter to the letters in the hidden computer pick   
  guess: function(letter) {
    if (this.left > 0 && this.complete != true) {
      if (this.word.indexOf(letter) > -1 || this.guessed.indexOf(letter) > -1) {
        this.right(letter);
      } else {
        this.wrong(letter);
      }
    }
  },
 //ERROR fix the replace of letter to  _ index to win game 
 //also need to add function when a word has more than one letter the letter stays out of the bone yard 
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
      window.game.reload(true);//not working either object reload but I might have to get rid of local var?
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

//music player
$(".my_audio").trigger('load');
function play_audio(task) {
    if(task == 'play'){
         $(".my_audio").trigger('play');
    }
    if(task == 'stop'){
         $(".my_audio").trigger('pause');
         $(".my_audio").prop("currentTime",0);
    }
}

//auto play again ?>not working
$(document).reload(function(document) {
    $('#playAgain').click(document);
    });

$(game).call(start);