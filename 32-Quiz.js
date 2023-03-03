"use strict";
// let new_users = ["john","tom","susannah", "James"]
// let current_users= ["John","Tom","Susannah"]
// let interim_list:any =[]
// for (let current_user in current_users)
//     // interim_list.append(current_user.toLowerCase())
//     interim_list = [current_user.toLocaleLowerCase() for current_user in current_users]
// for (let new_user in new_users)
//     if (new_user.toLocaleLowerCase() in interim_list)
//        console.log ("This username, " + new_user + ", is taken")
//     else
//         console.log ("Feel free to use " + new_user)
let current_users = ["Ahsan", "sajid", "Lara", "majeed", "nabeel"];
let new_users = ["Ahmed", "sajid", "Lara", "shaheen", "nabeel"];
for (let i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i])) {
        console.log("Sorry, the username " + new_users[i] + " is already taken. Please enter a new username.");
    }
    else {
        console.log("Congratulations, the username " + new_users[i] + " is available!");
    }
}
