"use strict";
function create_car(manufacturer, model, ...options) {
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var i = 0; i < options.length; i += 2) {
        var key = options[i];
        var value = options[i + 1];
        car[key] = value;
    }
    return car;
}
// Call the function with the required information and two other name-value pairs
var my_car = create_car("Tesla", "Model 3", "color", "red", "autopilot", true);
// Print the object to make sure all the information was stored correctly
console.log(my_car);
