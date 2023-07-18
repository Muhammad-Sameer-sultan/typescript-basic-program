// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.let 
var current_users = ['Asad', 'Aiza', 'saad', 'Qasim', 'li', 'kinza'];
var new_users = ['asad', 'saad', 'Kinza', 'sarah', 'qasim', 'Ramsha', 'Ali', 'Rafay'];
var _loop_1 = function (username) {
    var Exist = current_users.some(function (current_name) {
        return current_name.toLocaleLowerCase() === username.toLocaleLowerCase();
    });
    if (Exist) {
        console.log("you will need to enter a new username. The name ".concat(username, " is alredy exist"));
    }
    else {
        console.log("The ".concat(username, " username is available  "));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var username = new_users_1[_i];
    _loop_1(username);
}
// for (let i = 0; i < new_users.length; i++) {
//     if(current_users.indexOf(new_users[i])!==-1){
//     }
//     else{
//     }
// }
