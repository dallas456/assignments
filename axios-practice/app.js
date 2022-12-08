// use of const to request the usage of axios
const axios = require("axios");

// const newTodo = {
//     title: "first item",
//     description: "this is the first of many"

// };

const editedTodo = {
    title: "still here",
    description: "basically the same just edited through a put"
};

axios.get('https://swapi.dev/api/people/7').then(response => {
    console.log(response.data);
}).catch(error => {
    console.log(error)
});

// axios.post('https://api.vschool.io/dallaspease/todo/', newTodo).then(response => {
//     console.log(response.data);
// }).catch(error => {
//     console.log(error)
// });

// axios.put('https://api.vschool.io/dallaspease/todo/6350834c18d1a05bceae8262', editedTodo).then(response => {
//     console.log(response.data);
// }).catch(error => {
//     console.log(error)
// });
axios.get('https://api.vschool.io/dallaspease/todo/').then(response => {
        
        for(let i = 0; i < response.data.length; i++){
            const titleTodo = document.createElement('h1')
            titleTodo.textContent = response.data[i].title
            document.body.appendChild(titleTodo)
        }
    }).catch(error => {
        console.log(error)
    });