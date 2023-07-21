const people = [
    { name: 'Amy', gender: 'female', age: 28 },
    { name: 'James', gender: 'male', age: 13 },
    { name: 'Victor', gender: 'male', age: 20 },
    { name: 'David', gender: 'male', age: 28 },
    { name: 'Simon', gender: 'male', age: 30 },
    { name: 'Anna', gender: 'female', age: 21 },
    { name: 'Jane', gender: 'female', age: 17 }
  ];

  const adults = people.filter(people => people.age >= 18); //checks that person's age is greater than or equal to 18
  console.log(adults);