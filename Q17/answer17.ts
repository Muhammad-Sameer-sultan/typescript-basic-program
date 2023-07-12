// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


// print guest list
console.log(`Guest list to Invite at dinner\n`);
let guestList: string[]=['Saad','sameer',"kinza","hafsa"];

for(let i=0 ; i<guestList.length; i++){
    console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. Please join us for a memorable moment.\n`);
}

// remove guest can't dinner pritn gest who can't dinner and add new guest
let removeGuest: number = 2;
let guestCantDinner: string=guestList[removeGuest];
let addNewGuest: string= 'mahnoor';
guestList[removeGuest]=addNewGuest;

console.log(`\nsome changes in guest list ${guestCantDinner} is not at dinner a new list is updated\n`);


for(let i=0 ; i<guestList.length; i++){
    console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. Please join us for a memorable moment.`);
}

// adding more guest arrange a big table for dinner add guest in first , last and middle
console.log(`\nGreat news arranging a big dinner some new guest are invited \n`);

guestList.unshift('Dua');
guestList.push('Mahnoor');
guestList.splice(Math.floor(guestList.length/2),0,'Hooriya');
for(let i=0 ; i<guestList.length; i++){
    console.log(`Dear ${guestList[i]}, you are invite to dinner with big table arrangement.`);
    
}

// remove guest form list until 2 guest remain

console.log(`Only two guest invited to Dinner. Due to dinner can't arrive and shortage of arrangement we short the invited list`);

while (guestList.length>2) {
    let removeGuest= guestList.pop();
    console.log(`Dear ${removeGuest}, sorry you can’t invite them to dinner because table won't arrived.`);
    
}
// print a message to each of the two people still on your list, letting them know they’re still invited
console.log(`Only two guest invited to Dinner which are`);

for (let i = 0; i < guestList.length; i++) {
    console.warn(`Dear ${guestList[i]}, you are still invited to Dinner}`);
    
}

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

console.log( 'we decided to remove all guest form the list');

while (guestList.length>0) {
    let guestremove=guestList.pop();
    console.warn(guestremove);
    
}
// print an empty list
console.log(guestList);
