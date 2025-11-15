let newp = document.createElement('p');
newp.innerText = "Hi i am first para";

let body = document.querySelector('body');
document.querySelector('body').prepend(newp);
// body.append(newp);
newp.classList.add('red');

let h3 = document.createElement('h3');
h3.innerText = "Heyy, I am a Blue...";
body.prepend(h3);
h3.classList.add('blue');

let box = document.createElement('div');
let h1 = document.createElement('h1');
let para = document.createElement('p');

h1.innerText = "I'M in a div";
para.innerText = "meto";

box.append(h1);
box.append(para);

body.prepend(box);
box.classList.add('box')

console.log("Practice Question NO: 01");
body.append((document.createElement('input')));


let input = document.createElement('input');
body.append(input);
console.dir(input);
input.placeholder = "Enter the your Lastname";

body.append(document.createElement('button').innerText = "Click Me");
