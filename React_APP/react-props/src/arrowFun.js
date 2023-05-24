import React from 'react';
import App from './components/App';
// 
var numbers = [3, 56, 2, 48, 5];

// using regular function
function square(num) {
  return num * num ;  
}

// using arrow function
const newNumbers = numbers.map( (x) => x * x);

// console.log(newNumbers);