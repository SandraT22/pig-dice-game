import { Dice } from 'dice.js';
import { Player } from 'player.js';

export class Game {
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
          this.players[currentPlayer].score = 0; // this.players[currentPlayer].score   Sets current players score to 0
          this.players[currentPlayer].turnScore = 0; //sets score variable back to 0
          this.nextPlayer(); // calls next player function. 
        }
        else{ //if dice 2 is more than 1
          score = 0; //set score variable back to 0
          this.nextPlayer(); // call on next player function
        }
      }
      else if(this.dice2.roll() < 2) { //
        this.players[currentPlayer].turnScore = 0; // sets score variable to 0
        this.nextPlayer(); // calls the next player function
      }
      else {
        this.players[currentPlayer].turnScore += this.dice1 + this.dice2;
      }          //  -- end of 2 dice code --  //
    }
    else {     // if only 1 dice is inputted 
      if(this.dice1.roll() < 2) {
        this.players[currentPlayer].turnScore = 0;
        this.nextPlayer();
      }
      else {
        this.players[currentPlayer].turnScore += this.dice1;
      }
    }
    return this.players[currentPlayer].turnScore;
    }

    passTurn(){
      this.players[currentPlayer].score += this.players[currentPlayer].turnScore;
      this.players[currentPlayer].turnScore = 0;
      this.nextPlayer();
      return this.players[currentPlayer];
    }
}

  

  //{Game}.players[{playerNumber}]