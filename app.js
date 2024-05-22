// Q No1:-  Create an array named fruits that containts th following string elemrnts: "apple" "banana" "mango"
// orange.
var fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits, "fruits");
// Q No2:-  Declare an array named numbers that can contain only number elements and initialize it with
// the values 10,20,30 and 40.
var number = [10, 20, 30, 40];
console.log(number, "number");
// Q No3:-  Access the third element of the fruits array and assign it to a variable named thirdfruit.
var thirdFruit = ["apple", "banana", "mango", "orange"];
console.log(thirdFruit, "thirdFruit");
// Q No4:- Change the second element of the numbers array 25.
var numbers = [10, 20, 25, 40];
console.log("change second element of the number array:", numbers);
// Q No5:-  Add the element "grape" to the end of the fruits array using the method.
fruits.push("grape");
console.log(fruits, "fruits");
// Q No6:- Remove the last element from the fruits array using the method and assign it to avariable
//  named lastFruit.
var Fruits = ["apple", "banana", "mango", "orange"];
fruits.pop();
console.log(fruits, "fruits");
// Q No7:-  Remove the first element frome the fruits array using the method and assign it to a variable 
// named firstFruit.
var firstFruit = ["apple", "banana", "mango", "orange"];
firstFruit.shift();
console.log(firstFruit, "firstFruit");
// Q No8:-  Add the element "Kiwi" to the begining of the fruits array using the method.
var fruit = ["apple", "banana", "mango", "orange"];
fruit.unshift("Kiwi");
console.log(fruit, "fruit");
// Q No9:-  Remove 2 elements from the fruits array starting from index 1 using the method.
fruits.splice(1, 2);
console.log("Removing Elements starting of Index1:", fruits);
// Q No10:- Insert the element "pineapple" and "pear" at index 2 of the fruits array using the method
fruits.splice(2, 0, "pineapple", "pear");
console.log("Inserting Element at Index2:", fruits);
// Q No11:-  Create a new array  named citrusFruits that contains the first two elements of the fruits 
// array using the method.
var citrusFruits = fruits.slice(0, 2);
console.log("First two Elements:", citrusFruits);
// Q No12:-  Create a new array named lastFruits that contains thae last two elements of the fruits 
// array using the method.
var lastTwoFruits = fruits.slice(-2);
console.log("last two Elements:", lastTwoFruits);
