#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { logic } from '../src/logic.js';

const random = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log('Question: ' + randomNumber); 
  const isPrime = randomNumber => {
    if (randomNumber <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(randomNumber); i =+ 1) {
      if (randomNumber % i === 0) {
        return false;
      }
    }
    return true;
  };
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const answer = readlineSync.question('Your answer?: ');

  logic(correctAnswer, answer, random);
};

random();