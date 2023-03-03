"use strict";
// Original guest list
var guests = ["Ahsan", "sajid", "Lara", "majeed", "nabeel"];
// Print the original guest list
for (var i = 0; i < guests.length; i++) {
    console.log('Dear ' + guests[i] + ', you are invited to dinner.');
}
// Inform people that we found a bigger dinner table
console.log("We found a bigger dinner table! We can invite more guests!");
// Add a new guest to the beginning of the array
guests.unshift('Naeem');
// Add a new guest to the middle of the array
guests.splice(2, 0, 'nida');
// Add a new guest to the end of the array using append()
guests.push('Farukh');
// Print a new set of invitation messages
for (var i = 0; i < guests.length; i++) {
    console.log('Dear ' + guests[i] + ', you are invited to dinner.');
}
