// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
 
let favorite_pizza=['Tikka','Tandoori','Fajita'];
console.log('The three kind of pizza that i would really like:')
for (const pizza of favorite_pizza) {
    console.log(pizza);
    
}

console.log('\nWhy I like these pizza');
for (const pizza of favorite_pizza) {
    console.log(`I like ${pizza} pizza`);
    
}


console.log("\nI really love pizza!");

// Additional lines about the kinds of pizza you like
console.log("Tikka pizza is my go-to for its rich flavor and savory toppings.");
console.log("Tandoori pizza's simplicity with fresh tomatoes and basil is delightful.");
console.log("Fajita pizza's combination of smoky barbecue sauce and tender chicken is amazing.");