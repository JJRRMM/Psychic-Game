
// var letters = ["a","b","g","h","r","t","v","e","s","t"];
var letters = ["a","b"];
var wins = 0;
var losses = 0;
var left =9;
var GuessList = " " ;

document.onkeyup = function(event) {
    var Guess = event.key;
    var computerPicks = letters[Math.floor(Math.random() * letters.length)];
    if (Guess != computerPicks) {    
        left = left - 1; 
        GuessList = GuessList +  Guess +",";
    }
    if (left === 0){
        GuessList = "";
        losses = losses + 1;
        left=9;
    }

    if (Guess === computerPicks) {
        wins = wins + 1;
        GuessList = "";
        left = 9 ;
    }


var html = "<p>Guess what letter I am thinking of</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>Guesses Left: " + left + "</p>" +
          "<p> Your Guesses So Far: " + GuessList;          
          document.querySelector("#game").innerHTML = html;
         
       
}
