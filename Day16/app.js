console.log("String methods");
let str = "Hello all    ";
let msg = str.trim();
console.log(msg);

console.log(str.toUpperCase());
console.log(msg.toLowerCase());

let str2 = "ILoveCoding";
console.log(str2);

console.log(str2.indexOf("Coding"));

console.log("Method Chaining")
let str3= str2.toUpperCase().indexOf("Love");
console.log(str3);

console.log("Slice method");
let str4 = "Welcome to the world of JavaScript";
let newstr = str4.slice(7);
console.log(newstr);
console.log(str4.slice(0,7));
console.log(str4.slice(8,str4.length));

console.log("Replace method");
let str5= "ILoveCoding";
console.log(str5.replace("Love","Do"));

let newStr5=str.slice(6).replace('l','t').replace('l','t').replace('l','t').trim().replace('l','t').replace('l','t');
console.log(newStr5);