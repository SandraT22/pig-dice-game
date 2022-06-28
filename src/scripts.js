//Variable Declaration
var score = 0; //points for this turn
var numberOfDice = 1;
var dice1 = 0;
var dice2 = 0; //last value rolled
var players = []; // array where scores are stored at
var maxPlayers = 0; //total player count
var playerNumber = 1; // who's turn it is
var lastPlayer = 0; // who's turn was last
var pigString = '<img src="assets/img/pig.png" alt="pig">'; // display cute pigs
var pigString2 = '<img src="assets/img/pig.png" alt="pig">'; // display cute pigs
var isCpuPlayer = false;
var clickSound;

//Buisiness Logic

function sound(src) {
  clickSound = new sound("win31.mp3");
  clickSound.play();
  rollDiceForm.start();
}

function turn() {
  if (numberOfDice > 1){ //checks for user input of 2 dice
    console.log("2 dice"); //tests if (numberOfDice > 1) is working
    if (rollDice() < 2){ // if you rolled a number equal to 1
      console.log("dice 1 = 1"); // tests if (rollDice() < 2) is working
      if (roll2Dice() < 2){ //checks if the dice number rolled is greater than 2
        console.log("dice 2 = 1"); // Tests if (rollDice() < 2) is working
        players[playerNumber-1] = 0; // Sets current players score to 0
        score = 0; //sets score variable back to 0
        nextPlayer(); // calls next player function. 
      }
      else{ //if each dice is more than 1
        console.log("dice 2 = 1"); // Tests if else statement is working
        score = 0; //set score variable back to 0
        nextPlayer(); // call on next player function
      }
    }
    else if(roll2Dice() < 2) { //
      score = 0; // sets score variable to 0
      nextPlayer(); // calls the next player function
    }
    else { //
      console.log(dice1);
      console.log(dice2);
      score += dice1 + dice2;
    }          //     end of 2 dice code   //
  }
  else {     // if only 1 dice is inputted 
    if(rollDice() < 2) {
      score = 0;
      nextPlayer();
    }
    else {
      score += dice1;
    }
  }
  if (isCpuPlayer){
    cpuPlayer();
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
  if (isCpuPlayer){
    cpuPlayer();
  }
  return playerNumber;
}

function rollDice () {
  dice1 = parseInt(Math.random()*6 + 1);
  pigString = '<img src="assets/img/pig.png" alt="pig">';
  for (let i = 1; i < dice1; i++) {
    pigString += '<img src="assets/img/pig.png" alt="pig">';
  }
  return dice1;
}

function roll2Dice () {
  dice2 = parseInt(Math.random()*6 + 1);
  pigString2 = '<img src="assets/img/pig.png" alt="pig">';
  for (let i = 1; i < dice2; i++) {
    pigString2 += '<img src="assets/img/pig.png" alt="pig">';
  }
  return dice2;
}

//CPU Player Logic
setTimeout(cpuPlayer, 5000);

function cpuPlayer() {
  if (playerNumber > 1){//is it cpu's turn?
    // cpu logic
    if  (score > 0) {
      //random decisions
      if (rollDice() > 3){
      setTimeout(rollDiceForm, 1000);
      console.log("Hello");
      }
      else {
        setTimeout(passTurnForm, 1000);
      }
    }
    else {
      setTimeout(rollDiceForm, 1000);
    }
  }
}


 

//UI Logic

function rollDiceForm(){
  turn();
  scoreboard();
}

function passTurnForm() {
  passTurn();
  scoreboard();
  sound();
  if (players[lastPlayer-1] >= 100) {
    $("#winner").show();
    $("#winner").html("<img src='img/celebrationPig.jpg' alt='Pig with hat and party blower.'></img> <br> <h3>Player " + lastPlayer + " wins!</h3>");
    $("#currentPlayer").hide();
    $("#dice").hide();
    $("#rollDice").hide();
    $("#passTurn").hide();
    $("#startGame").show();
    $("#cpuGame").show();
  }
}

function startForm() {
  maxPlayers = $("#numberOfPlayers").val();
  numberOfDice = $("#numberOfDice").val();
  players = [];
  for (let i = 0; i < maxPlayers; i++) {
    players.push(0);
    }
  if (numberOfDice < 2) {
  $("#dice2").hide();
  $("#pigs2").hide();
  } 
  $(".row").show();
  $("#winner").hide();
  $("#rollDice").show();
  $("#passTurn").show();
  $("#startGame").hide();
  $("#cpuGame").hide();
  scoreboard();
}

function scoreboard() {
  let scoreString = " ";
  for (let i = 1; i <= maxPlayers; i++) {
    scoreString += "Player " + i + " : " + players[i-1] + "  \n";
  }
  $("#score").text(scoreString);
  $("#nextTurn").text("Player " + playerNumber + "'s turn");
  $("#currentPlayer").text("Current score: " + players[playerNumber-1] +  " Points this turn: " + score);
  $("#dice").text("You rolled a " + dice1);
  $("#dice2").text("You rolled a " + dice2);
  $("#pigs").html(pigString);
  $("#pigs2").html(pigString2);
}


//Document Ready
$(document).ready(function() {
  $(".row").hide();
  $("form#startGame").submit(function(event) {
    event.preventDefault();
    isCpuPlayer = false;
    startForm();
  });
  $("form#cpuGame").submit(function(event) {
    event.preventDefault();
    isCpuPlayer = true;
    startForm();
  });

  $("form#passTurn").submit(function(event) {
    event.preventDefault();
    passTurnForm();
  });
  $("form#rollDice").submit(function(event) {
    event.preventDefault();
    //let myAudio = document.querySelector('#audio')myAudio.play()
    rollDiceForm();
  });
});