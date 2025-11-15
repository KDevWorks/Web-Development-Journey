student = {
    name: "John Doe",
    age: 21,
    major: "Computer Science",
    getDetails() {
        return `${this.name}, Age: ${this.age}, Major: ${this.major}`;
    }
}

console.log(student.getDetails());

console.log("Arrow function example:");
const sum = (a, b) => {
    console.log(a + b);
};

const pow = (a) => {
    console.log(a * a);
};

const sub = (a, b) => a - b;
const cube = a => (a * a * a);

console.log("Hi there");
setTimeout(() => {
    console.log("Welcome to world of JavaScript");
}, 1000);
console.log("Krishna Dasarwad");

// setInterval( () =>{
//     console.log("Hello World");
// }, 2000);

let id = setInterval(() => {
    console.log("Hello World-2");
}, 2000);

clearInterval(id); // stops the interval

