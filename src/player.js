export class Player {
  constructor(playerNumber) {
    this.score = 0;
    this.turnScore = 0;
    this.playerNumber = playerNumber;
  }

  turn() {
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

}