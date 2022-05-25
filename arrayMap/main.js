// doubling numbers  
let numbers = [2, 4, 6, 8, 4, 2, 8]


let answer = numbers.map(function(arr){
    return arr * 2


});

console.log(answer);


// numbers to string


function stringItAll(arr){

    result = arr.map(function(num){
        return num.toString()

    });
    return result

};



  
  console.log(stringItAll([2, 5, 100])); // ["2", "5", "100"]


// capitalize and correct

  function capitalizeNames(arr){
    
    let fixed = arr.map(function(word){
        newWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        console.log(newWord)
        return newWord

    });
    return fixed
  };
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
  
  // Output:
  // ["John", "Jacob", "Jingleheimer", "Schmidt"]
  
  

// array of the names


const arr = [
    {
    name: "Angelina Jolie",
    age: 80
    },
    {
    name: "Eric Jones",
    age: 2
    },
    {
    name: "Paris Hilton",
    age: 5
    },
    {
    name: "Kayne West",
    age: 16
    },
    {
    name: "Bob Ziroll",
    age: 100
    }
    ]
    const namesOnly = arr.map(person => person.name)
    console.log(namesOnly)


    // can they see the matrix???


    const movieGoers = [
        {
        name: "Angelina Jolie",
        age: 80
        },
        {
        name: "Eric Jones",
        age: 2
        },
        {
        name: "Paris Hilton",
        age: 5
        },
        {
        name: "Kayne West",
        age: 16
        },
        {
        name: "Bob Ziroll",
        age: 100
        }
        ]
        const matrix = movieGoers.map(candidate => candidate.age >= 18 ? candidate.name + ' Can go to Matrix' : candidate.name + ' Can NOT go to Matrix');
        
       
        
        console.log(matrix)


        // html tagged array

        
          
        const readyToPutInTheDOM = [
            {
                name: "Angelina Jolie",
                age: 80
            },
            {
                name: "Eric Jones",
                age: 2
            },
            {
                name: "Paris Hilton",
                age: 5
            },
            {
                name: "Kayne West",
                age: 16
            },
            {
                name: "Bob Ziroll",
                age: 100
            }];


            const forTheDom = readyToPutInTheDOM.map(person => "<h1> " + person.name + " </h1> <h2>" + person.age + " </h2>");

            console.log(forTheDom)


        




      