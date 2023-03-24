console.log("Hello!");

let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.7062;
let rateUSD = 4.4202;
let rateCZK = 0.1965;
let rateAUD = 2.9637;
let rateJPY = 3.3203;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result;


    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;
        case "USD":
            result = amount / rateUSD;
            break;
        case "CZK":
            result = amount / rateCZK;
            break;
        case "AUD":
            result = amount / rateAUD;
            break;
        case "JPY":
            result = amount / rateJPY;
            break;
    }

    resultElement.innerHTML = `${result.toFixed(2)} ${currency}`;
});
