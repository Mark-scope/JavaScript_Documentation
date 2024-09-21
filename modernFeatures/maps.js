//maps work like key value pair 

// let fruits = new Map();

// fruits.set("Yellow", "Banana");
// fruits.set("Red", "Apple");
// fruits.set("Orange", "Orange");
// fruits.set("Green", "Grapes");
// fruits.set("Dark Purple", "Cherry");




const fruits = new Map([
    ["Yellow", "Banana"],
    ["Red", "Apple"],
    ["Orange", "Orange"],
    ["Green", "Grapes"],
    ["Dark Purple", "Cherry"]
]);

// Looping through the map using for...of
for (const [key, value] of fruits) {
    console.log(`${key} : ${value}`);
}

// Using forEach to loop through values and optionally log keys
fruits.forEach((value, key) => {
    console.log(`${key} : ${value}`);
});
