const employee = "johnDoe";
const map = Array.prototype.map; 
// call: it allows you to set this value for .map eg: employee.map. So, we use it to pass string as this to map and second value is value going to be passedd to function 
const employee_name_letter = map.call(employee, letter => `${letter.toLowerCase()}`); // passing employee as this value to map and each letter of string employee is passed to callabck who return it after converting it to lower case

console.log(employee_name_letter);