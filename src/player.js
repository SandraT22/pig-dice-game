export class Player {
  constructor(playerNumber) {
    this.score = 0;
    this.turnScore = 0;
    this.playerNumber = playerNumber;
  }

  // turn() {
  //   if (this.numberOfDice > 1){ //checks for user input of 2 dice
  //     console.log("2 dice"); //tests if (numberOfDice > 1) is working
  //     if (this.dice1.roll() < 2){ // if you rolled a number equal to 1
  //       console.log("dice 1 = 1"); // tests if (rollDice() < 2) is working
  //       if (this.dice2.roll() < 2){ //checks if the dice number rolled is greater than 2
  //         console.log("dice 2 = 1"); // Tests if (rollDice() < 2) is working
  //         this.players[currentPlayer].score = 0; // this.players[currentPlayer].score   Sets current players score to 0
  //         this.players[currentPlayer].turnScore = 0; //sets score variable back to 0
  //         this.nextPlayer(); // calls next player function. 
  //       }
  //       else{ //if dice 2 is more than 1
  //         console.log("dice 2 = 1"); // Tests if else statement is working
  //         score = 0; //set score variable back to 0
  //         this.nextPlayer(); // call on next player function
  //       }
  //     }
  //     else if(this.dice2.roll() < 2) { //
  //       this.players[currentPlayer].turnScore = 0; // sets score variable to 0
  //       this.nextPlayer(); // calls the next player function
  //     }
  //     else { //
  //       console.log(this.dice1);
  //       console.log(this.dice2);
  //       this.players[currentPlayer].turnScore += this.dice1 + this.dice2;
  //     }          //     end of 2 dice code   //
  //   }
  //   else {     // if only 1 dice is inputted 
  //     if(this.dice1.roll() < 2) {
  //       this.players[currentPlayer].turnScore = 0;
  //       this.nextPlayer();
  //     }
  //     else {
  //       this.players[currentPlayer].turnScore += this.dice1;
  //     }
  //   }
  //   // if (isCpuPlayer){
  //   //   cpuPlayer();
  //   // }
  //   return this.players[currentPlayer].turnScore;
  //   }    
  //
  // nextPlayer(){
  //   this.lastPlayer = this.currentPlayer; 
  //
  //   if(this.currentPlayer < this.maxPlayers) {
  //     this.currentPlayer += 1;
  //   }
  //   else{
  //     this.currentPlayer = 1;
  //   }
  //   // if (isCpuPlayer){
  //   //   cpuPlayer();
  //   // }
  //   return this.currentPlayer;
  // }

}