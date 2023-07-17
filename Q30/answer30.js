// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
var usernames = ['asad', 'sameer', 'kinza', 'admin', 'ayshia'];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var user = usernames_1[_i];
    console.log("".concat(user, "! Greetings you are welcome to our websites"));
}
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
for (var _a = 0, usernames_2 = usernames; _a < usernames_2.length; _a++) {
    var user = usernames_2[_a];
    if (user === 'admin') {
        console.log("".concat(user, "! Hello admin, would you like to see a status report"));
    }
    else {
        console.log("".concat(user, "! Greetings you are welcome to our websites"));
    }
}
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
