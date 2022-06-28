import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Dice } from 'dice.js';
import { Player } from 'player.js';
import { Game } from 'game.js'

//UI Logic

function rollDiceForm(){
  turn();
  scoreboard();
}

function passTurnForm() {
  pigDice.passTurn();
  scoreboard();
  if (pigDice.players[pigDice.lastPlayer].score >= 100) {
    $("#winner").show();
    $("#winner").html("<img src='assets/img/celebrationPig.jpg' alt='Pig with hat and party blower.'></img> <br> <h3>Player " + lastPlayer + " wins!</h3>");
    $("#currentPlayer").hide();
    $("#dice").hide();
    $("#rollDice").hide();
    $("#passTurn").hide();
    $("#startGame").show();
    $("#cpuGame").show();
  }
}

function startForm() {
  let maxPlayers = $("#numberOfPlayers").val();
  let numberOfDice = $("#numberOfDice").val();

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

  pigDice = new Game(maxPlayers, numberOfDice)
  scoreboard();
}

function scoreboard() {
  let scoreString = " ";
  for (let i = 1; i <= pigDice.maxPlayers; i++) {
    scoreString += "Player " + i + " : " + pigDice.players[i].score + "  \n";
  }
  $("#score").text(scoreString);
  $("#nextTurn").text("Player " + pigDice.currentPlayer + "'s turn");
  $("#currentPlayer").text("Current score: " + pigDice.this.players[currentPlayer].turnScore +  " Points this turn: " + score);
  $("#dice").text(pigDice.players[currentPlayer]);
 // $("#dice2").text("You rolled a " + dice2);
  $("#pigs").html(pigDice.dice1.pigString);
  $("#pigs2").html(pigDice.dice2.pigString);
}

//Document Ready
$(document).ready(function() {
  $(".row").hide();
  $("form#startGame").submit(function(event) {
    event.preventDefault();
    startForm();
  });
  $("form#cpuGame").submit(function(event) {
    event.preventDefault();
    isCpuPlayer = true;
    startForm();
  });

  $("form#passTurn").submit(function(event) {
    event.preventDefault();
    passTurnForm()
  });
  $("form#rollDice").submit(function(event) {
    event.preventDefault();
    //let myAudio = document.querySelector('#audio')myAudio.play()
    rollDiceForm();
  });
});