// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size:number, message:string):void
{
    console.log(`You order a ${size} Size t-shirt and ${message}`)
}
make_shirt(20,'the shirt collection is limited');