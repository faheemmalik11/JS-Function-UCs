const person = {
    name: "John",
    age: 30,
    occupation: "Developer",
  };
  
  for (const key in person) {
    console.log(key + ": " + person[key]);
  }
  