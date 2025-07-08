const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"}) //inside the resolve use parameter
    }, 1000)
})

promiseThree.then(function(user){    //passing argument while calling function
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);          // Promises have chaining
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
}); // resolve return if data pass if fail reject return.

async function consumePromiseFive(){             // instead of .then use async function in which response come
    try {
        const response = await promiseFive //await pauses the execution until promiseFive is resolved or rejected.
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}//If resolved, response contains the resolved value ({username: "javascript", password: "123"}).

//If rejected, it jumps to the catch block and logs 'ERROR: JS went wrong'.

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users') //data coming of string so we convert in json.
//fetch() is a Promise-based function in JavaScript.
//         const data = await response.json() // await write here becuase it take time to come data.
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.