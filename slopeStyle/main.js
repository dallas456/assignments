//rest operator to help this function return an array of animals, no matter how many animals are passed to it
const animals2 = ["rabbit", "horse", "llama"]
let collectAnimals = (...animals) => animals;
  


console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", animals2));
// ["dog", "cat", "mouse", "jackolope", "platypus"]


//Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that 
//becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:
// { item } is shorthand for { item: item }

function combineFruit(fruit, sweets, vegetables){
    return {
        ...{fruit}, ...{sweets}, ...{vegetables}

    }
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))


             // //=> {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
//      }

// Use destructuring to use the property names as variables. Destructure the object in the parameter:

function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  
  console.log(parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
  }));

//  Use array destructuring to make this code ES6

function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}
let eyes = [3, 5, 22, 6, 3]
console.log(returnFirst(eyes))

//Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    let [firstFav, secondFav, thirdFav] = arr;
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities))


// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. 
// You may write it assuming you will always recieve three arrays if you would like to

function combineAnimals(arr1, arr2, arr3) {
    return [...arr1, ...arr2, ...arr3]

}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

//Try to make the following function more ES6y

let product = (...arr) => { return arr.reduce(function(acc, number){return acc * number}, 1)}
   
console.log(product(2,5,3,12,7));


//Make the following function more ES6y. Use at least both the rest and spread operators:

let unshift = (x, ...array) => { return [x, ...array]};
    




console.log(unshift("dog", 44, "cat", 365, realAnimals));
    



//Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:

let populatePeople = (names) => {return names.map(function(name)
    {
        name = name.split(" ");
        let [firstName] = name;
        let lastName = name[1];
        return [ {firstName}, {lastName}]
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
  
  

