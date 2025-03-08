/*
const add = (a, b) => { return a + b }
console.log(add(2, 3));
*/


/*
(function chai() {
    console.log("Hello friends chai peelo");
})();
*/

let arr = [1, 2, 3, 4, 5]
/*
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
*/

/*
for (const v of arr) {
    console.log(v);
}
*/

/*
arr.forEach((number, idx, arr) => {
    console.log(`${number} is at index ${idx}`);
    console.log(arr);
})
*/

const persons = [
    {
        name: "Alice",
        age: 25,
        city: "New York",
        hobbies: ["Reading", "Cycling", "Gaming"]
    },
    {
        name: "Bob",
        age: 27,
        city: "Los Angeles",
        hobbies: ["Hiking", "Photography", "Cooking"]
    },
    {
        name: "Charlie",
        age: 22,
        city: "Chicago",
        hobbies: ["Football", "Music", "Traveling"]
    },
    {
        name: "David",
        age: 28,
        city: "Houston",
        hobbies: ["Swimming", "Running", "Coding"]
    },
    {
        name: "Emma",
        age: 27,
        city: "San Francisco",
        hobbies: ["Dancing", "Painting", "Yoga"]
    }
];

for (let val in persons) {
    for (let x in persons[val]) {
        console.log(persons[val][x]);
    }
}


/*

console.log(persons.find((singleObject, index) => {
    if (singleObject.age === 27) {
        return singleObject
    }
}));


*/

const myMap = new Map()
myMap.set("Name", "Krishna")
myMap.set("Age", 20)
myMap.set("Occupation", "SDE1")
myMap.set("Size", "2inch max")

/*
console.log(myMap.size);
console.log(myMap);

console.log(myMap.get("Name"));
*/

/*
for (let key of myMap) {
    console.log(key);
}
*/
