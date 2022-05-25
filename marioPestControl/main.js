//storing the pest control form for ease of use

const pestForm = document.mainForm;
let totalBox = document.getElementById("totalBox");
// Event listener and function for calculating total.

pestForm.addEventListener("submit", function(event){
    event.preventDefault();
    const goombaNum = pestForm.goombaNum.value * 5;
    const bobombNum = pestForm.bobombNum.value * 7;
    const cheepNum = pestForm.cheepNum.value *11;
    
    const total = goombaNum + bobombNum + cheepNum;
    totalBox.textContent = total;

console.log(total);

});