// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function car_create(manufacturer:string,model:string,...options:any):any
{
    let car_info:any={

        manufacturer:manufacturer,
        model:model
        
    }
    
    for (const option of options) {
        for (const key in option ) {
           car_info[key]=option[key];
        }
        
    }

    return car_info;
}

let car1 = car_create("Toyota", "Camry", {color: "Silver"}, {year: 2022});
let car2 = car_create("KIA", "Changan", {color: "Gray"}, {Transmission: "Automatic"});
let car3 = car_create("Suzuki", "Cultus");

console.log(car1);
console.log(car2);
console.log(car3);
