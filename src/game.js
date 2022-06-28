import Dice from '../src/dice.js';
import Player from '../src/player.js';

export default class Game {
  constructor(maxPlayers, numberOfDice) {
    this.maxPlayers = maxPlayers;
    this.numberOfDice = numberOfDice;
    this.players = {};

    this.dice1 = new Dice(6);
    if (numberOfDice > 1){
      this.dice2 = new Dice(6);
    } else {
      this.dice2 = "";
    }

    this.currentPlayer = 1;
  }

  populatePlayers() {
    for (let i = 1; i <= this.maxPlayers; i++) {
      let player = new Player(i); //creating new players
      this.players[player.playerNumber] = new Player(i); //assign player number
    }
  }

  nextPlayer(){
    this.lastPlayer = this.currentPlayer; 
  
    if(this.currentPlayer < this.maxPlayers) {
      this.currentPlayer += 1;
    }
    else{
      this.currentPlayer = 1;
    }
    return this.currentPlayer;
  }
  
  takeTurn() {
    if (this.numberOfDice > 1){ //checks for user input of 2 dice
      if (this.dice1.roll() < 2){ // if you rolled a number equal to 1
        if (this.dice2.roll() < 2){ //checks if the dice number rolled is greater than 2
          this.players[this.currentPlayer].score = 0; // this.players[currentPlayer].score   Sets current players score to 0
          this.players[this.currentPlayer].turnScore = 0; //sets score variable back to 0
          this.nextPlayer(); // calls next player function. 
        }
        else{ //if dice 2 is more than 1
          this.players[this.currentPlayer].score = 0; //set score variable back to 0
          this.nextPlayer(); // call on next player function
        }
      }
      else if(this.dice2.roll() < 2) { //
        this.players[this.currentPlayer].turnScore = 0; // sets score variable to 0
        this.nextPlayer(); // calls the next player function
      }
      else {
        this.players[this.currentPlayer].turnScore += this.dice1 + this.dice2;
      }          //  -- end of 2 dice code --  //
    }
    else {     // if only 1 dice is inputted 
      if(this.dice1.roll() < 2) { //this.dice1 = Dice(6) === this.sided = 6?
        this.players[this.currentPlayer].turnScore = 0;  //score manipulation missing? & something wrong with the .turn score. Both for playing with only 1 dice. 
        this.nextPlayer();
      }
      else {
        this.players[this.currentPlayer].turnScore += parseInt(this.dice1);
      }
    }
    return this.players[this.currentPlayer].turnScore;
  }

  passTurn(){
    this.players[this.currentPlayer].score += parseInt(this.players[this.currentPlayer].turnScore);
    this.players[this.currentPlayer].turnScore = 0;
    this.nextPlayer();
    return this.players[this.currentPlayer];
  }
}

  
//{Game}.players[{playerNumber}]