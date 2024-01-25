#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { logic } from '../src/logic.js';

console.log('What number is missing in the progression?');
const random = () => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  const randomNumberStep = Math.floor(Math.random() * 1) + 1;

  const progression = [randomNumber];
  let count = 1;

  while (count < 10) {
    progression.push(progression[count - 1] + randomNumberStep);
    count += 1;
  }

  const randomIndex = Math.floor(Math.random() * progression.length);
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  console.log('Question: ', progression);
  const answer = parseInt(readlineSync.question('Your answer?: '), 10);

  logic(correctAnswer, answer, random);
};

random();
