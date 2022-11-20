"use strict"

const OneBeefToCO2 = 15500;
const flightCopToLonCO2 = 115 * 958;

const oneHourFacebookToCO2 = 0.79 * 60;
const oneHourTikTokToCO2 = 2.63 * 60;
const oneHourInstagramToCO2 = 1.05 * 60;
const oneHourTwitterToCO2 = 0.60 * 60;

const inputFB = document.querySelector(".input1").value;
const inputIG = document.querySelector(".input2").value;
const inputTW = document.querySelector(".input3").value;
const inputTT = document.querySelector(".input4").value;
const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", () => {
    
    const inputResultFB = oneHourFacebookToCO2 * inputFB;
    const inputResultIG = oneHourInstagramToCO2 * inputIG;
    const inputResultTW = oneHourTwitterToCO2 * inputTW;
    const inputResultTT = oneHourTikTokToCO2 * inputTT;
    
    const addedInputResult = inputResultFB + inputResultIG + inputResultTT + inputResultTW;
    console.log(addedInputResult * 360);
    const resultBeef = (addedInputResult * 365) / OneBeefToCO2;
    const resultFlight = (addedInputResult * 365) / flightCopToLonCO2;

    showResult(resultBeef, resultFlight);
})

function showResult(resultBeef, resultFlight) {
    document.querySelector(".beef").textContent = `You are eating ${resultBeef.toFixed(2)} steak in a year`;
    document.querySelector(".flight").textContent = `Percentage of flight from Copenhagen/London in a year: ${resultFlight.toFixed(2)} `;

}





