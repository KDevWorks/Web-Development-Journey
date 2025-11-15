let btns = document.querySelectorAll('button');

for (but of btns) {
    // console.dir(but);
    //     but.onclick = sayHello;
    //     but.onmouseenter = function (){
    //     console.log("Mouse pointer was entered");
    // };
}

function sayHello() {
    console.log("Hello");
}

function mouseTriggerd() {
    console.log("Mouse pointer was entered");
}

btns[3].addEventListener("click", function () {
    console.log("you clicked button-3");
})
btns[3].addEventListener('dblclick', sayHello);

let input = document.querySelector("input");
console.dir(input);

input.addEventListener('keydown', function (event) {
    console.log("Key was pressed");
    console.log("Key : ", event.key)
    console.log("COde : ", event.code)
})

let form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("Form has Submitted Succesfully");

    // let user = document.querySelector('#username');
    // let pass = document.querySelector('#password');

    // console.log(user.value);
    // console.log(pass.value);

    console.dir(form);

    let user = this.elements[0].value;
    let pass = this.elements[1].value;

    console.log(user);
    console.log(pass);
    alert(`Hi ${user} your password is set to ${pass}`);

});
// console.dir(form);
