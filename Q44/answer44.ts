// Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwiches(items:string[]):void{
    console.log('you ordered a sandwiches:')
    for(const item of items){
        console.log(item);
    }
}

sandwiches(['mayo','garlic','spicy','hot'])
sandwiches(['Laziza','crispy','Manchorian','bihari'])
sandwiches(['fajtita','tandoori','oive','mashroom'])