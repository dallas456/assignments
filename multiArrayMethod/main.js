// array to be manipulated


var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
];

const ofAge = peopleArray.filter(function(person){
    if(person.age >= 18){
        return true
    }

});
console.log(ofAge)


const sorted = ofAge.sort(function(a, b){

if ( a.lastName < b.lastName){
    return -1;
}
if (a.lastName > b.lastName){
    return 1;
}
return 0;

})

console.log(sorted)


const complete = sorted.reduce(function(final, person){

    final.push("<li>" + person.firstName + " " + person.lastName + " is " + person.age + " years old! </li>")

    return final

}, [])


console.log(complete)





