info = [
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
]

full_name_array = info.map((obj)=>{
    names = obj.firstName  +" "+ obj.lastName;
    return names
})

console.log(full_name_array)