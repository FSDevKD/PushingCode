/*

This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript/64259be50e9424004bb58d85

*/



function simpleMultiplication(number) {
    if (number % 2 === 0){  // if statement runs to see if the number can divide /2 and check equality

      return number * 8;    // returns number times 8 
    }else{  
      return number * 9;    // else number is times 9
    }
}

