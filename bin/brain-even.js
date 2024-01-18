import readlineSync from 'readline-sync';
import { greeting } from '../src/cli.js';

const name = greeting();
let gameOver = false; //отслеживание состояния игры
let win = false; //отслеживание состояния игры
let correctCount = 0;
const random = () => {
  if (gameOver) { // Если игра завершилась то не запускать новую
    return;
  }

  const randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log('Question: ' + randomNumber); 
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const answer = readlineSync.question('Your answer?: ');

  if (answer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    correctCount += 1
  } else if (answer != correctAnswer){ 
   console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
   console.log(`Let's try again, ${name}` + '!');
   gameOver = true; //чтобы игра больше не запускалась
  } else {
    win = true;
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