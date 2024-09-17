var myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(myNumbers.slice(2));    // the slice function is used to slice the array from index 2 to the end of the array
console.log(myNumbers.splice(1,4))  // this will remove the elements from index 1 to index 4

myNumbers.splice(1,4, "Hello", "World");  // this will replace the elements from index 1 to index 3 with "Hello" and "World"
console.log(myNumbers)