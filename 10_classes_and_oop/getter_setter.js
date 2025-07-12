class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value  
    }

    get password(){
        return `${this._password}hitesh`  // overwrite password value of constructor.
    }

    set password(value){                  // property become method
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);