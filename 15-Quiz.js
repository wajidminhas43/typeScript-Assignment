"use strict";
let friendList1 = ["Ahsan", "sajid", "Lara", "majeed", "nabeel"];
console.log(`Mr dear friends ${friendList1}you are invited at dinner.`);
friendList1.splice(3, 1, "badar");
console.log(`Miss ${friendList1[2]} is not joining our dinner`);
friendList1.splice(2, 1, "badar");
// console.log(`my fellow friends ${friendList1}you are invited at dinner.`)
friendList1.forEach(function (invitation) {
    console.log(`${invitation} my friend you are invited at dinner`);
});
