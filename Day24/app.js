let div = document.querySelector('div');
let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');

div.addEventListener('click', function () {
    console.log("div was clicked");
})
ul.addEventListener('click', function (event) {
    event.stopPropagation();
    console.log("ul was clicked");
})

for (li of lis) {
    li.addEventListener('click', function (event) {
        event.stopPropagation();
        console.log("li was clicked");
    })
}

// let input = document.querySelector("input");
// let ul = document.querySelector("ul");
// let btn = document.querySelector("button");

// btn.addEventListener('click', function () {
//     console.log(input.value);

//     let delbtn = document.createElement("button");
//     delbtn.innerText = "Delete";
//     delbtn.classList.add("Delete");

//     let item = document.createElement('li');
//     item.innerText = input.value;
//     ul.appendChild(item);
//     item.appendChild(delbtn);
//     input.value = "";
// })

// let delbtns = document.querySelectorAll(".Delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//         // console.log("clicked");
//         let par = this.parentElement;
//         // console.log(par);
//         par.remove();
//     })
// }