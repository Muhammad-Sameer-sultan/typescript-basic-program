// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magician_names:string[]=['Sameer','Asghar','kinza','Noman'];
 
function show_magicians(magicians)
{
    for (const magician of magicians) {
        console.log(magician);
    }
}

show_magicians(magician_names);