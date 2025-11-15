
let arr = [4, 45, 6, 44, 33, 45, 6, 43, 65, 45, 77, 74, 25, 67];
let num = 30;

function findLargestnum(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}
findLargestnum(arr, num);


let country = ["Australia", "Germany", "United States of America", "India", "Russia", "China", "New Zealand"];
function findLongestCountry(country) {
    let longestCountry = "";
    for (let i = 0; i < country.length; i++) {
        if (country[i].length > longestCountry.length) {
            longestCountry = country[i];
        }
    }
    return longestCountry;
}

let ans = findLongestCountry(country);
console.log(ans); 