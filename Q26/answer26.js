// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
var alien_color = 'Green';
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
console.log('\nIn this version the condition will be True and print message');
if (alien_color === 'Green') {
    console.log('Congragulations! you just Earned 5 points');
}
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
console.log('\nIn this version the condition will be not  True and print message');
if (alien_color !== 'yellow') {
    console.log('Congragulations! you just Earned 10 points');
}
// • Write one version of this program that runs the if block and another that runs the else block.
console.log('In this version the in both conditon print different message');
if (alien_color === 'Yellow') {
    console.log('Congragulations! you just Earned 15 points');
}
else {
    console.log('Congragulations! you just Earned 10 points');
}
