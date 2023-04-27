/*

Your task, is to create N×N multiplication table, of size provided in parameter.

https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript


*/


multiplicationTable = function(size) {
   let table = [];
  for (let i = 1; i <= size; i++) {
    let row = [];
    for (let j = 1; j <= size; j++) {
      row.push(i * j);
    }
    table.push(row);
  }
  return table;
}

