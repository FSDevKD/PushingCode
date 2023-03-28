/*

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

https://www.codewars.com/kata/517abf86da9663f1d2000003/solutions/javascript

*/

function toCamelCase(up){

  let words = up.replace(/[-_]/g," ").split(" ");   // Replace allows you to target and remove the whitespace the hypen and underscore & split however splits the words into a array

  for( let i = 1; i < words.length; i++){   // we loop the words to capitalize the first letter in each word

    words[i] = words[i][0].toUpperCase() + words[i].slice(1);   // after first word is capitalized they are linked together

  }

  return words.join(""); // returns joined words

}