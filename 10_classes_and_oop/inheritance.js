class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)  // inheritance
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")
console.log(chai.addCourse());
chai.logMe() // by inhertance this function run.
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);