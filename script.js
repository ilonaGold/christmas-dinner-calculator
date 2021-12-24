const btn = document.getElementById("btn");
let food = document.getElementById("food");
let numGuests = document.getElementById("num-input");
let vegChoice = document.getElementById("vegetarian-input");
let veganChoice = document.getElementById("vegan-input");


function displayFood() {
    if(numGuests.value === "" || numGuests.value <= 0){
        alert("Please enter the number of guests"); 
    } else if(vegChoice.checked) {
        food.textContent = "nut roast";
    } else if(veganChoice.checked) {
        food.textContent = "vegan lasagna";
    } else if(numGuests.value <= 4){
        food.textContent = "turkey";
    } else {
        food.textContent = "goose";
    }
}

btn.addEventListener("click", displayFood);

