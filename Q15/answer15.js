// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guestList = ['Saad', 'sameer', "muhammad", "Ali", "asad", 'saima', "kinza", "hafsa"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to dinner. Please join us for a memorable moment."));
}
var removeGuest = 3;
var guestCantDinner = guestList[removeGuest];
var addNewGuest = 'mahnoor';
console.log("\nsome changes in guest list ".concat(guestCantDinner, " is not at dinner a new list is updated\n"));
guestList[removeGuest] = addNewGuest;
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to dinner. Please join us for a memorable moment."));
}
