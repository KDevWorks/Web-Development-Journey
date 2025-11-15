let str = ["Hello", "World", "This", "Is", "JavaScript"];

function concat(strArray) {
    let result = "";
    for (let i = 0; i < strArray.length; i++) {
        result += strArray[i];
    }
    return result;
}
let name = "Krishna";

function getSum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(getSum(100));

function printTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n, "*", i, "=", n * i);
    }
}

let sum2 = function hello(name) {
    return name = "Hello " + name;
    // return 10+50;
}

console.log(sum2("Krishna"));

function multipleGreet(name, count) {
    for (let i = 1; i <= count; i++) {
        name();
    }
}
let greet = function () {
    console.log("Hello World");
}

multipleGreet(greet, 8);

 