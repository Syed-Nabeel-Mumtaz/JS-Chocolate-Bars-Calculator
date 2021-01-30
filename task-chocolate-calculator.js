// Set up references to the elements you will need. Use sensible names so you know what they refer to.
const form = document.getElementById("form");
const budget = document.getElementById("yourBudgetInput");
const price = document.getElementById("priceInput");
const outputP = document.getElementById("output");
// Call a named function when the form is submitted
form.addEventListener("submit", calculatePrice);
// Create that named function which should…
function calculatePrice(event) {
    event.preventDefault();

    
// … Read the user's budget from the field. You'll want this as a float (number with decimal), not an integer (whole number)
    let budgetNew = parseFloat(budget.value);
// … Read the price of the chocolate bar from the field. Again, a float.
    let priceNew = parseFloat(price.value);

// … Calculate how many bars of chocolate the user can afford.
    bars=(budgetNew/priceNew);
    var totalBars = Math.floor(bars);

// … Output the number of chocolate bars the user can afford so the user can see it.
    outputP.innerText = `You can afford ${totalBars} chococlate bars maximum`;
}
