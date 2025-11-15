console.dir(document);
console.dir(document.all);
console.dir(document.all[9]);
console.dir(document.all[9].innerText);
document.all[9].innerText = "Peter Parker";
console.dir(document.all[9].innerText = "Peter Parker");

document.getElementById;
document.getElementById("mainImg");
let obj = document.getElementById("mainImg");
console.log(obj);
console.log(obj.src);
console.log(obj.tagName);

obj.src = "assets/creation_2.jpeg"
// console.dir(obj.src = "assets/creation_2.jpeg");

document.getElementsByClassName("oldImg");
console.dir(document.getElementsByClassName("oldImg"));
let abc = document.getElementsByClassName("oldImg");
console.log(abc);

console.dir(document.querySelector("p"));
console.dir(document.querySelectorAll("p"));

console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelectorAll(".oldImg"));

let para = document.querySelector("p");
para.innerText;
para.textContent;
para.innerHTML;

let img = document.querySelectorAll('img');
console.log(img[0].getAttribute('id'));
img[0].setAttribute('class','spiderManImg');
console.log(img[0].getAttribute('class'));

let links = document.querySelectorAll('.box a');

// for(let i=0; i<links.length; i++){
//     links[i].style.color = "red";
// }
for(lin of links){
    lin.style.color = "red";   
}

let clss = document.querySelector(".box")
console.dir(clss);
console.log(clss.classList);

clss.classList.add('green');
console.log(clss.classList);

clss.classList.remove('green');
console.log(clss.classList);

clss.classList.add('green');
console.log(clss.classList);
console.log(clss.classList.contains('green'));

console.log(clss.classList.toggle('green'));
console.log(clss.classList.toggle('green'));
console.log(clss.classList);