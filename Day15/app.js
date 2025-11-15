console.log("Hello JavaScript");
console.log("Apna collage");

console.log("Template literal Example ");

let a = 10;
let b = 20;

console.log("The total value is", a+b, "Rupees");

let output = "The total value is " + (a+b) + " Rupees";
console.log(output);

console.log("using a template literal");
let output2 = `The total value is ${a+b} Rupees`;
console.log(output2);

console.log("If statement example");
let num = 87;
if (num % 10 == 0) {
    console.log("Number is divisible by 10");
}
else {
    console.log("Number is not divisible by 10");
}

let userName = prompt("Enter your name");
let age = prompt("Enter your age");

alert(`${userName} is ${age} years old`);

console.log("Switch case example");

let quater = prompt("Enter the quater number");
switch (quater) {
    case '1':
        console.log("January, February, March");
        break;
    case '2':
        console.log("Aprol, May, June");
        break;
    case '3':
        console.log("July, August, September");
        break;
    case '4':
        console.log("October, November, December");
        break;
    default:
        console.log("Invalid Quater Number");
}

let num1 = 32;
let num2 = 47852;
if ((num1 % 10) == (num2 % 10)) {
    console.log("numbers have the same last digit which is", (num1 % 10));
}
else {
    console.log("numbers don't have the same last digit");
}