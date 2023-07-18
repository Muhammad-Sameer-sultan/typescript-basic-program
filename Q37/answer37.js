// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = 18; }
    if (message === void 0) { message = 'the shirt collection is limited'; }
    console.log("You order a ".concat(size, " Size t-shirt and ").concat(message));
}
make_shirt();
make_shirt(22);
make_shirt(99, 'the shirt size xxl its makes for faty person');
