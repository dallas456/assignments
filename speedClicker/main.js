//Initialization of variables from html document

let countBox = parseInt(document.getElementById("count").textContent);
console.log(localStorage.getItem("totalCount") );


//if statement to prevent a null value on first run
if(localStorage.getItem("totalCount") != null ){
    document.getElementById("count").textContent = localStorage.getItem("totalCount");

}

// 


let timeLeft = 30.00;

const button = document.getElementById("theButton");



console.log(typeof countBox);


var countdown = setInterval(function(){timeLeft = timeLeft - 1;
        document.getElementById("timerNum").textContent = timeLeft;}, 1000);


  // event listener with limiting if statements to decide action on click and to clear the interval   along with storing final count to local storage      

 button.addEventListener("click", function(event){
    event.preventDefault();
     if(timeLeft > 0){
        countBox += 1;
        console.log(countBox);
        document.getElementById("count").textContent = countBox;
        console.log(timeLeft)
        
    }
    else if(timeLeft <= 0){
        clearInterval(countdown);
        alert(`Time has expired! You have a final click count of : ${countBox} Congrats.`);
        localStorage.setItem("totalCount", countBox);
        
    }
    
    else{
        clearInterval(countdown);
        
        

    }


 });






