# JS-Function-UCs

* [Map](#map)


## Map

Map is a javascript function that accepts a callback as a parameter. Map gives the elements of array as an argument to the callback function. It means if a calback function does some manipulation on its parameter, it will be applied to all the elements of the array on which map is implemented. Moreover, map does not effect the original array. The map returns manipulated elements but the length of array does not change. If we do not return all the elements, it will put undefined instead of it.

1. Implementing functionality all over array

if you want to implement a functionality all over an array without even affecting the original array. You just need to pass a callback function whose functionality you want to implement on the array. It will work like a magic. Let's say you want to implement multiply all the elements of array with two. It can be done easily usings maps.


2. Work with objects

You can refactor objects that are in an array easily using maps. For example, if you want to combine the first and last names of all objects in array. You can do this using arrays in no more than two to three lines.

3. String to array

Map can also be used to change string to an array. For example, if you have a name as a string and you want to store each of letter of the name as an array. You can use map to do this. The map call function will be used and it will be sent two parameters. First one will be string and other would be the each element or letter that would be sent to the new array as a return value.





