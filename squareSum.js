/* 

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 

https://www.codewars.com/kata/515e271a311df0350d00000f/javascript

*/

function squareSum(numbers){

  let sum = 0 // declare sum 
  
  for(let i = 0; i < numbers.length; i++){ // declare loop for number lenth
    sum += numbers[i] ** 2  // numbers * x2 for square and adds sum together. 
  }
  return sum; // returns total sum of numbers. 
}

