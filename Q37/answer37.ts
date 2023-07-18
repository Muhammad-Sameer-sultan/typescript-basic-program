// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size:number=18, message:string='the shirt collection is limited'):void
{
    console.log(`You order a ${size} Size t-shirt and ${message}`)
}
make_shirt();
make_shirt(22);
make_shirt(99,'the shirt size xxl its makes for faty person');