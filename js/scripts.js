//Variable Declaration
var score = 0;
var dice = 0;
var players = [0,0,0,0]
var playerNumber = 1;
var lastPlayer = 0
var maxPlayers = 4;

//Buisiness Logic

function turn() {
  if (rollDice()>1){
    console.log(dice);
    score += dice;
    return score;
  }
  else {
    score = 0;
    console.log("next players turn");
    nextPlayer();
    return false;
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
  }
  else{
    playerNumber = 1;
  }
  return playerNumber;
}

function rollDice () {
  dice = parseInt(Math.random()*6);
  return dice;
}

//Player Logic

switch (playerNumber) {
  case (1):
    console.log("2");
    break;
  case (2):
    console.log("Green!");
    break;
  case (3):
    console.log("Blue!");
    break;
  case (4):

    break;
  default:
    console.log("It's not red, blue, or green.");
}

