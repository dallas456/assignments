// total all numbers

const numbers = [1,2,3];

const total = numbers.reduce(function(final, num){
    final += num
    return final


})

console.log(total)

//num to string

const numbers2 = [1, 2, 3, 4];

const numList = numbers2.reduce(function(final, num){
    final += num
    return final

},"");

console.log(numList)

// count voters

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const voteCount = voters.reduce(function(final, voter){
    if(voter.voted === true){
        final ++
    }
    return final
}, 0)

console.log(voteCount)



// wishlist calculation


var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const totalCost = wishlist.reduce(function(final, item){
    final += item.price
    return final
}, 0)

console.log(totalCost)


//arrays into single array

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

const bigArray = arrays.reduce(function(final, array){
    
    return final.concat(array)


})

console.log(bigArray)



// voting results 


var voters2 = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const voteResult = voters2.reduce(function(final, voter){
    if(voter.age >= 18 && voter.age <= 25 && voter.voted === true){
        final.numYoungVotes ++
        
    }
    
    if(voter.age >= 18 && voter.age <= 25){
        final.numYoungPeople ++
    }

    if(voter.age >= 26 && voter.age <= 35 && voter.voted === true){
        final.numMidVotesPeople ++
    }
    if(voter.age >= 26 && voter.age <= 35 ){
        final.numMidsPeople ++
    }
    if(voter.age >= 36 && voter.age <= 55 && voter.voted === true){
        final.numOldVotesPeople ++
    }
    if(voter.age >= 36 && voter.age <= 55 ){
        final.numOldsPeople ++
    }


    return final
}, {numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0
  })

  console.log(voteResult)