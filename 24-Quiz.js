"use strict";
// Tests for equality and inequality with strings
let language = "typescript";
let language1 = "Typescript";
if (language == language1) {
    console.log("language is equal to language1.");
}
else
    console.log("language is not equal to language ");
// Tests using the lower case function
let latter = "A";
console.log(latter == latter.toUpperCase());
console.log(latter == latter.toLowerCase());
// • Numerical tests involving equality and inequality, greater than and less than, 
// greater than or equal to, and less than or equal to
let num = 50;
let num1 = 150;
// greater than and less than
if (num > num1) {
    console.log("num is greater then num1");
}
else
    console.log("Num1 is less then Num");
// equality and inequality,
if (num == num1) {
    console.log("Num is Equal to Num1");
}
else
    console.log("Num is Not Equal to Num1");
// greater than or equal to, and less than or equal to
if (num < num1) {
    console.log("Num is greater ");
}
else
    console.log("Num1 is greater ");
//  Test whether an item is in a array
const cities = ["karachi", "lahore", "islamabad", "peshawar"];
// if data is in array then it will "true" otherwise it will "false".
console.log(cities.includes("islamabad"));
console.log(cities.includes("multan"));
