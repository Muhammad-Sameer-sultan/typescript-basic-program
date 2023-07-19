// Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwiches(items) {
    console.log('you ordered a sandwiches:');
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        console.log(item);
    }
}
sandwiches(['mayo', 'garlic', 'spicy', 'hot']);
sandwiches(['Laziza', 'crispy', 'Manchorian', 'bihari']);
sandwiches(['fajtita', 'tandoori', 'oive', 'mashroom']);
