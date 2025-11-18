let url = "http://universities.hipolabs.com/search?name="

let search = document.querySelector("#searchBtn");
search.addEventListener("click", async () => {
    console.log("Search Button Clicked");

    let country = document.querySelector("#inpt").value;
    let clgArr = await getColleges(country);
    console.log(clgArr);
    show(clgArr);
})

function show(colleges) {
    let list = document.querySelector(".list");
    list.innerText = "";
    for (clg of colleges) {
        console.log(clg.name);
        let li = document.createElement("li");
        li.innerText = clg.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        // console.log(res.data);
        return res.data;

    } catch (err) {
        console.log(err);
    }
} 

let reuslt = getColleges(india);
console.log("colleges are" , reuslt);
