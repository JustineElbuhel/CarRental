"use strict"

window.onload = init;

//TODO Have
function init() {
    const calculateCostBtn = document.getElementById("calculateTotalBtn");
    calculateCostBtn.onclick = calculateCost;

}

function calculateCost() {
    //Extract number of days
    let numberOfDaysRented = document.getElementById("numberOfDays").value;

    //Daily car rental cost calculation
    let carRentalPrice = 29.99;
    let carRentalPricePerDay = carRentalPrice * numberOfDaysRented;
    
    //TODO Options Calculation
    let optionsTotal;
    //Daily toll tag cost calculation
    let tollTagCost = 0;
    let tollTag = document.getElementById("tollTag").checked;
    if(tollTag){
        tollTagCost = 3.95 * numberOfDaysRented;
    }

    
    //Daily gps cost calculation
    let gpsCost = 0;
    let gps = document.getElementById("gps").checked;
    if(gps) {
        gpsCost = 2.95 * numberOfDaysRented;
    }
    
    //Daily roadside assistance calculation
    let roadsideCost = 0;
    let roadside = document.getElementById("roadsideAssistance").checked;
    if(roadside) {
        roadsideCost = 2.95 * numberOfDaysRented;
    }

    //Calculate all options total cost
    optionsTotal = tollTagCost + gpsCost + roadsideCost;
    
    
    //TODO Surcharge Radio Calculation
    // Surcharge is 30% rental cost
    let surcharge;
    if(document.getElementById("ageYes").checked) {
        surcharge = carRentalPricePerDay * .30;
    }
    else {
        surcharge = 0;
    }
    
    //TODO Calculate Complete Price
    let totalQuote = carRentalPricePerDay + optionsTotal + surcharge;
    
    //TODO Replace html to new variables
    let replacedCarRentalCost = document.getElementById("carRentalCost").innerHTML.replace("xxx.xx", `$${carRentalPricePerDay.toFixed(2)}`);
    let replacedOptionsCost = document.getElementById("optionsCost").innerHTML.replace("xx.xx", `$${optionsTotal.toFixed(2)}`);
    let replacedSurchargeCost = document.getElementById("surchargeCost").innerHTML.replace("xx.xx", `$${surcharge.toFixed(2)}`);
    let replacedTotalQuote = document.getElementById("totalQuote").innerHTML.replace('xxx.xx', `$${totalQuote.toFixed(2)}`);

    //TODO Display car rental quote
    document.getElementById("carRentalCost").innerHTML = replacedCarRentalCost;
    document.getElementById("optionsCost").innerHTML = replacedOptionsCost;
    document.getElementById("surchargeCost").innerHTML = replacedSurchargeCost;
    document.getElementById("totalQuote").innerHTML = replacedTotalQuote;


}