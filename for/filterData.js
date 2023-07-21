const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = [];
for (const num of numbers) {
  squaredNumbers.push(num * num); //multiplying num with num and pushing square numbers to array
}
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// Filter even numbers
const evenNumbers = [];
for (const num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}
console.log(evenNumbers); // [2, 4]