import readlineSync from 'readline-sync';
import { greeting } from '../src/cli.js';
import { logic } from '../src/logic.js';

const name = greeting();
let gameOver = false;
let win = false;
let correctCount = 0;

export const random = () => {
  if (gameOver) {
    return;
  }
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log('Question: ' + randomNumber);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const answer = readlineSync.question('Your answer?: ');

}

for (let i = 0; i < 3; i += 1) {
  random();
}

if (correctCount === 3) {
  win = true;
}

if(win) {
  console.log('Congratulations, ' + name + '!')
}