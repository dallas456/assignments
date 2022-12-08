// const { default: axios } = require("axios");

// const { default: axios } = require("axios");

// declaration of variable for the user form
const bigForm = document["todo-form"]

// function to call for deleteion of list items

// function bigDelete(){
//     let deleteId = dButton.getAttribute('id')
//     axios.delete(`https://api.vschool.io/scrimbalessons/todo/${deleteId}`)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))
// }




//function for erasing/resetting the space for the items on the page
function magicEraser(){
    document.getElementById('todo-list').innerHTML = ""
}


//function used to request the todo items and to call the showData function

function getList(){
    axios.get("https://api.vschool.io/dallaspease/todo/")
    .then(results => showData(results.data))
    .catch(err => console.log(err))
};

//pushes list of todo items into the DOM

function showData(data){
//calling the eraser function to clear DOM
    magicEraser();

    //loop through data and toss value into proper element, adds children into html div
    for(let i = 0; i < data.length; i++){
        //declaration of variables for html element production
        const container = document.createElement('div')
        const count = i + 'container'        // establishes variable for template use
        const boxCount = i + 'box'           // counter for check box id
        const title = document.createElement('h1')
        const price = document.createElement('h1')
        const description = document.createElement('h1') 
        const image = document.createElement('img')  // image tag
        const cBox = document.createElement('input') //check box for completion
        const dButton = document.createElement('button')  //delete button
        const cBoxLabel = document.createElement('label')
        //sets dynamic ID and a class for each todo item
        container.setAttribute('id', `${count}`)
        
        
        
        
        // sets value and content for html elements before adding to DOM
        title.textContent = `Item Name: ${data[i].title}`
        price.textContent = `Item Cost: $  ${data[i].price}`
        description.textContent = `Item Description: ${data[i].description}`
        if(data[i].imgUrl != ""){image.src=`${data[i].imgUrl}`}else{image.src="https://images.unsplash.com/photo-1579547944064-0180251f94c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fGVtcHR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
        //checkbox setup
        cBox.type = "checkbox"
        // Checks for completion and assigns correct class for the strike through line
        if(data[i].completed != false){container.setAttribute('class', 'isCompleted'); cBox.checked=true}else{container.setAttribute('class', `itemContainer`)}
        cBox.for = `${data[i]._id}`
        cBoxLabel.textContent = "Item Completed"
        cBoxLabel.setAttribute('id', `${boxCount}`)
        cBox.addEventListener('click', function checker(){
            let item = cBox.for
            let update = ''
            if(cBox.checked === true){update = {completed: true}}else{update = {completed: false}};
            axios.put(`https://api.vschool.io/dallaspease/todo/${item}`, update)
            .then(response => console.log(response.data))
            .then(getList)
            .catch(error => console.log(error))
        })
        //setting up the delete button
        dButton.textContent = "X"
        dButton.setAttribute('id', `${data[i]._id}`)
        dButton.setAttribute('class', 'deleteButton')

        dButton.addEventListener('click', function bigDelete(){
            let deleteId = dButton.getAttribute('id')
            axios.delete(`https://api.vschool.io/dallaspease/todo/${deleteId}`)
            .then(response => console.log(response.data))
            .then(getList)
            .catch(error => console.log(error))
            // setTimeout(getList, 4000);
        })
        //pushing of html elements to the DOM first the container then stuffing it with everything else
        document.getElementById('todo-list').appendChild(container)
        document.getElementById(`${count}`).appendChild(title)
        document.getElementById(`${count}`).appendChild(description)
        document.getElementById(`${count}`).appendChild(image)
        

        if(data[i].price >= 0)  {document.getElementById(`${count}`).appendChild(price)}
        document.getElementById(`${count}`).appendChild(dButton)

        document.getElementById(`${count}`).appendChild(cBoxLabel)
        document.getElementById(`${boxCount}`).appendChild(cBox)
    }

   
};
//function for submitting user data
bigForm.addEventListener("submit", function(b){
    b.preventDefault()
    //new form varaibale to be submitted
    const bigTodo = {
        title: bigForm.title.value,
        price: bigForm.price.value,
        description: bigForm.description.value,
        imgUrl: bigForm.imgUrl.value
    }
    bigForm.title.value = ""
    bigForm.price.value = ""
    bigForm.description.value = ""
    bigForm.imgUrl.value = ""

    axios.post("https://api.vschool.io/dallaspease/todo/", bigTodo)
        .then(response => console.log(response))
        .then(getList)
        .catch(err => console.log(err))

    
})







//calls the get list function on page load
getList();

// Test of page clearing
// setTimeout(function(){magicEraser()},20000