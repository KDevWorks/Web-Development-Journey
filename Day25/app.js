
//01).callbacks nesting -> callback hell
// let h1 = document.querySelector('h1');

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay)
// }
// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000);
//     });
// });

// let h1 = document.querySelector('h1');
// function changeColor(data, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = data;
//         console.log(data);
//         if (nextColorChange) nextColorChange();
//     }, delay);

// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("pink", 1000);
//         });
//     });
// })

// 2).Setting up for promises
function savetoDb(data, success, failure) {
    let netSpeed = Math.floor(Math.random() * 10) + 1;
    console.log("Network Speed is : ", netSpeed);
    if (netSpeed > 5) {
        success(data);
    } else {
        failure();
    }
}

savetoDb("Krishna Dasarwad",
    (info) => {
        console.log("Data was Saved, data is : 01", info);
        savetoDb("Pundlik Bade",
            (info) => {
                console.log("Data was Saved, data is : 02", info);
                savetoDb("Rohit Fule",
                    (info) => {
                        console.log("Data was Saved, data is : 03 ", info);
                    },
                    () => {
                        console.log("Weak connection....03");
                    });
            },
            () => {
                console.log("Weak connection....02");
            });
    },
    () => {
        console.log("Weak connection....01");
    });
console.log("\n\n");

function savetoDb_2(data) {
    return new Promise((resolve, reject) => {
        let netSpeed = Math.floor(Math.random() * 10) + 1;
        console.log("Netspees is :", netSpeed);
        if (netSpeed > 4) {
            resolve(`success: Data was saved = ${data}`);
        } else {
            reject("failure: weak connection");
        }
    })
}

// let request = savetoDb_2("apna college");
// request.then(()=>{
//     console.log("promise was resolve");
//     console.log(request);
// })
// .catch(() => {
//     console.log("promise was rejected");
//     console.log(request);
// })

savetoDb_2("apna college")
    .then((result) => {
        console.log("promise was resolve");
        console.log("data 1 was saved");
        console.log(result + '\n\n');
        // console.log("\n\n");
        return savetoDb_2("Hello world")
        // .then(() => {
        //     console.log("promise was resolve");
        //     console.log("data 2 was saved");
        // })
        // console.log(request);
    })
    .then((result) => {
        console.log("promise was resolve");
        console.log("data 2 was saved");
        console.log(result, "\n\n");
        return savetoDb_2("shradah khapra");
    })
    .then((result) => {
        console.log("promise was resolve");
        console.log("data 3 was saved");
        console.log(result, '\n\n');
    })
    .catch((error) => {
        console.log("promise was rejected");
        console.log(error, "\n\n");

        // console.log(request);
    })

let h1 = document.querySelector('h1');

// function changeColor(color, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("color was changed");
//         }, delay);
//     });
// }

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        if (color != "") {
            setTimeout(() => {
                h1.style.color = color;
                resolve(`color was successfully changed, color is: ${color} `);
            }, delay);
        } else {
            reject("Wrong color name");
        }
    });
}

changeColor("red", 1000)
    .then((result) => {
        console.log(result);
        return changeColor("yellow", 1000);
    })
    .then((result) => {
        console.log(result);
        return changeColor("", 1000);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
