// this context and arrow function

const person1 = {
    name: "John",
    age: 30,
    occupation: "Software Engineer",
    displayName: function () {
        console.log(this.name + " is a " + this.occupation);
    }
}

// person1.displayName()

fn = (name, occupation) => {
    console.log(name + " is a " + occupation);
}
const person2 = {
    name: "Kirshna",
    age: 20,
    occupation: "Software Engineer",
    displayName: function () {



        fn(this.name, this.occupation)


    }
}

person2.displayName()