
// Declared 5 variables

let khadir = "Name"; // variables
let house = "Home"; //variables
let truck = "Dodge"; //variables
let job = "Rich"; //variables
let fit = "Nice"; //variables 

house = "Mansion"; // reassigned variable

let person = ["Job","Location","Pay"]


for ( let i = 0; i < num; i++ ) {
    console.log(i)
}

for ( let i = -; i < num; oi++ ){
    console.log(i)
}

for ( let i = 0; i < num; i++){
    console.log(i)
}

for ( let i = 0; i < num; i++ ){
    console.log(i)
}

for ( let i = 0; i < num; i++ ){
    console.log(i)
}

for ( let i = 0; i < num; i++ ){
    console.log(i)
}

let stopwatch = {}

stopwatch.currentTime = 12

stopwatch.tellTime = function(time){
    console.log("the current time is ${time}")
}

stopwatch.tellTime(stopwatch.currentTime)

// Objects 

Constructor and classes 

class MakeCar {
    constructor(carMake, carModel, carColor, numOfdoors){
        this.make = carMake;
        this.model = carModel;
        this.carColor = carColor;
        this.numOfdoors = numOfdoors;

    }
    
}


function greet(name) {
  return `Hello, ${name} how are you doing today?`; // returns string with name temp literal  
}

function greet(name){
    return `Hello, ${name} how are you doing today?`;
}

function greet(name){
    return `Hello, ${name} how are you doing today?`;
}

function greet(name){
    return `Hello, ${name} how are you doing today?`;
}

function greet(name){
    return `Hello, ${name} how are you doing today?`;
}

function greet(name){
    return `Hewllo, ${name} how  are you doing today?`; // returns string with name temp literal
}

function greet(name){
    return `hello, ${name} how are you doing today?`;
}

function greet(name){
    return ` Hello, ${name} How are you doing today?`;
}

function greet(name){
    return `hello, ${name} How are you doing today?`;
}

function greet(name){
    return `Hello, ${name} how are you doing today?`;
}

function hoopCount (n) {
   if(n >= 10){
     return "Great, now move on to tricks"
   } else {
     return "Keep at it until you get it"
   }
}

function hoopCount (n){
    if ( n >= 10){
        return "Great, now move on to tricks";
    } else {
        return "Keep at it until you get it";
    }
}

function hoopCount(n){
    if (n >= 10){
        return "Great, now move on to tricks";
    } else {
        return "Keep at it until you get it"
    }
}

function hoopCount(n){
    if(n >= 10){
        return "Great, now move on to tricks";
    } else {
        return "Keep at it until you get it";
    }
}

function hoopCount(n){
    if( n >= 10){
        return "Great now move on to tricks";
    } else {
        return "Keep at it until you get it";
    }
}

function hoopCount(n){
    if( n >= 10){
        return "Great, now move on to tricks";
    } else {
        return "Keep at it until you get it";
    }
}

function hoopCount(n){
    if (n >= 10){
        return "Great, now move on to tricks";
    } else {
        return "Keep at it until you get it";
    }
}

function hoopCount(n){
    if( n >= 10){
        return "Great, now move on to tricks";
   } else {
        return "Keep at it until you get it";
   }
}

function hoopCount(n){
    if ( n >= 10){
        return "Great, now move on to tricks";
    } else {
        return "Keep at it until you get it";
    }
}

function hoopCount(n){
    if(n >= 10){
        return "Great, now move on to tricks";
    } else{
        return "Keep at it until you get it";
    }
}

function duplicateCount(text){
  const textCount ={};
  const lowerCase = text.toLowerCase();
  for( let i = 0; i < lowerCase.length; i++){
    const char = lowerCase.charAt(i);
    if(textCount[char]){
      textCount[char]++;
    } else {
      textCount[char] = 1;
    }
  }
  let count = 0;
  for(const char in textCount){
    if(textCount[char] > 1){
      count++;
    }
  }
  return count;
}

