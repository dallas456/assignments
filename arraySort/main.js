// function sorting array least to greatest

const numbers = [1, 3, 5, 2, 90, 20]

const leastToGreat = numbers.sort(function(a, b){
    return a-b

});
console.log(leastToGreat);

// largest to smallest numbers

const numArray = [1, 3, 5, 2, 90, 20];

function greatestToLeast(arr) {
    arr.sort(function(a, b){
        return b-a
    })
    return arr
};

  console.log(greatestToLeast(numArray));


  // Shortest string to longest


const stringArray = ["dog", "wolf", "by", "family", "eaten"];

function lengthSort(arr) {
    arr.sort  (function(a, b){
        return a.length - b.length

    })
    return arr
    
  };

  console.log(lengthSort(stringArray));

  // alphabetically sorted array

  const stringArray2 = ["dog", "wolf", "by", "family", "eaten"];

  function alphabetical(arr) {

    arr.sort()
    return arr
};

console.log(alphabetical(stringArray2));


// objects sorted by age value

const people =  [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }];

function byAge(arr){
    arr.sort(function(a, b){
        return a.age - b.age


    })
    return arr
    
}

console.log(byAge(people));