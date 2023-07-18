// Animals: Think of at least three different animals that have a common 
// characteristic. Store the names of these animals in a list, and then use a for loop
//  to print out the name of each animal. • Modify your program to print a statement 
//  about each animal, such as A dog would make a great pet.
//   • Add a line at the end of your program stating what these animals have in common. 
//   You could print a sentence such as Any of these animals would make a great pet!
var favorite_animals = ['dog', 'cat', 'rabit'];
for (var _i = 0, favorite_animals_1 = favorite_animals; _i < favorite_animals_1.length; _i++) {
    var animal = favorite_animals_1[_i];
    console.log(animal);
}
for (var _a = 0, favorite_animals_2 = favorite_animals; _a < favorite_animals_2.length; _a++) {
    var animal = favorite_animals_2[_a];
    console.log("A ".concat(animal, " would make a great pet"));
}
console.log('these animals would make a great pet!');
