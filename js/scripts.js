//Variable Declaration
var score = 0; //points for this turn
var numberOfDice = 1;
var dice = [0]; //last value rolled
var players = []; // array where scores are stored at
var maxPlayers = 0; //total player count
var playerNumber = 1; // who's turn it is
var lastPlayer = 0; // who's turn was last
var hasRolledOne = 0;
var j = 0;
var pigString = '<img src="img/pig.png" alt="pig">'; // display cute pigs
var pigString2 = '<img src="img/pig.png" alt="pig">'; // display cute pigs

//Buisiness Logic

function turn() {
  let j = 0;
  dice.forEach(function(element) {
    if (rollDice(element) > 1){
      
    }
    else {
      hasRolledOne += 1;
    }
    j++;
  });
    if (hasRolledOne === 2){

    } else if (hasRolledOne === 1) {
      score = 0;
      $("#currentPlayer").text("Current score: " + players[playerNumber-1] +  " Points this turn: 0");
      nextPlayer();
      return playerNumber;
    }else {
      score += dice[0] + dice[1];
    }
    return score;
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

function rollDice (roll) {
  roll = parseInt(Math.random()*6 + 1) ;
  dice[j] = roll;
  pigString = '<img src="img/pig.png" alt="pig">';
  for (i = 1; i < dice[0]; i++) {
    pigString += '<img src="img/pig.png" alt="pig">';
  }
  pigString2 = '<img src="img/pig.png" alt="pig">';
  for (i = 1; i < dice[1]; i++) {
    pigString2 += '<img src="img/pig.png" alt="pig">';
  }
  return roll;
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
  $("#dice").text("You rolled a " + dice[0]);
  $("#pigs").html(pigString);
}

$(document).ready(function() {
  $(".row").hide();
  $("form#startGame").submit(function(event) {
    event.preventDefault();
    maxPlayers = $("#numberOfPlayers").val();
    numberOfDice = $("#numberOfDice").val();
    players = [];
    for (i = 0; i < maxPlayers; i++) {
      players.push(0);
    }
    if (numberOfDice < 2) {
    $("#pigs2").hide();
    }
    else {
      dice = [0,0];
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
