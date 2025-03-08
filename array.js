const obj1 =
{
    name: "Krishna",
    age: 20,
    city: "Bangalore",
    hobbies: ["Cricket", "Football", "Reading"],
    address: {
        street: "1st Cross",
        city: "Bangalore",
        state: "Karnataka",
        country: "India"
    },
    education: {
        school: "St. Joseph's",
        college: "St. Joseph's",
        university: "St. Joseph's",
        degree: "B.E"
    }

}

const obj3 =
{
    name: "Krishna",
    age: 20,
    city: "Bangalore",
    hobbies: ["Cricket", "Football", "Reading"],
    address: {
        street: "1st Cross",
        city: "Bangalore",
        state: "Karnataka",
        country: "India"
    },
    education: {
        school: "St. Joseph's",
        college: "St. Joseph's",
        university: "St. Joseph's",
        degree: "B.E"
    }

}

const obj2 = {

    company: "Google",
    designation: "SDE2",
    salary: "56lpa",
    isMarried: false,
    experience: "3yrs"
}


const Krishna = Object.assign(obj1, obj3)


/* const Krishna = { ...obj1, ...obj2 } */
console.log(Krishna);
