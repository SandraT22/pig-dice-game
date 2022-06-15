//Variable Declaration
var score = 0;
var dice = 0;
var players = [];
var maxPlayers = 0;
var playerNumber = 1;
var lastPlayer = 0;

//Buisiness Logic

function turn() {
  if (rollDice()>1){
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
  console.log(players[playerNumber-1]);
  score = 0;
  nextPlayer();
  return players[lastPlayer-1];
}

function nextPlayer(){
  lastPlayer = playerNumber;

  if(playerNumber < maxPlayers) {
    playerNumber += 1;
    console.log("add")
  }
  else{
    playerNumber = 1;
    console.log("broken")
  }
  return playerNumber;
}

function rollDice () {
  dice = parseInt(Math.random()*6 + 1) ;
  return dice;
}

//UI Logic

function scoreboard() {
  let scoreString = " ";
  for (i = 1; i <= maxPlayers; i++) {
    scoreString += "Player " + i + " : " + players[i-1] + "\n";
  }
  $("#score").text(scoreString);
  $("#nextTurn").text("Player " + playerNumber + "'s turn");
  $("#currentPlayer").text("Current score: " + players[playerNumber-1] +  " Points this turn: " + score);
  $("#dice").text("You rolled a " + dice);
}

$(document).ready(function() {
  $("form#startGame").submit(function(event) {
    event.preventDefault();
    maxPlayers = $("#numberOfPlayers").val();
    players = [];
    for (i = 0; i < maxPlayers; i++) {
      players.push(0);
    }
    console.log(players);
  });
  $("form#passTurn").submit(function(event) {
    event.preventDefault();
    if (players[playerNumber-1] >= 100) {
      $("#output").text("Player " + playerNumber + "wins");
    }
    else {
      passTurn();
      scoreboard();
    }
  });
  $("form#rollDice").submit(function(event) {
    event.preventDefault();
    turn();
    scoreboard();
  });
});
