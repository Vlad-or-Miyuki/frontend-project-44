import readlineSync from 'readline-sync';
import { greeting } from '../src/cli.js';

const name = greeting()
let gameOver = false
let win = false
let correctCount = 0
console.log("What number is missing in the progression?")
const random = () => {
  if (gameOver) {
  return;
}
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  const randomNumberStep = Math.floor(Math.random() * 1) + 1;
  
  let progression = [randomNumber];
  let count = 1;
  
  while (count < 10) {
      progression.push(progression[count - 1] + randomNumberStep);
      count = count + 1;
  }
  
  const randomIndex = Math.floor(Math.random() * progression.length);
  const correctAnswer = progression[randomIndex]
  progression[randomIndex] = '..';
  console.log('Question: ', progression);
  const answer = parseInt(readlineSync.question('Your answer?: '));

if(answer === correctAnswer) {
    console.log('Correct!');
    correctCount += 1
 } else if(answer != correctAnswer && answer != Number){
   console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
   console.log(`Let's try again, ${name}` + '!');
   gameOver = true;
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