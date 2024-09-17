const users = {

        firstname: "John",
        lastname: "Doe",
        skills: ["HTML", "CSS", "JS"],
        isActive: true,

}

for (const user in users) {
    console.log(`${user} : ${users[user]}`);
}

