// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var person_name = 'muhammad sameer sultan';
console.log(person_name.toUpperCase());
console.log(person_name.toLowerCase());
console.log(toTitleCase(person_name));
function toTitleCase(str) {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
        return match.toUpperCase();
    });
}
