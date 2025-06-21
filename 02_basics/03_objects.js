// singleton
// Object.create // at the time of constructor singleton create

// object literals

const mySym = Symbol("key1")  //symbols are unique

const secret = Symbol("secret");

const user = {
  name: "Alice",
  [secret]: "hiddenValue"
};

console.log(user.name);           // Alice
console.log(user[secret]);        // hiddenValue
console.log(Object.keys(user));   // ["name"]
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(secret)]

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",  // way of representing Symbol in objects
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) // access element using by [] bracket.
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  // after that we are not able to update any element of objects
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){    // add greeting function in JsUser Object
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting()); // calling function
console.log(JsUser.greetingTwo());