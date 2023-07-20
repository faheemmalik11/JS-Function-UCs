employee = "johnDoe"
const map = Array.prototype.map 
const employee_name_letter = map.call(employee,letter=>{
    return `${letter.toLowerCase()}`
})

console.log(employee_name_letter)