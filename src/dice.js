export default class Dice {
  constructor(sides) {
    this.sides = sides;
    this.pigString = '<img src="./assets/images/pig.png" alt="pig">';
  }

  roll() {
    this.value = parseInt(Math.random() * this.sides + 1);
    this.pigString = '<img src="./assets/images/pig.png" alt="pig">';
    for (let i = 1; i < this.value; i++) {
      this.pigString += '<img src="./assets/images/pig.png" alt="pig">';
    }
    return this.value;
  }
  
}