

const max = prompt("Enter the maximum number");
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while (true) {
    if (guess == "quit") {
        console.log("You are quit the game");
        break;
    }
    if (guess == random) {
        console.log(` Congrats..! Your guess is ${guess} correct `);
        break;
    }
    else if (guess < random) {
        console.log(`Hint : Ohh!..Your guess "${guess}" is low, Please try again`);
        guess = prompt("guess the number");
    }
    else if (guess > random) {
        console.log(`Hint : Ohh!..Your guess "${guess}" is high, Please try again`);
        guess = prompt("guess the number");
    }
    else {
        console.log(`Ohh!..Your guess "${guess}" is incorrect, Please try again`);
        guess = prompt("guess the number");
    }
}