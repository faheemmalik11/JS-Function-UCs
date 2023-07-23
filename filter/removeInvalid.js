const people = [
    { name: 'Amy', gender: 'female', age: 28 },
    { name: 'James', gender: 'male', age: 13 },
    { name: 'Victor', gender: 'male', age: null },
    { name: 'David', gender: 'male', age: 28 },
    { name: 'Simon', gender: 'male', age: undefined },
    { name: 'Anna', gender: 'female', age: 21 },
    { name: 'Jane', gender: 'female', age: NaN }
  ];


const RemovedInvalidPeople = people.filter(person => person.age !== undefined && typeof person.age === 'number' && !isNaN(person.age)); //ensures  person's age is not undefined and is a number and is not a NaN
console.log(RemovedInvalidPeople)