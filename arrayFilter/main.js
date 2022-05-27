//5 or greater
const numArr = [3, 6, 8, 2]
  
const fiveAndGreaterOnly = numArr.filter(num => num >= 5)
// test
console.log(fiveAndGreaterOnly); 

//evens only

const evensOnly = numArr.filter(num => num % 2 === 0);

console.log(evensOnly);


// 5 characters or less

const wordList = ["dog", "wolf", "by", "family", "eaten", "camping"];

const fiveOrLess = wordList.filter(word => word.length <= 5);

console.log(fiveOrLess);

// illuminati members

const memberList = [
  { name: "Angelina Jolie", member: true },
  { name: "Eric Jones", member: false },
  { name: "Paris Hilton", member: true },
  { name: "Kayne West", member: false },
  { name: "Bob Ziroll", member: true }
];

const members = memberList.filter(person => person.member)

console.log(members)

//can they see matrix

const movieGoers = [
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 }
];




const ofAge = movieGoers.filter(movieGoer => movieGoer.age >= 18);

console.log(ofAge);