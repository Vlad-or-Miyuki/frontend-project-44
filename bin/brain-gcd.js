#!/usr/bin/env node
import readlineSync from 'readline-sync';
import logic from '../src/logic.js';

function gcd(randomNumberOne, randomNumberTwo) {
  if (randomNumberTwo === 0) {
    return randomNumberOne;
  }
  return gcd(randomNumberTwo, randomNumberOne % randomNumberTwo);
}

const random = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const randomNumberOne = Math.floor(Math.random() * 10) + 1;
  const randomNumberTwo = Math.floor(Math.random() * 5) + 1;

  console.log('Question:', randomNumberOne, randomNumberTwo);
  const correctAnswer = gcd(randomNumberOne, randomNumberTwo);
  const answer = parseInt(readlineSync.question('Your answer?: '), 10);

  logic(correctAnswer, answer, random);
};

random();
