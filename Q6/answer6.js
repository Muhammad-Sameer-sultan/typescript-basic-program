// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var person_name = "\t Muhammad Sameer \t sultan\n";
console.log("name with white spaces: \"".concat(person_name, "\""));
var stipped_name = person_name.trim();
console.log("person name without whitespaces: \"".concat(stipped_name, "\""));
