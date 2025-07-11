const descripter = Object.getOwnPropertyDescriptor(Math, "PI") // get all info of particular attribute

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', { //we can change the property of attribute
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name")); //must give property with object.

for (let [key, value] of Object.entries(chai)) { // iteration in object
    if (typeof value !== 'function') {    // to avoid iteration in function.
        
        console.log(`${key} : ${value}`);
    }
}