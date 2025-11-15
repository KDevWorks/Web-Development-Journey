let student = {
   name: "Rohit",
   age: 21,
   city: "Delhi",
   1: "abc",
   2: '3',
   3: "b",
   true: "Hello"

};
const item = {
   price: 100,
   quantity: 2,
   color: ["red", "blue", "green"]
};
console.log(student);

let value = {
   1: "abc",
   2: '3',
   3: "b",
   true: "Hello",

};

console.log("Object of Object");
const classInfo={
   krishna:{
      age:24,
      city:"Nanded"
   },
   rohit:{
      age:22,
      city:"Latuer"
   },
   pundlik:{
      age:23,
      city:"Latur"
   }
};

console.log("Math Objects");
let num= -10.5;
console.log("Absolute value of num is ",Math.abs(num)); /// Absolute value it means it will remove - sign
console.log("Value of 2^3 ",Math.pow(2,3)); // 2^3
console.log("Square root of 16 is ",Math.sqrt(16)); // Square root
console.log("Value of num is ",Math.ceil(num)); // Nearest and greater value of that nmber
console.log("Value of num is ",Math.floor(num)); //Nearest adn smaller value of that number
console.log("Random value between 0 to 1 ",Math.random()); // Random value between 0 to 1

console.log("Random value between 0 to 10 "); // Random value between 0 to 10
randomNum = Math.floor(Math.random()*10)+1;
console.log(randomNum);
console.log("Random value between 20 to 30");

