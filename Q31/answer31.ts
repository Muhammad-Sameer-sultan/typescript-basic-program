// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
let usernames: string[]=['asad','sameer','kinza','admin','ayshia'];

while(usernames.length>0){
    let remove_user= usernames.pop();
    console.log(`${remove_user} is removed form user list`);
    
}


// • Remove all of the usernames from your array, and make sure the correct message is printed.
if(usernames.length===0){
   console.log(`We need to find some users!`)
}