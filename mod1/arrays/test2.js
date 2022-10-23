// //More ARRAY METHODS

// //map
// //filter
// //forEach

const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const panagram = ['The' ,'quick', 'brown', 'fox', 'jumps', 'over', 'the','lazy', 'dog']

//array methods take callback function as an argument
//callbacks are functions that will run at a later time
//example of a forEach array method: numbs.forEach()


//EVERY
// test whether all elements in array pass a test implemented by function
// returns true or false
// provided function is callback
// should store in variable

// if every element/value is greater returns true
let test = nums.every(callback) // -> true or false 
// depends on results from function, if one false, this is false
// this callback checks if every element/value is greater than zero

//creating our own callback function
function myCallback(element){
    if(element >= 0){ //what is the test
        return true   //did it pass the test?
    } else{
        return false
    }
}

console.log('the result of our every array method check is...', test)

const isBelowThreshold = (currentValue) => currentValue < 40; //ES6

function isBelowThreshold (currentValue){ //ES5
    return currentValue < 40; //is current value less than 40? true or false
}

// let test2 = panagram.every(myNewCallback)

// function myNewCallback(element){
//     if(element.length < 8){
//         return true
//     } else {
//         return false
//     }
// }

let test2 = panagram.every(function(element){ //can be function or arrow
    if(element.length < 8){
        return true
    } else {
        return false
    }
})

// a version with less syntax
//let test3 = panagram.every((element) =>element.length < 8)

console.log('the result of our second every methof is...', test2)

//filter method exercise

//returns mutated array with filtered down the elements that passed the test
//if nothing passes, an empty array is returned

//words less than 4 characters
wordTest = panagram.filter(word => word.length > 4)

//nums.filter((element) => element < 3) ->[1, 2]
//if want access to orginial need to store


// FIND
//return 1st element in array that satisfies test function
//return undefined if nothing meets condition

//first value divisible by 5
let foundElement = nums.find((element) => element % 5 === 0 )  //-> return a value
//first word longer than 5 letters
let firstWord = panagram.find((element) => element < 5 )

//can console log or store value
console.log('we found a number divisible by 5...', foundElement)


// FIND INDEX
//return the index of the first element that evaluates to true in the callback function. 
//returns a value(index) if true
//if false return -1

//divisible by 3
let divByThree = nums.findIndex((element) => element % 3 === 0 )

//word less than 2 letters
let lessThanTwo = panagram.findIndex((element) => element.length < 2 )


//FOR EACH
//method executes a provided function once for each array element.
//no return value, so no need to store in variable

//value of nums multiplied by 3
nums.forEach((element) => console.log(element * 3))

//print each word with !
panagram.forEach((word) => console.log(word + '!'));


// MAP
//create new array with results of callback function added to element
//change something about each element in the array
//mutates to new array

//new array of values * 100
let timesOneHundred = numbs.map((element) => element * 100)
console.log(timesOneHundred)

//new array of words in uppercase
let upperCase = panagram.map((word) => word.toUpperCase())
console.log(upperCase)

