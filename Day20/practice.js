const arrayAverage = arr => {
    let sum= 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}

console.log(arrayAverage([1,2,3,4,5])); // 3
console.log(arrayAverage([10,20,30])); // 20

const numEven = num =>{
    if(num%2==0){
        return true;
    }
}