import readlineSync from 'readline-sync';
import { greeting } from '../src/cli.js';

const name = greeting()
let gameOver = false
let win = false
let correctCount = 0

const random = () => {
  if (gameOver) {
    return;
  }
  const randomNumberOne = Math.floor(Math.random() * 10) + 1;
  const randomNumberTwo = Math.floor(Math.random() * 5) + 1;

  console.log('Question: ', randomNumberOne, randomNumberTwo);
  const correctAnswer = eval(randomNumberTwo, randomNumberOne % randomNumberTwo);
  const answer = parseInt(readlineSync.question('Your answer?: '));

if (answer === correctAnswer) {
  console.log('Correct!');
  correctCount += 1
 } else if(answer != correctAnswer && answer != Number) {
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    console.log(`Let's try again, ${name}` + '!');
    gameOver = true;
  } else {
    win = true
  }
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

