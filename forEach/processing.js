const temperatures = [28, 30, 32, 27, 29];
const fahrenheitTemperatures = [];

temperatures.forEach(celsius => {
  const fahrenheit = (celsius * 9) / 5 + 32; // changes celsius to fahrenheit
  fahrenheitTemperatures.push(fahrenheit);
});

console.log(fahrenheitTemperatures); 
