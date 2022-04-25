var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name? ');

console.log('Hi ' + userName + '!');

var num1 = readlineSync.question('What is the first number you would like to work with today?')

console.log('You have chosen ' + num1 + '.')

var num2 = readlineSync.question(' And what is the second number you would like to work with?')

console.log('You have chosen ' + num1 + ' and ' + num2 + '!')

