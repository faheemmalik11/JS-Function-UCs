# JS-Function-UCs

* [Map](#map)
* [Reduce](#reduce)
* [Filter](#filter)
* [For In Loop](#for-in-loop)
* [For Of Loop](#for-of-loop)
* [For Loop](#for-loop)
* [Every](#every)

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


## Filter 

Filter is used to check the elements of an array based on a function which have a condition. So, if the elements of the array fulfill that condition, they would be returned otherwise, they will not be returned. Filter accepts a function which accepts a currentValue parameter, an optional index parameter and another optional array parameter. Filter does not changes the original array.

1. Removing invalid elements from the array

The most common usage of filter is to remove invalid elements from the array. We define a condition on the basis of which we remove the invalid elements from the array. Like, if we an array of person objects. and person have name and age. So, we will check for only those persons who does not have undefined, null or NaN values in their age and we will have a filtered array of people.

2. Filter an array

Another common use for filter is obviously to filter the arrays. Let's say we have an array of people with multiple ages some greater than 18 and some lower than 18. We want only those people who are adults, meaning 18 or greater. So, we will perform a fiter operation on people with a condition to return only those people whose age are greater or equal to 18.

3.  Have a reference that includes only specific property type

We can also filter an array of objects to only include those with a specific property value. Let's say you are building an eCommerce store, and you want to display products that are in specific categories, you can use the filter method. Also, you can sort company data of their employees according to specific departments.


## For In Loop

for in iterates over properties of objects while in array it iterates over indexes. Which means is that in an object, we have keys of an object in for in loop. so if there's an object person with name:'John' , age:20. My for in loop on this persone will first iterate over name then age. While if i have an array it will loop over it's indexes. If we change some value in for loop of an object or array, it will be changed in the original object or array. It returns all the properties in an array or object.

1. Search 

We can use for in loop to perform a search operation on the properties of an object. For example, In a large data object, if i want to know if a property exist in the object or not, we can use the in to check for it. In applies the same concept as for in loop.

2. Add something to multiple properties at once

Let's suppose you want to add str to all the values of an object. It will be too difficult to do this manually. Instead, you can use for in loop to add it to all the values of attributes of an object by writing one line only.

3. Iterating over object properties

We can use for in loop to iterate over object properties. It is very easy to do with for in loop. You just have to declare a key and give object over to which we have to iterate and it will be performed.


## For Of Loop

In JavaScript, the forof loop is used to iterate over the elements of an iterable object, such as arrays, strings, sets, maps, and other data structures that implement the iterable protocol. Unlike the forin loop, which iterates over object keys, the forof loop provides a simpler and more concise way to work with arrays, objects, strings, sets, and maps.


1. String Iteration

For of loops can be used to iterate over a string. Many of the loops do not iterate over a string but for of loop provides support for it. We can iterate over a string and we may do something in the loop. Maybe, define a condition for specific iteration.


2. Array Iteration

Another use case of for of loop is string iteration. We can also use for of loop to perform an iteration over an array. Unlike, for in loop we do not have to deal with the indices od the array in for off loop.

3. Set iteration

A Set is a collection of unique values, meaning each element can only appear once in the Set. The for of loop allows you to iterate directly over the elements of a Set in the order they were inserted. Let's say we create a Set called uniqueNumbers with five unique values. The for of loop iterates over the elements of the Set, providing each unique value in the order they were added.


## For Loop

The for loop in JavaScript is a control flow statement used to execute a block of code repeatedly based on a specified condition. It consists of three parts: initialization, condition, and iteration. The initialization sets up a loop control variable or initializes variables used in the loop, the condition is checked before each iteration to determine if the loop should continue, and the iteration updates the loop control variable after each iteration. The loop's block of code executes repeatedly as long as the condition remains true. The for loop is commonly uses for tasks such as iterating over arrays, generating sequences of numbers, and performing repeated actions.

1. Working with multi-dimensional arrays

You can use nested for loops to work with multi-dimensional arrays or perform complex iterations. It is difficult to deal with multi dimensional arrays. So, we have for loop to make it easy for us. We can just perform nested for loops to iterate over the complex multi-dimensional arrays.
 
2. Performing repeated Tasks

Let's say you have to perform a tasks repeatedy. For exmaple, you want to write iteration 1 to iteration 10. One case could be to write it manually but that would take a lot of effort and who know when it becomes million from 10. So, we use for loop to do thos for us we just have to initialize a variable define a conditon and increment the variable with each loop and we do it using two lines.


3. Data manipulation and filtering

For loops can also be used to filter and manipulate data. For example, let's say you have an array of numbers and you want to square them. It is easy to do with for loop as you can just multiply each element by itself and made a new array. 


## every

every is a javascript function that accepts a function in its parameter which is executed for every element of the array. Every function returns a true or false statement. If the function  returns true for every element of the array the every function returns true. But if the function returns false for even one element of the array, every function returns false. Every function does not change the original array and it does not work on empty arrays.


1. Check a condition

We can check a condition for all the elements of the array. For example, if i want to check that if an array has all the integer elements or not. I can check this using every function. I just have to define a condition in function to check integer and we will be able to find out if all the elements of the array are integers or not.

2. Validation

We can also use every function to perform validation. Let's say you have made a form and now you want to ensure that every input coming to it is a valid input so you define an every function that ensures the validation of each input.

3. Permission

every() can be used to check all the required permissions. Let's say a you have defined the required permission as read, write and now a user comes with permissions read, write and delete. SO now every() would check if user has the required permissions and return true if he/she has the required permissions.