
var letters = ["a","b","g","h","r","t","v","e","s","t"];
var wins = 0;
var losses = 0;
var left =5;
var GuessList = " " ;

document.onkeyup = function(event) {
    var Guess = event.key;
    var computerPicks = letters[Math.floor(Math.random() * letters.length)];
    GuessList = Guess + ","+ GuessList;
var html = "<p>Guess what letter I am thinking of</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>Guesses Left: " + left + "</p>" +
          "<p> Your Guesses So Far: " + GuessList;          
          document.querySelector("#game").innerHTML = html;

if (Guess === computerPicks) {
    wins = wins + 1; 
    losses = 0;
    left = 5;
    Guesslist = "";
}
if (left === 0){
    GuessList = "";
    losses = losses + 1;
    left=5;
}
if (Guess != computerPicks) {    
    left = left - 1;  
}
}