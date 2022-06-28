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
    }
  }

  populatePlayers() {
    for (let i = 1; i <= this.maxPlayers; i++) {
      let player = new Player(i);
      this.players[player.playerNumber] = new Player(i);
    }
  }

  //{Game}.players[{playerNumber}]
}