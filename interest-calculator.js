function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

let principal = readInt("Enter principal (in dollars): ); 
let rate = readInt("Enter annual interest rate in percent: ");
let time = readInt("Enter time in years: ");

console.log("Simple Interest is: $", calculateSimpleInterest(principal, rate, time));
