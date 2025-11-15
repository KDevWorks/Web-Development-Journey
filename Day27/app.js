let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    console.log("Button Clicked");

    let result = await getFact();
    console.log("Result :", result);

    // let p = document.getElementById("result");
    let p = document.querySelector("#result");
    p.innerText = result;
})
async function getFact() {
    try {
        let res = await axios.get("https://catfact.ninja/fact");
        return res.data.fact;
    } catch (err) {
        console.log(err);
    }
}

async function getDogImage() {
    try {
        let img = await axios.get("https://dog.ceo/api/breeds/image/random");
        return img.data.message;
    } catch (err) {
        console.log(err);
    }
}

// let dogbtn = document.getElementsByClassName("dogImg")[0];
let dogbtn = document.querySelector(".dogImg");
dogbtn.addEventListener("click", async () => {

    console.log("Dog Button Clicked");
    let result = await getDogImage();
    console.log(result);

    let imgTag = document.getElementById("img");
    imgTag.setAttribute("src", result);

});