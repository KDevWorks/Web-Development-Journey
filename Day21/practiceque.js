console.log("Question NO : 01");
let aarray = [3, 4, 5, 6];

let square = aarray.map((ele) => ele * ele);

let sum3 = aarray.reduce((sum, ele) => sum + ele);

let avg = sum3 / aarray.length;
console.log("Array element is : ", aarray);
console.log("Square of element is : ", ...square);
console.log("Sum of all element : ", sum3);
console.log("Average of array : ", avg);

console.log("Question NO : 02");
let equalFive = aarray.map((ele) => ele + 5);
console.log("Each element is equalTo five : ", equalFive);

console.log("Question NO : 03");
let students = ["Aman", "Krishna", "Shreyash", "Akash"];
console.log(students);
console.log("Uppercase Names : ", ...students.map((ele) => ele.toUpperCase()));

console.log("Question NO : 04");
const doubleAndReturnArgs = ((arr, ...args) => [...arr, ...args.map((v) => v * 2),]);
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); //[1,2,3,8,8]
doubleAndReturnArgs([2], 10, 4); //[2,20,8]
//Or
function doubleAndReturnArgs2(arr, ...args) {
    const doubled = args.map(num => num * 2);
    return arr.concat(doubled);
}
console.log(doubleAndReturnArgs2([1, 2, 3], 4, 4));

console.log("Question NO : 05");
function mergeTwoObject(obj1, obj2) {
    return { ...obj1, ...obj2 }
}

let obj = mergeTwoObject({a:3,b:4,c:5},{d:2,e:4,f:6});
// console.log(obj);
console.log(Object.values(obj));