class Employee{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    salary = "";
    jobDescription = [];

    getEmployeeInfo(){
        return{name: this.name, email: this.email}
    }

    setJobDescription(description){
        this.jobDescription.push(description);
    }

    getJobDesscriptions(){
        return this.jobDescription;
    }
}

module.export = Employee;