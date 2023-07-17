// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
let usernames: string[]=['asad','sameer','kinza','admin','ayshia'];
 for (const user of usernames) {
    console.log(`${user}! Greetings you are welcome to our websites`);
 }

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
for (const user of usernames) {
    if(user==='admin'){

        console.log(`${user}! Hello admin, would you like to see a status report`);
    }
    else{

        console.log(`${user}! Greetings you are welcome to our websites`);
    }
 }

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.