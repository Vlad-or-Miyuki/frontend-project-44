#!/usr/bin/env node

import readlineSync from 'readline-sync';
import logic from '../src/logic.js';

const random = () => {
  console.log('What is the result of the expression?');
  const randomNumberOne = Math.floor(Math.random() * 10) + 1;
  const randomNumberTwo = Math.floor(Math.random() * 5) + 1;
  const operations = ['+', '-', '*'];
  const randomOperation = operations[Math.floor(Math.random() * operations.length)];
  console.log('Question: ', randomNumberOne, randomOperation, randomNumberTwo);
  let correctAnswer;
  switch (randomOperation) {
    case '+':
      correctAnswer = randomNumberOne + randomNumberTwo;
      break;
    case '-':
      correctAnswer = randomNumberOne - randomNumberTwo;
      break;
    case '*':
      correctAnswer = randomNumberOne * randomNumberTwo;
      break;
    default:
      correctAnswer = 0;
  }
  const answer = parseInt(readlineSync.question('Your answer?: '), 10);

  logic(correctAnswer, answer, random);
};

random();
