// let jsonRes = '{"fact":"A cats normal pulse is 140-240 beats per minute, with an average of 195.","length":73}'
// console.log(jsonRes);
// // console.log(jsonRes.fact);
// let validRes = JSON.parse(jsonRes);
// console.log(validRes);
// console.log(validRes.fact);
// console.log(validRes.length);

// let studentInfo = {
//     name: "Ravi",
//     age: 21,
//     college: "Apna College"
// }
// console.log("JSON Data : " + JSON.stringify(studentInfo));


let url = "https://catfact.ninja/fact";
fetch(url)
    .then((res) => {
        // console.log(res);
        return res.json();
    })
    .then((data) => {
        // console.log(data);
        console.log(data.fact);
        return fetch(url);
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        // console.log(data);
        console.log(data.fact);
    })
    .catch((err) => {
        console.log(err);
    });

    async function getFact(){
        let res = await fetch(url);
        let data = await res.json();
        console.log("Data-3 : ", data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log("Data-4 : ", data2.fact);
    }
    getFact();