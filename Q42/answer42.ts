// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magician_names:string[]=['Rafay','Sameer','Asghar','kinza','Noman'];
 
function make_great(magicians)
{
    for (let i = 0; i < magician_names.length; i++) {
        magician_names.splice(i,1,`${magician_names[i]} The Great`);
        
    }
}
 
function show_magicians(magicians){
    for (const magician of magicians) {
        console.log(magician);
    }
}

make_great(magician_names);
show_magicians(magician_names);