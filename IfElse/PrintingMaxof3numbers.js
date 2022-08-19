let number1 = (Math.floor(Math.random()*10))
console.log(number1)
let number2 = (Math.floor(Math.random()*10))
console.log(number1)
let number3 = (Math.floor(Math.random()*10))
console.log(number1)

let max=0;
let min=0;

if (number2 > max) {
    max = number2;
} else if (number2 < min){
    min = number2;
}

if (number3 > max) {
    max = number3
} else if(number3 < min){
    min = number3;
}

console.log("minimum = ",min);
console.log("maximum = ",max);
