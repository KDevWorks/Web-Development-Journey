let butt = document.querySelector("button");

butt.addEventListener("click", function () {
    // console.dir(butt);
    // console.log("Button clicked");
    let randomColor = getRandomColor();
    let h3 = document.querySelector("h3");
    h3.innerText = randomColor;

    let div = document.querySelector('div');
    div.style.backgroundColor = randomColor;

    console.log("Color was Updated");
});

function getRandomColor() {
    let Red = Math.floor(Math.random() * 255);
    let Blue = Math.floor(Math.random() * 255);
    let Green = Math.floor(Math.random() * 255);

    let color = `rgb(${Red}, ${Blue}, ${Green} )`;
    return color;
}