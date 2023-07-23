const numbers = [12,32,54,21,24,67,26];

const areIntegers = numbers.every(number =>   Number.isInteger(number)); //checks if number is an integer

console.log(areIntegers);