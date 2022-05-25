//Pulling the form from the HTML
const form = document.mainForm
console.log(form)

//The working mechanics of the form submission. stores user input to declared variables and prints a confirmation alert

form.addEventListener("submit", function(event) 
{
    event.preventDefault();
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const age = form.age.value;
    const gender = form.gender.value;
    const destination = form.destination.value;
    const diet = [];
    const dietSelection = document.querySelectorAll("input[name=diet]:checked");
    for (var i = 0; i < dietSelection.length; i++) {
        diet.push(dietSelection[i].value);
    }

    alert("First Name : " + firstName + "\nLast Name : " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nDestination: " + destination + "\nDiet: " + diet + "\nEnjoy your flight, we are happy to have you aboard!");
    console.log("SUBMITTED")
});




