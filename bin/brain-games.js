#!/usr/bin/env node
import greeting from '../src/cli.js';

const userName = greeting();

const welcome = (name) => {
  console.log('Welcome to the Brain Games!');
  console.log(name);
};

welcome(userName);

export default welcome;
