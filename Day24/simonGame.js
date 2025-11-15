let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        levelUp();
    }
});

function gameFlash(bt) {
    // console.log(bt); 
    bt.classList.add("flash");
    setTimeout(function () {
        bt.classList.remove("flash");
    }, 250);
}

function userFlash(bt) {
    // console.log(bt);
    bt.classList.add("userFlash");
    setTimeout(function () {
        bt.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    // console.dir(h2);
    h2.innerText = `level ${level} `;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    // console.log("Current level : ", level);
    // let idx = level-1;  
    // console.log(level);
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
        // console.log("same value");
    } else {
        h2.innerHTML = `Game Over..! Your Score was <b>${level}</b> Press any Key to Start Game `;
        reset();
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "white";
        }, 150)
    }
}
function btnPress() {
    // console.log(this);  
    let bt = this;
    userFlash(bt);
    let userColor = bt.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq);

    checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll('.btn');
for (bt of allbtns) {
    bt.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
