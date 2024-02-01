#!/usr/bin/env node
import greeting from '../src/cli.js';

const userName = greeting();

const welcome = () => {
  console.log('Welcome to the Brain Games!');
  console.log(userName)
};

export default welcome;