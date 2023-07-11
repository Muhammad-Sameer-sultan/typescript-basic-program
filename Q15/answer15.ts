
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.


let guestList: string[]=['Saad','sameer',"muhammad","Ali","asad",'saima',"kinza","hafsa"];

for(let i=0 ; i<guestList.length; i++){
    console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. Please join us for a memorable moment.`);
}


let removeGuest: number = 3;
let guestCantDinner: string=guestList[removeGuest];
let addNewGuest: string= 'mahnoor';

console.log(`\nsome changes in guest list ${guestCantDinner} is not at dinner a new list is updated\n`);


guestList[removeGuest]=addNewGuest;
for(let i=0 ; i<guestList.length; i++){
    console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. Please join us for a memorable moment.`);
}
