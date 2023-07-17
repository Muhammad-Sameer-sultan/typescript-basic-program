// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
var favorite_fruits = ['banana', 'mango', 'grapes'];
for (var i = 0; i < favorite_fruits.length; i++) {
    console.log("My favorite fruit is ".concat(favorite_fruits[i]));
}
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (favorite_fruits.indexOf('banana') !== -1) {
    console.log("You really like bananas!");
}
if (favorite_fruits.indexOf('manog') !== -1) {
    console.log("You not really like mango!");
}
if (favorite_fruits.indexOf('grapes') !== -1) {
    console.log("You really like grapes!");
}
if (favorite_fruits.indexOf('mango') !== -1) {
    console.log("You really like mango!");
}
if (favorite_fruits.indexOf('cherry') !== -1) {
    console.log("You really like cherry!");
}
