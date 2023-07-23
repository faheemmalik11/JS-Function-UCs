const person_info = [
    {
        id: 1,
        firstName: "Magic",
        lastName: "Johnson"
      }, {
        id: 2,
        firstName: "Kobe",
        lastName: "Bryant"
      }, {
        id: 3,
        firstName: "Lebron",
        lastName: "James"
      }, {
        id: 4,
        firstName: "Kareem",
        lastName: "Abdul-Jabbar"
      }, {
        id: 5,
        firstName: "Shaquille",
        lastName: "O’Neal"
      }
] // initializing array of objects

const full_name_array = person_info.map(info => {   //sending each object as an argument to callback
   const full_name = info.firstName  +" "+ info.lastName; //merging first and last names of objects together
    return full_name  // return full name
});

console.log(full_name_array);