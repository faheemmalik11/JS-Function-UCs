const colors = [
  ['green', 'red', 'red'], 
  ['yellow', 'red'], 
  ['yellow', 'green', 'green']
];

const flattened_colors = colors.reduce((accumulated, array) => accumulated.concat(array)); //concat method combines two or more arrays
console.log(flattened_colors);