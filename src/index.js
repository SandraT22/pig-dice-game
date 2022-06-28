import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import Dice from '../src/dice.js';
// import Player from '../src/player.js';
import Game from '../src/game.js';

//Document Ready
$(document).ready(function() {
  $(".row").hide();
  $("form#startGame").submit((event) => {
    event.preventDefault();
    let maxPlayers = parseInt($("#numberOfPlayers").val());
    let numberOfDice = $("#numberOfDice").val();
    let pigDice = new Game(maxPlayers, numberOfDice);
    pigDice.populatePlayers();
    startForm(pigDice);
    $("#passTurn").click(() => {
      passTurnForm(pigDice);
    });
    $("#rollDice").click(() => {
      rollDiceForm(pigDice);
    });
  });
});

//UI Logic

const rollDiceForm = (game) => {
  game.takeTurn();
  console.log(game.dice1.value + 1)
  scoreboard(game);
};

const passTurnForm = (game) => {
  game.passTurn();
  scoreboard(game);
  if (game.players[game.lastPlayer].score >= 100) {
    $("#winner").show();
    $("#winner").html("<img src='../src/assets/img/celebrationPig.jpg' alt='Pig with hat and party blower.'></img> <br> <h3>Player " + game.lastPlayer + " wins!</h3>");
    $("#currentPlayer").hide();
    $("#dice").hide();
    $("#rollDice").hide();
    $("#passTurn").hide();
    $("#startGame").show();
    $("#cpuGame").show();
  }
};

const startForm = (game) => {
  if (game.numberOfDice < 2) {
    $("#dice2").hide();
    $("#pigs2").hide();
  } 
  $(".row").show();
  $("#winner").hide();
  $("#rollDice").show();
  $("#passTurn").show();
  $("#startGame").hide();
  $("#cpuGame").hide();
  scoreboard(game);
};

const scoreboard = (game) => {
  let scoreString = " ";
  for (let i = 1; i <= game.maxPlayers; i++) {
    scoreString += "Player " + i + " : " + game.players[i].score + "  \n";
    console.log(game.players[i]);
  }
  console.log(game);
  $("#score").text(scoreString);
  $("#nextTurn").text("Player " + game.currentPlayer + "'s turn");
  $("#currentPlayer").text("Current score: " + game.players[game.currentPlayer].score +  " Points this turn: " + game.players[game.currentPlayer].turnScore);
  $("#dice").text("You rolled a " + game.players[game.currentPlayer].dice1);
  $("#dice2").text("You rolled a " + game.players[game.currentPlayer].dice2);
  $("#pigs").html(game.dice1.pigString);
  $("#pigs2").html(game.dice2.pigString);
};