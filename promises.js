/*
const promiseOne = new Promise((resolve, reject) => {

    // Do an async task
    // DB calls
    // Cryptography
    // Network calls
    setTimeout(() => {
        console.log(`Async task is completed`);
        resolve()
    }, 2000)

})

// then -> resolve || catch -> reject
promiseOne.then(() => {
    console.log('Promise consumed')
})
*/

/*
new Promise((resolve, reject) => {

    setTimeout((name) => {
        console.log(`Hello ${name}`);
        resolve()
    }, 1000, "Aditya")

}).then(() => {
    console.log(`Promise resolved`);

}) 
*/

/*
const promiseTwo = new Promise((resolve, reject) => {

    setTimeout(() => {

        resolve({
            name: "Aditya",
            age: 25,
            occupation: "Software Engineer",
            hobbies: ["Coding", "Reading", "Playing Guitar"],
        })

    }, 1000)

})

promiseTwo.then((data) => {
    console.log(data.name);
    console.log(data.age);
    console.log(data.occupation);
    const hobbies = data.hobbies
    for (let i = 0; i < hobbies.length; i++) {
        console.log(hobbies[i])
    }
})
*/

/*
const promiseFour = new Promise((resolve, reject) => {

    setTimeout(() => {

        let error = false
        if (!error) {
            resolve({
                success: true,
                name: "Aditya",
                age: 25,
            })
        } else {
            reject({
                success: false,
                message: "Internal server error"
            })
        }

    }, 1000)

})

promiseFour.then((data) => {
    console.log(data);
    return data.name
}).then((name) => {
    console.log(name);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log(`Async Operation done`);
})
*/

/*
const promiseFive = new Promise((resolve, reject) => {

    setTimeout(() => {

        let error = false
        if (!error) {
            resolve({
                success: true,
                name: "Aryan",
                age: 20,
            })
        } else {
            reject({
                success: false,
                message: "JS error"
            })
        }

    }, 1000)

})

async function consumeP5() {

    try {
        // promise is an eventual completion object
        const data = await promiseFive
        console.log(data); 
    } catch (error) {
        console.log(error)
    }

}


consumeP5()
*/

/*
async function getAllUsers() {

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }


}

getAllUsers()
*/

/*
fetch(`https://jsonplaceholder.typicode.com/users`).then((response) => {
    return response.json()
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})
*/