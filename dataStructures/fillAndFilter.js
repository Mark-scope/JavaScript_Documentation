let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myNumbers.fill(1)); // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] the fill method is used to fill the array with a specific value

console.log(myNumbers.fill("Hello world", 2, 6));  //it will fill the array from index 2 to 6 with "Hello world"

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function checkAge(age) {
    return age > 6;
}

console.log(numbers.filter(checkAge));