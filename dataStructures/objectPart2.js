let employee = {
    name: "",
    age: "",
    salary: "",
    getEmployeeInfo: function(){
        console.log(this.name + " " + this.age + " " + this.salary);
    }
}

let emp1 = Object.create(employee);
emp1.name = "John";
emp1.getEmployeeInfo()
console.log(emp1)

let emp2 = Object.create(employee);
emp2.name = "Ali";
emp2.age = 25;
emp2.salary = 5000;
emp2.getEmployeeInfo()
console.log(emp2)