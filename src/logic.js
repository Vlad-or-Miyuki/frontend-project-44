import { name } from '../bin/brain-even.js';

export const logic = (correctAnswer, answer) => { 
  if (answer.toLowerCase() === correctAnswer) { 
    console.log('Correct!'); 
    correctCount += 1; 
  } else if (answer !== correctAnswer && answer != Number) { 
    console.log(answer + ' is wrong answer ;(. Correct answer was ' + correctAnswer + '.'); 
    console.log('Let\'s try again, ' + name + '!'); 
    gameOver = true; 
  } else { 
    win = true; 
  } 
  return { gameOver, win, correctCount }; // Возвращаем обновленные значения 
};