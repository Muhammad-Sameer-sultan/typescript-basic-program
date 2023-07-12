// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
var visitPlaces = ['Tokyo, japan', 'Moroco, USA', 'Santorini, Greece', 'Bora Bora, French Polynesia', 'Cappadocia, Turkey'];
// • Print your array in its original order.
console.log("Places to visit (orginial array)");
for (var i = 0; i < visitPlaces.length; i++) {
    console.log(visitPlaces[i]);
}
// • Print your array in alphabetical order without modifying the actual list.
console.log("Places to visit in in aalphabatical order");
var sorted_visitplaces = visitPlaces.slice().sort();
for (var i = 0; i < sorted_visitplaces.length; i++) {
    console.log(sorted_visitplaces[i]);
}
// • Show that your array is still in its original order by printing it.
console.log("Places to visit (orginial array) show");
for (var i = 0; i < visitPlaces.length; i++) {
    console.log(visitPlaces[i]);
}
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Places to visit in Reverse alphabatical order without changing original array");
var sortedReverse_visitplaces = visitPlaces.slice().sort().reverse();
for (var i = 0; i < sortedReverse_visitplaces.length; i++) {
    console.log(sortedReverse_visitplaces[i]);
}
// • Show that your array is still in its original order by printing it again.
console.log("Places to visit (orginial array) show");
for (var i = 0; i < visitPlaces.length; i++) {
    console.log(visitPlaces[i]);
}
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("Places to visit list  print in Reverse  order ");
visitPlaces.reverse();
for (var i = 0; i < visitPlaces.length; i++) {
    console.log(visitPlaces[i]);
}
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Places to visit list  print in Reverse  order  Again");
visitPlaces.reverse();
for (var i = 0; i < visitPlaces.length; i++) {
    console.log(visitPlaces[i]);
}
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Places to visit list  print in sort ");
visitPlaces.sort();
for (var i = 0; i < visitPlaces.length; i++) {
    console.log(visitPlaces[i]);
}
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Places to visit list  print in sort reverse alphabatical order ");
visitPlaces.reverse;
for (var i = 0; i < visitPlaces.length; i++) {
    console.log(visitPlaces[i]);
}
