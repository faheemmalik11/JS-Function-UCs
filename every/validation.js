const formInputs = ['John', 'Doe', 'johndoe@example.com', '12345'];
const isFormValid = formInputs.every(input => input.trim() !== ''); // removes the unecessar characters from the input and checks if it is empty or not
console.log(isFormValid); // true
