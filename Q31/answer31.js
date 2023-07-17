// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
var usernames = ['asad', 'sameer', 'kinza', 'admin', 'ayshia'];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var user = usernames_1[_i];
    var remove_user = usernames.pop();
    console.log("".concat(remove_user, " is removed form list"));
}
// • Remove all of the usernames from your array, and make sure the correct message is printed.
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
