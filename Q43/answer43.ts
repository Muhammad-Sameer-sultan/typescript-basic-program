
let magician_names:string[]=['Rafay','Sameer','Asghar','kinza','Noman'];
 
function make_great(magicians)
{
    let greatMagician:string []=[];
    for (let i = 0; i < magician_names.length; i++) {
        greatMagician.push(magician_names[i].concat('the Great!'));
        
    }
    return greatMagician;
}
 
function show_magicians(magicians){
    for (const magician of magicians) {
        console.log(magician);
    }
}


show_magicians(magician_names);
show_magicians(make_great(magician_names));