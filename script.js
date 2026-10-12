let num = prompt("Enter a number:");

if (num > 0) {
    console.log("Positive Number");
} else if (num < 0) {
    console.log("Negative Number");
} else {
    console.log("Zero");
}




// 2
let year = prompt("Enter a year:");

if (year % 400 === 0) {
    console.log("Leap Year");
} 
else if (year % 100 === 0) {
    console.log("Not a Leap Year");
} 
else if (year % 4 === 0) {
    console.log("Leap Year");
} 
else {
    console.log("Not a Leap Year");
}


// 3
let temperature = prompt("Enter room temperature:");

if (temperature > 30) {
    console.log("It is Hot");
} else {
    console.log("It is Cold");
}

// 4
