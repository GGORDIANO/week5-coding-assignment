console.log(`-------------------------- 
Question 1:Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. `)
/*
 * Step 1: Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
 * Step 2: Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
 * Step 3: Use a loop to iterate through the array and calculate the average age.
 */
var ages = [3, 9, 23, 64, 2, 8, 28, 93]

var last = ages[ages.length - 1] //the last index of array
var first = ages[ages.length - ages.length] //the first index of array
var diff = last - first //calculating difference
console.log(`Difference between first and last element is: ${diff}`)

ages.push(20) //pushing a new age to the array

//again calculating the difference

var last = ages[ages.length - 1] //the last index of array

var first = ages[ages.length - ages.length] //the first index of array

var diff = last - first //calculating difference

console.log(`Difference between first and last element is: ${diff}`)



ages.push(20) //pushing a new age to the array

var sum = 0, avg = 0.0

for (var i = 0; i < ages.length; i++) {//running a loop from 0 to the length of the array

sum = sum + ages[i]//adding each age to the sum

}

avg = sum / ages.length//calculating avg

console.log(`The average of elements is: ${avg}`)//printing the average to the console

console.log(`-------------------------- 
Question 2:Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob' `)
/*
 * Step 1:Use a loop to iterate through the array and calculate the average number of letters per name.
 * Step 2: Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
 */
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
//Calculating average letters per name in the names array

sum=0;

for(i=0; i<names.length; i++)

{

sum = sum + names[i].length;

}

console.log("Average letters per name in the names array is : ",sum/names.length);


//Concatenating names

var con= names[0];

for(i=1; i<names.length; i++)

{

con = con.concat(" ",names[i]);

}

console.log("Concatenated names : ",con);

console.log(`-------------------------- 
Question 3:How do you access the last element of any array? `)

console.log("you can access the last element of an array using its index or the length property")

console.log(`-------------------------- 
Question 4:How do you access the first element of any array? `)
console.log("you can use index notation or the shift()")
var array = [1, 2, 3, 4, 5];
var firstElement = array[0];
console.log("index notation:", firstElement);


var array = [1, 2, 3, 4, 5];
var firstElement = array.shift();
console.log("shift:", firstElement); 

console.log(`-------------------------- 
Question 5:Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array. `)

//Storing lengths of each names in the nameLangths array

var nameLengths = [];

for(i=0; i<names.length; i++)

{

nameLengths[i] = names[i].length;

}
console.log(nameLengths);
console.log(`-------------------------- 
Question 6:Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
`)

//Calculating sum of all elements in the nameLengths array

sum=0;

for(i=0; i<nameLengths.length; i++)

{

sum = sum + nameLengths[i];

}

console.log("Sum of all elements in the nameLengths array is : ",sum);



console.log(`-------------------------- 
Question 7:Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello'). `)

//Function to concatenate same word for n times

function concat_n_times(word, n)

{

var con= word;

for(i=1; i<=n; i++)

{

con = con.concat(word);

}

return con;

}

//Printing the concatenated same word for n times using function call

console.log("Concatenated words : ",concat_n_times("Hello", 3));

console.log(`-------------------------- 
Question 8:Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space. `)

//Function to create full name with first name and last name

function fullName(firstName, lastName)

{

return firstName.concat(" ", lastName);

}

//Printing full name using function call

console.log("Full Name : ",fullName("John", "Smith"));


console.log(`-------------------------- 
Question 9:Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100`)

//Function to check the total sum of all the elements is greater than 100 or not
function isSumGreaterThan100(numbers) {
    let sum = numbers
    return sum > 100;
  }
  let myNumbers = [10, 20, 30, 40];
let result = isSumGreaterThan100(myNumbers);
console.log(isSumGreaterThan100 > myNumbers) //Output: true

console.log(`-------------------------- 
Question 10:Write a function that takes an array of numbers and returns the average of all the elements in the array.`)
//Function to calculate average of all elements in a number array

function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0;
    }
    
    let sum = numbers.reduce((acc, cur) => acc + cur, 0);
    let average = sum / numbers.length;
    
    return average;
  }

  const myNumber = [10, 20, 30, 40];
  let average = calculateAverage(myNumber);
  console.log(average);  // Output: 25

console.log(`-------------------------- 
Question 11:Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array`)

//Declaring and initializing two new array

function compareAverages(arr1, arr2) {
    const sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
    const sum2 = arr2.reduce((acc, cur) => acc + cur, 0);
    const average1 = sum1 / arr1.length;
    const average2 = sum2 / arr2.length;
    
    return average1 > average2;
  }

  const array1 = [10, 20, 30, 40];
const array2 = [5, 15, 25, 35];
const results = compareAverages(array1, array2);
console.log(results);  // Output: true

console.log(`-------------------------- 
Question 12:Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`)
//Function willBuyDrink
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
  }
  const hotOutside = true;
const money = 15.75;
const answer = willBuyDrink(hotOutside, money);
console.log(answer);  // Output: true

console.log(`-------------------------- 
Question 13:Create a function of your own that solves a problem. In comments, write what the function does and why you created it.`)

function findUniqueElements(arr) {
    return [...new Set(arr)];
  }

  // The function findUniqueElements takes an array as input and utilizes the Set data structure in JavaScript to remove duplicate elements. It then converts the Set back into an array using the spread operator (...) and returns the resulting array.

  // I created this function because finding the unique elements from an array is a common operation in many programming tasks. By encapsulating this functionality in a reusable function, it becomes easier and more convenient to obtain the unique elements from any given array.