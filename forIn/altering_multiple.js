const person = { 
    name: 'Amy', gender: 'female', age: 28 , job: 'engineer', address: '123 Main Street, Suite 330 , Boston' , university: 'Massachusetts Institute of Technology'
}

for (let attribute in person) {
    person[attribute] = person[attribute] + ' adding this'; //adds this str to all values
}

console.log(person);