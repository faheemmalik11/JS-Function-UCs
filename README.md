# JS-Function-UCs

* [Map](#map)
* [Reduce](#reduce)


## Map

Map is a javascript function that accepts a callback as a parameter. Map gives the elements of array as an argument to the callback function. It means if a calback function does some manipulation on its parameter, it will be applied to all the elements of the array on which map is implemented. Moreover, map does not effect the original array. The map returns manipulated elements but the length of array does not change. If we do not return all the elements, it will put undefined instead of it.

1. Implementing functionality all over array

if you want to implement a functionality all over an array without even affecting the original array. You just need to pass a callback function whose functionality you want to implement on the array. It will work like a magic. Let's say you want to implement multiply all the elements of array with two. It can be done easily usings maps.


2. Work with objects

You can refactor objects that are in an array easily using maps. For example, if you want to combine the first and last names of all objects in array. You can do this using arrays in no more than two to three lines.

3. String to array

Map can also be used to change string to an array. For example, if you have a name as a string and you want to store each of letter of the name as an array. You can use map to do this. The map call function will be used and it will be sent two parameters. First one will be string and other would be the each element or letter that would be sent to the new array as a return value.



## Reduce

Reduce is a javascript function that perform a reduce operation on array starting from the lowest index of an array to highest index. It takes a call back function as parameter which accepts two arguments. One is total and other is current value. It means in the first parameter of function it will store the result of the operation being done and in the second parameter, it will take the current value on which operation is going to be performed. In addition to this, call back accepts two additional parameters which are currentIndex and array. Current index is the index of current element while array is the array to which element belongs. There's also another optional parameter that reduce takes which is initial value. If we want to set initial value, we can give it, otherwise it'll take first element of array as initial value. Reduce function does not change the original array and it returns only a single accumulated value that is result. It does not work on empty arrays.



1. Operations

Reduce function can easily perform math operations on an array. For example, if we want to sum the elements of an array, we can use reduce function. What we have to do is just give the parameters sum and number to call back function and return sum between these two parameters. What it will do is that, starting from the beginning of array it will start adding elements until it reaches the end. Lastly, it will return us our sum. Same can be done with subtract and product.

2. Flatten list of arrays

If you have an array of arrays and you want to flatten them to a single array, reduce function can help you to do that. Let's say we got an array of arrays of colors and we want to flatten them to a single array. We just have to perform a single reduce function. We will give it two params, first will be the array in which arrays are merging and second will be the current array which is being merged and our work would be done in about two to three lines.

3. Removing Duplicates From Array

Reduce can also be used to remove duplicates from an array. Let's say we have an array of numbers with duplicated. We will give give two parameter, first one is  accumulated  which would be initialized as an empty array and second is current value in the array of numbers. We will check if the accumulated array contains current value or not. If not it will push current value to it and if it contains it will not. At last it will return accumulated array.


