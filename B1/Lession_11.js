// Bài 11: Tính S(n) = 1 + 1.2 + 1.2.3 + … + 1.2.3….N

// let n = 5;
// let total = 0;
// let factorial = 1;
// for (let i = 1; i <= n; i++) { //i = 3
//     factorial = 1;
//     for (let j = 1; j <= i; j++) {// j = 1 -> 3
//         factorial = factorial * j;
//     }
//     total = total + factorial;
// }

// console.log(total)

// Bài 12: Tính S(n) = x + x^2 + x^3 + … + x^n

console.log(7 + 7 ** 2 + 7 ** 3 + 7 ** 4 + 7 ** 5);
let n = 5;
let x = 7;
let total = 0;
let power = 1;
for (let i = 1; i <= n; i++) {
    power = 1;
    for (let j = 1; j <= i; j++) {
        power = power * x
    }
    total += power
}

console.log(total);