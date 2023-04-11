/*


Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd


*/

function paperwork(n, m) {  // function 

    if( n < 0 || m < 0 ){   // checks to see if anything is negative

      return 0; // returns 0 if negative

    } else {

      return n * m; // figures out how much paper is needed

    }
    
  }