export default class Dice {
  constructor(sides) {
    this.sides = sides;
    this.pigString = '<img src="https://static.wixstatic.com/media/2cd43b_e61856fe5e8341b291cf9034b15f8c9e~mv2.png/v1/fill/w_237,h_252,q_90/2cd43b_e61856fe5e8341b291cf9034b15f8c9e~mv2.png" alt="pig">';
  }

  roll() { //pass in dice?
    this.value = parseInt(Math.random() * this.sides + 1);
    this.pigString = '<img src="https://static.wixstatic.com/media/2cd43b_e61856fe5e8341b291cf9034b15f8c9e~mv2.png/v1/fill/w_237,h_252,q_90/2cd43b_e61856fe5e8341b291cf9034b15f8c9e~mv2.png" alt="pig">';
    for (let i = 1; i < this.value; i++) {
      this.pigString += '<img src="https://static.wixstatic.com/media/2cd43b_e61856fe5e8341b291cf9034b15f8c9e~mv2.png/v1/fill/w_237,h_252,q_90/2cd43b_e61856fe5e8341b291cf9034b15f8c9e~mv2.png" alt="pig">';
    }
    console.log(this.value);
    return this.value;
  }
  
}