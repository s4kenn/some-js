// Javascript and Classes.. JS me classes hoti hai?
// hoti nahi thi aur technically dekhi jaye to abhi bhi nahi hoti

// OOP -> Programming Paradign (Coding style/ structure)

// Object is collection of properties and methods

// Object Literal -> {}

/*
- Constructor function
- Classes
- Instances (new,this)
- Prototypes
*/

// This is an object literal
const user = {
    userName: "s4kenn",
    loginCount: 8,
    signedIn: true,
    // For arrow function this does not refer to the object (current context)
    // Instead, it inherits this from the surrounding lexical scope (which in this case is the global scope or module scope in strict mode)
    /*
    getUserDetails: () => {
        console.log(this.userName, " ", this.signedIn);
    }
    */
    // this mein poora object hi hai 
    getUserDetails: function () {
        console.log(this.userName, " ", this.signedIn);
    }
}

console.log(user["userName"]); // user.userName
user.getUserDetails()

// Global context ke liye this -> (node environment ke liye) empty (keeps on changing on browser (Window object))
console.log(this);


// Constructor Function
// naya context banane ke liye kaam aata hai
const date = new Date() // Ek hi object literal se multiple instances bana sake



function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    // implicitly return ho jata hai
    return this
}

// we use new to get new Instance of User
const userOne = new User("Aditya", 10, true)
// new copy for userTwo is made
const userTwo = new User("Aryan", 9, false)
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);


// new keyword use karne se empty object create hojata hai
// Constructor function call hota hai new keyword ke karan

/*
class User {
    constructor(username, loginCount, isLoggedIn) { // ✅ Use "constructor"
        this.username = username;
        this.loginCount = loginCount;
        this.isLoggedIn = isLoggedIn;
    }
}

// We use "new" to create instances of the User class
const userOne = new User("Aditya", 10, true);
const userTwo = new User("Aryan", 9, false);

console.log(userOne);
console.log(userTwo);
*/

console.log(userTwo instanceof User);

