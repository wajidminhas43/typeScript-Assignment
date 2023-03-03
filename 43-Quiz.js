"use strict";
// Define the make_great() and show_magicians() functions
function make_great1(names) {
    // Create a new array to store the modified names
    var great_names = [];
    // Loop through each name and add "Great " to it
    for (var i = 0; i < names.length; i++) {
        great_names.push("Great " + names[i]);
    }
    // Return the new array of names with "Great" added
    return great_names;
}
function show_magicians1(names) {
    // Display the names of all magicians in the array
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
// Define the array of magicians' names
var magicians2 = ["Harry Houdini", "David Blaine", "David Copperfield"];
// Call make_great() with a copy of the magicians array
var great_magicians = make_great1(magicians2.slice());
// Display the original array of magicians' names
console.log("Original Magicians:");
show_magicians1(magicians2);
// Display the new array of magicians' names with "Great" added
console.log("Great Magicians:");
show_magicians1(great_magicians);
