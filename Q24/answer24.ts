// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
console.log('Tests for equality and inequality with strings')
let myname= 'Sameer';

console.log('Is myname == Sameer, I predict True');
console.log(myname=='Sameer');

console.log('Is myname == Asad, I predict False');
console.log(myname!='Sameer');



// • Tests using the lower case function

console.log('Tests using the lower case function')

let lower_text= 'Muhammad Sameer';

console.log("Does the lowercase text contain'muhammad' I predict True");
console.log(lower_text.toLowerCase().indexOf('muhammad')!==-1);

console.log("Does the lowercase text contain'sameer' I predict True");
console.log(lower_text.toLowerCase().indexOf('sameer')!==-1);





// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let x: number=20;
let y: number=30;
console.log('x===y , I predict True',x===y)
console.log('x!==y ,I predict false',x!==y)

console.log('x>y , I predict True',x>y)
console.log('x<y ,I predict false',x<y)

console.log('x>=y , I predict True',x>=y)
console.log('x<=y ,I predict false',x<=y)
// • Tests using "and" and "or" operators
let age=18;
let cnic=true;
console.log('User can vote if its age grater than 18 and have CNIC: ' ,age>18 && cnic);
console.log('User can not vote if its age  than 18 or not CNIC: ' ,age<18 || !cnic);


// • Test whether an item is in a array
 
let car: string[]=['Cultus', 'Mehran', 'Suzuki', 'Alto', 'City', 'chenhan'];
console.log('Car Arary! ',car);
console.log('Is "Suzuki" is exist in car Array? I predict True');
console.log(car.indexOf('Suzuki')!=-1);


// • Test whether an item is not in a array
console.log('Is "Vigo" is NOT exist in car Array? I predict fasle');
console.log(car.indexOf('Vigo')!=-1);