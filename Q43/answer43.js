var magician_names = ['Rafay', 'Sameer', 'Asghar', 'kinza', 'Noman'];
function make_great(magicians) {
    var greatMagician = [];
    for (var i = 0; i < magician_names.length; i++) {
        greatMagician.push(magician_names[i].concat('the Great!'));
    }
    return greatMagician;
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
;
show_magicians(make_great(magician_names));
show_magicians(magician_names);
