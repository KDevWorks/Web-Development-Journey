console.log("forEach method of array");
let print = function (ele) {
    console.log(ele);
}

let arr = [1, 2, 3, 4, 5];
arr.forEach(print);

let print2 = ele => console.log(ele);
arr.forEach(print2);

let array = [{
    name: "abc",
    marks: 90
}, {
    name: "xyz",
    marks: 80
}, {
    name: "pqr",
    marks: 70
}
];
array.forEach((Student) => console.log(Student.name));


let gpa = array.map((student) => {
    return student.marks / 10;
})
console.log(gpa);

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9.10, 11, 12, 13, 14, 15];
let evenNum = num.filter((ele) => {
    return ele % 2 == 0;
});
console.log("Even Number array is : ", evenNum);

let number = num.filter(ele => {
    return ele > 5;
});
console.log("Number greater than 5 is : ", number);

let num2 = [2, 4, 6, 8, 10];
let id = num2.every((ele) => ele % 2 == 0);
if (id == true) {
    console.log("All are even number");
} else {
    console.log("All are not even number");
}

console.log("Array reduce method: ");
let final = num2.reduce((res, ele) => {
    console.log(res);
    return res + ele;
})
console.log("sum is : ", final);

console.log("Find the maximum and minumum element in an array: ");
let numbers = [3, 5, 7, 2, 8, -1, 4];
let max = numbers.reduce((max, ele) => {
    if (max < ele) {
        return ele;
    } else {
        return max;
    }
});
console.log("Maximum element is : ", max);

function getMinimum(nums) {
    let minele = nums.reduce((min, ele) => {
        if (min > ele) {
            return ele;
        } else {
            return min;
        }
    });
    return minele;
}
let mini = getMinimum(numbers);
console.log("Minimum element is : ", mini);

console.log("JavaScript Spread Concept : ");
let min = Math.min(...numbers);
console.log("Array element is : ", ...numbers);
console.log("Minimum element : ", min);
let string = "Krishna Dasarwad";
console.log(...string);

