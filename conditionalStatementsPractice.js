// console.log("hi");
let num1 = 15;
let num2 = 7;
let num3 = 10;
// let total = num1 > num2;
// if(num1 > num2){
//     console.log("num1 is greatest!");
// }
// else{
//     console.log("num2 is greatest!");
// }
if (num1 > num2 && num1 > num3) {
    console.log("num1 is greatest!");
}
else if (num2 > num1 && num2 > num3) {
    console.log("num2 is greatest!");
}
else {
    console.log("num3 is greatest!");
}

// finding Even or Odd number! 
let num = 234;
if (num % 2 === 0) {
    console.log("Even number!");
}
else if (num % 2 === 1) {
    console.log("Odd number!");
}
else {
    console.log("No result!");
}
// finding Even or Odd number using Ternary operator! 
let result;
result = num % 2 === 0 ? "Even" : "Odd"
console.log(result);

// checking if a person is old enough to vote (age 18 or above) using ternary operator!
let age = 57;
let vote = (age >= 18) ? "eligible" : "not eligible";
console.log(vote);

// Check if a number is positive, negative, or zero using a ternary operator.
let numb1 = 7;
// using nested ternary operator!
let check = (numb1 > 0) ? "+ve numb" : (numb1 < 0) ? "-ve numb" : "0";
console.log(check);
// if (numb1>0){
//     console.log("The number is + .");
// }
// else if(numb1<0){
//     console.log("The number is -");
// }
// else{
//     console.log("The number is 0");
// }

// check the day is monday ..
let day = "Wednesday";
if (day === "Monday") {
    console.log("Wake Up at 7AM");
}
else if (day === "Tuesday" || day === "Wednesday" || day === "Thursday") {
    console.log("Wake Up at 5AM");
}
else if (day === "Friday") {
    console.log("Wake Up at 8AM");
}
else {
    console.log("Have good sleep!");
}


