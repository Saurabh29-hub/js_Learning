// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {    // similiar like auto it
    console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map() 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map); // Here map shown error

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {       // for objects iteration of for of not work.
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
// console.log(key, ':-', value); // Here my object is not iterable
    
// }