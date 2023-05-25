let numberOfPrime = 10;
let countOfPrime = 0;
let isPrime = true;
// let number = 2;

let number = 2;
while (countOfPrime < numberOfPrime) {
    isPrime = true;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime == true) {
        console.log(number);
        countOfPrime++;
    }
}