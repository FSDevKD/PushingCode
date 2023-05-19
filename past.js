/*

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:

h = 0
m = 1
s = 1

result = 61000

function past(h, m, s){
  //#Happy Coding! ^_^
}

*/

function past(h, m, s){
  //#Happy Coding! ^_^
   // 60s = 1m 
    // 60m = 1hr
  let sMs = s * 1000;
  let mMs = m * 60 * 1000;
  let hMs = h * 60 * 60 * 1000;
  
  let total = sMs + mMs + hMs;
  
  return total;
}