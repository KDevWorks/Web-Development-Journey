let student1= "Krishan";
let student2 = "Rohit";
let student3 = "chrirag";

// declaring a array
let student= ["Krishna", "Rohit", "Chirag"];
let num=[2,3,4,5,6];
console.log(num);

let info= ['Krisha',22, 'Comp', '45'];
console.log(info);

let fruit = ["Apple","Banana", "mango"];
console.log(fruit);
fruit[1]= "Orange";
console.log(fruit);

fruit[20]= "Grapes";
console.log(fruit);

let empty = [];
console.log(empty);

empty.length;
console.log(empty.length);

let str="Rohit";
str[0]="S";
console.log(str);


let village = ["Loha", "Pune", "Mumbai"];
console.log(village);
village[0]="Loni";
console.log(village);

village.push("Delhi");
console.log(village);
village.pop();
console.log(village);

village.unshift("Nagpur");
console.log(village);
village.shift();
console.log(village);

let month = ["Jan", "Feb", "Mar", "Apr", "May"];
console.log(month);

// month.shift();
// month.shift();
console.log(month);
   
let temp = ["kri",22, "Arjun", 45];
temp.includes(22);
temp.indexOf("Arjun");
console.log(temp);

console.log("Reverse Method");
month.reverse();
console.log(month);

console.log("Sort Method");
month.sort();
console.log(month);

console.log("Slice Method");
month.slice();
console.log(month.slice());
console.log(month.slice(3));
console.log(month.slice(1,4));
console.log(month.slice(-4));

console.log("Splice Method");
let color=["Red", "Green", "Blue", "White"];
console.log(color);
color.splice(2,3);
console.log(color);

let game=[['X',null,'O'],[null,'X',null],['O',null,'X']];
console.log(game);

console.log("for of loop");
arr4= ["Apple", "Banana", "Mango"];
for(fruit of arr4){
    console.log(fruit);
}

let str6="Hello world";
for(echCharacter of str6){
    console.log(echCharacter);
}