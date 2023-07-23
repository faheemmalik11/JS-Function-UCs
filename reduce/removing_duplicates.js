const numbers = [1, 5, 6, 5, 7, 1, 6, 8, 9, 7];
const unique_numbers = numbers.reduce((accumulated, currentValue) => {
    if (!accumulated.includes(currentValue)) { // checks if accumulated array has current value
        accumulated.push(currentValue);  // adds current value to array
    }
    return accumulated;  //returns accumulated array
},[]);  //initialized an empty array for accumulated

console.log(unique_numbers);