var employee = function(name, age, salary){
    this.name = name;
    this.age = age; 
    this.salary = salary;
    this.getEmployeeInfo = function(){
        console.log(this.name + " " + this.age + " " + this.salary);
    }
}

// to inject a new function which doesn't exist we use prototype
employee.prototype.getName = function(){
    console.log(`Your name is ${this.name}`)

    // we can also use this keyword
    console.log(`Your name is ${this}`)
}

var emp1 = new employee("Ali", 23, 23323)
emp1.getName