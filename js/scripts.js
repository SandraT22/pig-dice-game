//Variable Declaration
var score = 0; //points for this turn
var dice = 0; //last value rolled
var players = []; // array where scores are stored at
var maxPlayers = 0; //total player count
var playerNumber = 1; // who's turn it is
var lastPlayer = 0; // who's turn was last
var pigString = '<img src="img/pig.png" alt="pig">'; // display cute pigs

//Buisiness Logic

function turn() {
  if (rollDice() > 1){
    console.log(dice);
    score += dice;
    return score;
  }
  else {
    score = 0;
    $("#currentPlayer").text("Current score: " + players[playerNumber-1] +  " Points this turn: 0");
    nextPlayer();
    return playerNumber;
  }
}

function passTurn(){
  players[playerNumber-1] += score;
  score = 0;
  nextPlayer();
  return players[lastPlayer-1];
}

function nextPlayer(){
  lastPlayer = playerNumber;

  if(playerNumber < maxPlayers) {
    playerNumber += 1;
  }
  else{
    playerNumber = 1;
  }
  return playerNumber;
}

function rollDice () {
  dice = parseInt(Math.random()*6 + 1) ;
  pigString = '<img src="img/pig.png" alt="pig">';
  for (i = 1; i < dice; i++) {
    pigString += '<img src="img/pig.png" alt="pig">';
  }
  return dice;
}

//UI Logic

function scoreboard() {
  let scoreString = " ";
  for (i = 1; i <= maxPlayers; i++) {
    scoreString += "Player " + i + " : " + players[i-1] + "  \n";
  }
  $("#score").text(scoreString);
  $("#nextTurn").text("Player " + playerNumber + "'s turn");
  $("#currentPlayer").text("Current score: " + players[playerNumber-1] +  " Points this turn: " + score);
  $("#dice").text("You rolled a " + dice);
  $("#pigs").html(pigString);
}

$(document).ready(function() {
  $(".row").hide();
  $("form#startGame").submit(function(event) {
    event.preventDefault();
    maxPlayers = $("#numberOfPlayers").val();
    players = [];
    for (i = 0; i < maxPlayers; i++) {
      players.push(0);
    }
    $(".row").show();
    $("#winner").hide();
    $("#rollDice").show();
    $("#passTurn").show();
    $("#startGame").hide();
    scoreboard();
  });
  $("form#passTurn").submit(function(event) {
    event.preventDefault();
    passTurn();
    scoreboard();
    if (players[lastPlayer-1] >= 100) {
      $("#winner").show();
      $("#winner").text("Player " + playerNumber + " wins!");
      $("#currentPlayer").hide();
      $("#dice").hide();
      $("#rollDice").hide();
      $("#passTurn").hide();
      $("#startGame").show();
    }
  });
  $("form#rollDice").submit(function(event) {
    event.preventDefault();
    turn();
    scoreboard();
  });
});