function duplicateCount(text){
    const textCount = {};
    const lowerCase= text.toLowerCase();

    for( let i = 0; i < lowerCase.length; i++){
        const char = lowerCase.charAt(i);
        if(textCount[char]){
            textCount[char]++;
        } else {
            textCount[char]= 1
        }
    }

    let count = 0; 
    for( const char in textCount){
        if(textCount[char]> 1){
            count++
        }
    }

    return count 
}

function greet(name){
    //your code here
    return `Hello, ${name} how are you doing today?`
  }

function greet(name){
    return `Hello, ${name} how are you doing today?`
}

function greet(name){
    return `Hello, ${name} how are you doing today?`
}

function greet(name){
    return `Hello, ${name} how are you doing today?`
}

function greet(name){
    return `Hello, ${name} how are you doing today?`
}

function hoopCount (n) {
   //your code goes here    
  if( n >= 10){
    return "Great, now move on to tricks"
  } else {
    return "Keep at it until you get it"
  }
}

function hoopCount(n){
    if (n >= 10){
        return "Great, now move on to tricks"
    } else {
        return "Keep at it until you get it"
    }
}

function hoopCount(n){
    if (n >= 10){
        return "Great, now move on to tricks"
    } else {
        return "Keep at it until you get it"
    }
}

function hoopCount(n){
    if ( n >= 10){
        return "Great, now move on to tricks"
    } else {
        return "Keep at it until you get it"
    }
}

function hoopCount(n){
    if ( n >= 10){
        return "Great, now move on to tricks"
    } else {
        return "Keep at it until you get it"
    }
}

function makeUpperCase(str) {
  // Code here
  return str.toUpperCase();
}

function makeUpperCase(str){
    return str.toUpperCase();
}

function makeUpperCase(str){
    return str.toUpperCase();
}

function makeUpperCase(str){
    return str.toUpperCase();
}

function makeUpperCase(str){
    return str.toUpperCase();
}

function arrayDiff(a, b) {
  return a.filter((x) => !b.includes(x));
}

function arrayDiff(a,b){
    return a.filter((x) => !b.includes(x));
}

function arrayDiff(a,b){

    return a.filter((x) => !b.includes(x));
}

function arrayDiff(a,b){
    return a.filter((x)=> !b.includes(x));
}

function arrayDiff(a,b){
    return a.filter((x)=> !b.includes(x));
}

var greet = function(name) {
const cap = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()

return `Hello ${cap}!`
};

var greet = function(name){
    const cap = name.charAt(0).toUpperCase()+ name.slice(1).toLowerCase()
    return ` Hello ${cap}!`
}

var greet = function(name){
    const cap = name.charAt(0).toUpperCase()+name.slice(1).toLowerCase()
    return `Hello ${cap}!`
}

var greet = function(name){
    const cap = name.charAt(0).toUpperCase()+ name.slice(1).toLowerCase()
    return `Hello ${cap}!`
}

var greet = function(name){
    const cap = name.charAt(0).toUpperCase()+ name.slice(1).toLowerCase()
    return `hello ${cap}!`
}

function countSheep(arrayOfSheep){
    let count = 0
    for(let i=0; i < arrayOfSheep.length; i++)
        if(arrayOfSheep[i] === true){
            count++;
        }
    return count;
}

function countSheep(arrayOfSheep){
    let count = 0;
    for(let i=0; i< arrayOfSheep.length; i++)
        if(arrayOfSheep[i] === true){
            count++
        }
    return count;
}

function countSheep(arrayOfSheep){
    let count=0; 
        for(let i=0; i < arrayOfSheep.length; i++)
        if(arrayOfSheep[i] === true){
            count++
        }
    return count;
}

function countSheep(arrayOfSheep){
    let count=0;
    for(let i=0; i<arrayOfSheep.length; i++)
    if(arrayOfSheep[i] === true){
        count++
    }
    return count;
}

function countSheep(arrayOfSheep){
    let count = 0;
    for(let i=0; i < arrayOfSheep.length; i++)
        if(arrayOfSheep[i] === true){
            count++
        }
    return count;
}