var user = {
    firstname: "John",
    lastname: "Doe",
    skills: ["HTML", "CSS", "JS"],
    isActive: true,
    age: 25,
    getUserInfo: function(role) {
        return `${this.firstname} have full user access, and role is ${role}`
    }
}

console.log(user)
console.log(user.firstname) // . is used to access the properties
console.log(user.getUserInfo("admin")) // . is used to access the properties
// console.table(user)  // .table is used to print the properties in a table format

