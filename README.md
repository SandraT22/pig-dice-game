Known Bugs: 
* Malfunction when CPU played with 2 dice. Keeps going on its own and speeds up.
* Sound effect plays when page is loaded and not when a button is clicked.  

Describe: 

Test: Test will see if user can roll a dice and receive a random numbre between 1 and 6 back. 
code: rollDice()
Expected Output: > 1 > 2 > 3 > 4 > 5 >6

Test: Test will check if the dice roll is 1. 
Code: Turn();
Expected Output: True

Test: Test will check if user game will switch to the next player. 
Code: nextPlayer();
Expected Output: playerNumber+1

Test: Will add the score to players total and then pass turn. 
Code: passTurn();
Expected Output: Score + playerScore