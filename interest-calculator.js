function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

let principal = parseInt(prompt("Enter principal in dollars: ")); 
let rate = parseInt(prompt("Enter annual interest rate in percent: "));
let time = parseInt(prompt("Enter time in years: "));

console.log("Simple Interest is: $", calculateSimpleInterest(principal, rate, time));
