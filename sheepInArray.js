/*

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

*/

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let count = 0
  for(let i = 0; i < arrayOfSheep.length; i++)
    if (arrayOfSheep[i] === true){
   count++
 }
  return count
}

