//  numbers in js

const score = 400
// console.log(score);

// above is and overrated version to define numbers in js

const balance = new Number(100)
// console.log(balance);

// above is new version de define numbers in js
// it also is user friendly 


// console.log(balance.toString().length);
// console.log(typeof balance);
// console.log(balance.toFixed(1));

const hundred = 123.8966
// console.log(hundred.toPrecision(4));

const otherNumber = 1000000
// console.log(otherNumber.toLocaleString('en-IN'));





 //                                    MATH IN JS 

//  console.log(Math);
//  console.log(Math.abs(4));

// console.log(Math.round(4.4));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.5));

// console.log(Math.min(2,4,3,5,6,9));
// console.log(Math.max(2,4,3,5,6,9));


// console.log((Math.random()*10) + 1);
// console.log(Math.floor((Math.random()*10) + 1));

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min +1) + min));

