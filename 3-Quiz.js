"use strict";
// Store the person's name in a variable
var personName = 'abbas ali';
// Print the person's name in lowercase
console.log(personName.toLowerCase());
// Print the person's name in uppercase
console.log(personName.toUpperCase());
// Print the person's name in titlecase
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
console.log(toTitleCase(personName));
