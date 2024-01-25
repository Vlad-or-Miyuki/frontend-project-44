#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { logic } from '../src/logic.js';

const random = () => {
  console.log('What is the result of the expression?')
  const randomNumberOne = Math.floor(Math.random() * 10) + 1;
  const randomNumberTwo = Math.floor(Math.random() * 5) + 1;
  let operations = ['+', '-', '*'];
  let randomOperation = operations[Math.floor(Math.random() * operations.length)];
  console.log('Question: ', randomNumberOne, randomOperation, randomNumberTwo);
  const correctAnswer = eval(randomNumberOne + randomOperation + randomNumberTwo);
  const answer = parseInt(readlineSync.question('Your answer?: '));

  logic(correctAnswer, answer, random);
};

random();