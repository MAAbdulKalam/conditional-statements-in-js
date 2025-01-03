/*Assignment - conditional statements :
1. Check HTTP Status Code
Write a function that accepts an HTTP status code and returns the category of the response:
 1xx: "Informational" >=100 <200;
 2xx: "Success"       >=200 <300;
 3xx: "Redirection"   >=300 <400;
 4xx: "Client Error"  >=400 <500;
 5xx: "Server Error"  >=500 <600;   */
function checkHTTPStatusCode(code) {
    switch (true) {
        case code >= 100 && code < 200:
            console.log("Informational");
            break;
        case code >= 200 && code < 300:
            console.log("Success");
            break;
        case code >= 300 && code < 400:
            console.log("Redirection");
            break;
        case code >= 400 && code < 500:
            console.log("Client Error");
            break;
        case code >= 500 && code < 600:
            console.log("Server Error");
            break;
        default:
            console.log("Invalid HTTP Status Code");
    }
}
checkHTTPStatusCode(404); // Output: "Client Error"
checkHTTPStatusCode(200); // Output: "Success"
checkHTTPStatusCode(500); // Output: "Server Error"
checkHTTPStatusCode(42);  // Output: "Invalid HTTP Status Code"

/*2. Age Eligibility for Driving License
Create a function that takes a person’s age as input and checks if they are eligible to apply for a driving license (age ≥ 18). */
// let age = 10;
function eligible(age) {
    if (age >= 18) {
        return "He is eligible to apply for driving license!";
        // console.log("He is eligible to apply for driving license!");
    }
    else {
        return "He is not eligible to apply for driving license!";
        // console.log("He is not eligible to apply for driving license!");
    }
}
console.log(eligible(10));
console.log(eligible(57));

/*3. API Rate Limiter
Write a function that takes the number of requests made by a user in a minute and checks
whether the user has exceeded the limit. The limit is set to 100 requests per minute. */
function RateLimiter(checkRequest) {
    const limit = 100;
    if (checkRequest > 100) {
        console.log("Exceeded the limit. Reduce the number of requests!")
    } else {
        console.log("Request accepted. keep going!")
    }
}
RateLimiter(57);

/*4. Grade Calculator
Write a function that takes a score (0–100) as input and outputs the corresponding grade based
on the following criteria:
 A: 90–100
 B: 80–89
 C: 70–79
 D: 60–69
 F: below 60 */

function Calculator(marks) {
    switch (true) {
        case marks >= 90 && marks <= 100:
            console.log("U got A grade!");
            break;
        case marks >= 80 && marks <= 89:
            console.log("U got B grade!");
            break;
        case marks >= 70 && marks <= 79:
            console.log("U got C grade!");
            break;
        case marks >= 60 && marks <= 69:
            console.log("U got   D grade!");
            break;
        case marks < 60:
            console.log("U got F grade!")
            break;
        default:
            console.log("Invalid Marks");
    }
}
Calculator(94);

/*5. Leap Year Checker
Write a function to check if a given year is a leap year. */
let Year = 2024;
if ((Year % 4 === 0 && Year % 100 !== 0) || Year % 400 === 0) {
    console.log("This is a leap year");
} else {
    console.log("This is not a leap year");
}

/*6. Traffic Light System
Write a function that takes the color of a traffic light as input and outputs an action based on the
color:
 Red: "Stop"
 Yellow: "Get Ready"
 Green: "Go" */
let color = "Green";
if (color === "Red") {
    console.log("Stop");
}
else if (color === "Yellow") {
    console.log("Get Ready");
}
else if (color === "Green") {
    console.log("Go");
}
else {
    console.log("Enter the valid color!");
}

/*7. Content-Type Validator
Write a function that validates the Content-Type of an HTTP request. If the content type is
application/json, return "Valid Request"; otherwise, return "Invalid Content-Type". */
function HTTPRequest(type) {
    if (type === "application/json") {
        console.log("Valid Request");
    }
    else {
        console.log("Invalid Content-Type");
    }
}
HTTPRequest("ak");
HTTPRequest("application/json");

/*8. Shopping Discount Calculator
Write a function that calculates the total cost after applying a discount:
 No discount for amounts < $50
 10% discount for amounts between $50–$100
 20% discount for amounts > $100  */
function calculateDiscount(amount) {
    let totalCost;

    if (amount < 50) {
        totalCost = amount; //no discount
    } else if (amount >= 50 && amount <= 100) {
        totalCost = amount - (amount * 0.10);  //10% discount 
    } else {
        totalCost = amount - (amount * 0.20);  //20% discount
    }
    console.log(`The total cost after discount is $${totalCost.toFixed(2)}`);
}
calculateDiscount(50);  //The total cost after discount is $45.00
calculateDiscount(75);  //The total cost after discount is $67.50

/*9. Temperature Check
Write a function that categorizes a given temperature as:
 Below 0: "Freezing"
 0–15: "Cold"
 16–30: "Warm"
 Above 30: "Hot" */
let temperature = 27;
if (temperature < 0) {
    console.log("Freezing");
}
else if (temperature >= 0 && temperature <= 15) {
    console.log("Cold");
}
else if (temperature >= 16 && temperature <= 30) {
    console.log("Cold");
}
else if (temperature > 30) {
    console.log("Hot");
}
else {
    console.log("Enter the valid number!");
}

/*10. FizzBuzz Game
Create a function that prints numbers from 1 to 20 but:
 Prints "Fizz" for multiples of 3
 Prints "Buzz" for multiples of 5
 Prints "FizzBuzz" for multiples of both 3 and 5  */
let print = 13;
if (print % 3 === 0 && print % 5 === 0) {
    console.log("FizzBuzz");
}
else if (print % 3 === 0) {
    console.log("Fizz");
}
else if (print % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(`${print} number will not be a multiple of 3 and 5!`);
}

function printFizzBuzz() {
    for (i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
printFizzBuzz(); //calling the function.











