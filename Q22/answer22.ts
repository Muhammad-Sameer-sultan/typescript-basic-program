// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let numberlist:number[]=[1,2,3,4,5,6,7,8];
console.log('Not received index error', numberlist[3]);

console.log('Array index error recevied',numberlist[12]);
numberlist[12]=9;

console.log('Fixed Array index error ',numberlist[12]);
console.log('Array ',numberlist);

