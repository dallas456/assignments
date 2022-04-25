const form = document["addItem"]
const groceryList = document.getElementById('list')



form.addEventListener("submit", function(event){
    event.preventDefault()


    const grocery = form.title.value


    form.title.value = ""

    console.log(grocery)
    
    const listItem = document.createElement('li')

    const groceryItem = document.createElement('div')
    groceryItem.textContent = grocery

    const editButton = document.createElement('button')
    editButton.innerHTML = "edit"

    
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = "X"
        function deleteItem() {
        deleteButton.parentNode.remove(listItem)
    
     }
    deleteButton.addEventListener("click", deleteItem)
    
    
    
    

    
    
    groceryList.append(listItem)
    listItem.appendChild(groceryItem)
    listItem.appendChild(editButton)
    listItem.appendChild(deleteButton)
    
   

    console.log(groceryList)

})

