// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestList = ['Saad', 'sameer', "kinza", "hafsa"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to dinner. Please join us for a memorable moment.\n"));
}
var removeGuest = 2;
var guestCantDinner = guestList[removeGuest];
var addNewGuest = 'mahnoor';
console.log("\nsome changes in guest list ".concat(guestCantDinner, " is not at dinner a new list is updated\n"));
guestList[removeGuest] = addNewGuest;
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to dinner. Please join us for a memorable moment."));
}
console.log("Great news arranging a big dinner some new guest are invited \n");
guestList.unshift('Dua');
guestList.push('Mahnoor');
guestList.splice(Math.floor(guestList.length / 2), 0, 'Hooriya');
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to dinner. Please join us for a memorable moment."));
}
