// for(initialization; condition; increament/decreament){
//     loop code
// }

let students = ['Ali', 'Omar', 90, true];
for( let a = 0; a < students.length; a++){
    console.log(students[a]);
}

for(let i = 0; i < 10; i++){
    //for every odd number
    if(i%2 == 0){
        console.log(i);
    }
//for every even number
    if(i%2 == 1){
        console.log(i);
    }
//for every number except 5
    if(i == 5){
        continue;
    }
    console.log(i);
}

