// NODE.JS MODULES

// What are modules used for in Node?
//used to modularize code and resue code

// How many modules can be defined in a single file?
//no limit

// What is the special object we use in our module to attach or assign functionality to?
//module.exports

//How many times can we require a module in our program?
//they can be required an unlimited number of times throughout the application.

//////////////////////////////////////////

//A module is "loaded" into a Node app using the require function
//Whatever functionality the module "exports" is returned by the require function.
//any variables declared within a module are local to the module - they do not pollute the global scope


//use require function to call module
//store in variable with same name


let daysOfWeek = require('./days-of-week');

let day = daysOfWeek.getWeekday(5);
console.log(day);

////////////////////////////////////////////////
// Labs

const random = require('./utilities/random');
  for (let i = 0; i < 10; i++) {
  	console.log( random(100, 200) );
}

const circle = require('./utilities/circle');
console.log( circle.area(50) );  // 7853.98...
console.log( circle.circumference(75) );  // 471.23... 