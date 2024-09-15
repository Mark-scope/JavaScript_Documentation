// can you set variables as a function

let useRole = function(name, role){
    switch(role){
        case "admin":
            console.log(name + " has full access except deleting data");
            break;
        case "super admin":
            console.log(`${name} is ${role} and has access to all the features`);
            break;
        case "DEO":
            console.log(`${name} is ${role} and has access to enter and update the records`);
            break;
        default:
            console.log(`${name} is ${role} and has no access to any features`);
    }
}

useRole("Kofi", "admin")