//Initial declaration of variables to hold values pulled from html

// let add1 = parseInt(document.getElementById("add1").value);
// const add2 = parseInt(document.getElementById("add2").value);





// declaration of corresponding button variables

const addButton = document.getElementById("addButton");
const subButton = document.getElementById("subButton");
const multiButton = document.getElementById("multiButton");
// declaration of answer boxes

let sumBox = document.getElementById("sum");
let subBox = document.getElementById("difference");
let multiBox = document.getElementById("product");

//Declaration of functions to be used for calculating
 
addButton.addEventListener("click", function(event){
   let add1 = parseInt(document.getElementById("add1").value);
   let add2 = parseInt(document.getElementById("add2").value);
   event.preventDefault();   
   let sum = add1 + add2;
   sumBox.textContent = sum;
   console.log(sum);

});

subButton.addEventListener("click", function(event){
    let sub1 = parseInt(document.getElementById("sub1").value);
    let sub2 = parseInt(document.getElementById("sub2").value);
    event.preventDefault();
    let difference = sub1 - sub2;
    subBox.textContent = difference;
    console.log(difference)

});

multiButton.addEventListener("click", function(event){
    let multi1 = parseInt(document.getElementById("multi1").value);
    let multi2 = parseInt(document.getElementById("multi2").value);
    event.preventDefault();
    let product = multi1 * multi2;
    multiBox.textContent = product;
    console.log(product)

});


//Creation of event listeners targeted to button click





