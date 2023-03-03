"use strict";
// statement using if else
let car = "Hundai";
if (car == "toyota") {
    console.log("Car is equal to toyota");
}
else if (car == "Hundai") {
    console.log("Car is Hundai");
}
else if (car == "subaru") {
    console.log("car is subaru");
}
else {
    console.log("your car is Subaru");
}
// by using switch statement
let transport = "bus";
switch (transport) {
    case 'bus':
        console.log("bus is best service for transportation");
        break;
    case 'car':
        console.log("car is best for family travel");
    case 'motoriBike':
        console.log("Motor bike is best for quick service of transportation");
    default:
        console.log("All services of transportation is best");
        break;
}
