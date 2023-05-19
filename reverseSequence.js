/* 

Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

*/

const reverseSeq = n => {

    let result = [];    // declare array in variable

    for(let i = n; i>=1; i--){      // for loop runs in reverse order.

      result.push(i);   // pushes to new array.
    }
     return result         /// returns reselts 
  };