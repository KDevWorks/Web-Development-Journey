async function sayHello() {
    // throw("404 page not found  ");
    return "Hello, World!";
}

sayHello()
    .then((result) => {
        console.log("Greeting sent successfully.");
        console.log(result);
    })
    .catch((err) => {
        console.log("Failed to send greeting.");
        console.log(err);
    });

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log("Fetched data: " + num);
            resolve();
        }, 1000);
    });
}
async function callingFetchData() {
    await fetchData();
    await fetchData();
    await fetchData();
}

h1 = document.querySelector("h1");
function colorChange(color, delay) {

    return new Promise((resolve, reject) => {
        let num = Math.floor(Math.random() * 5) + 1;
        if (num > 3) {
            reject("Some error occurred!");
        }
        setTimeout(() => {
            h1.style.color = color;
            resolve();
            console.log("Color changed to " + color);
        }, delay);
    });
}

async function rainbow() {
    try {
        await colorChange("red", 1000);
        await colorChange("orange", 1000);
        await colorChange("yellow", 1000);
        await colorChange("green", 1000);
        await colorChange("blue", 1000);
        await colorChange("indigo", 1000);
        await colorChange("violet", 1000);
    } catch (err) {
        console.log("Error caught: " + err);
    }

    let num = 5;
    console.log(num);
}