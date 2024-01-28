#!/usr/bin/env node

import greeting from './cli.js';

const name = greeting();
let correctCount = 0;

export const logic = (correctAnswer, answer, random) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
    correctCount += 1;
  } else if (answer !== correctAnswer || Number.isNaN(answer)) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    console.log(`Let's try again, ${name}!`);
    correctCount = 0;
    return;
  }

  if (correctCount === 3) {
    console.log(`Congratulations, ${name}!`);
    return;
  }

  random();
};
