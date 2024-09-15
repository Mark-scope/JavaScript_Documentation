let user = "sper Admin";

switch(user) {
    case "super Admin":
        console.log("you have full access");
        break;
    case "Admin":
        console.log("you have access but you can't delete anything");
        break;
    case "DEO":
        console.log("you have access to enter and update the records");
        break;
    case "User":
        console.log("you have access to read only");
        break;
    default:
        console.log("invalid user crentials");
}