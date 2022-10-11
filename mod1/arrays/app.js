//  ARRAYS

//handles lists of values
// you can nest array inside of arrays
let people = ['Kristy', 'Sami', 'Jade'[3, 4, []]]

//index/position   0        1        2  
let learners = ['Kristy', 'Sami', 'Eon']


console.log(learners) //prints whole array
console.log(learners[0]) //prints first item in array

//Change value in array

learners[0] = 'Bob' //replacing the first value 'Kristy' with 'Bob'
console.log(learners)

//find out length of array
console.log(learners.length) //how many values are in the array


//PUSH method, adds to end of the array
learners.push('John')
console.log(learners)

//POP method, removes last value
learners.pop()
console.log(learners)

///SHIFT method, removes first value of array
learners.shift()
console.log(learners)

//UNSHIFT method, insert new element at start of array
learners.unshift('Will')
console.log(learners)


//SPREAD operator, expand array, joing seperate arrays into new one
//spread two arrays into one

let instructors = ['Teo', 'Jade', 'Rixio']

let everybody = [...learners, ...instructors]
console.log(everybody)
//output [ 'Kristy', 'Sami', 'Eon', 'Teo', 'Jade', 'Rixio' ]

//also SPREAD
const strings = 'hi there';
console.log([...strings])
// [ 'h', 'i', ' ', 't', 'h', 'e', 'r', 'e' ]


// REST PARAMETERS, add more values to array
// use inside parameters of functions
// trying to add more parameters

function add(...numbers){ 
    console.log(numbers)
}
add(4, 5, 6, 10, 100, 50) 
//output [ 4, 5, 6, 10, 100, 50 ]


// first index is always zero
// last index is always lenght of array -1

// number of arrays (6) - 1 = 5
function add(...numbers){ //add is function
    for(let i = 0; i < numbers.length; i++){ //numbers is array
        console.log(number[i])
}

add(4, 5, 6, 10, 100, 50) 
}

//-------------------------

// Exercise 1

function max (a, b){ //naming function max and setting parameters
    if (a > b){ //if a is greater than b
        return a; //prints the value of a
    }
    else    //prints the value of b
        return b;
}
console.log(max(30,68)) //declaring values of a and b


//Exercise 2 

let numbers = [12,26,42]
function maxOfThree (...numbers){
    if (12 < 26 < 42){
        return 42;
    }
    else {
        return "nothing";
    }
}
console.log(maxOfThree(12, 26, 42))

// Exercise 3

let vowels = ["a", "e", "i","o", "u"]
    function isCharAVowel (...vowels){ //insert vowel values
        if (vowels == isCharAVowel ){ //if letter is equal to one of the vowel values
        console.log(true) //print vowel
        }else{
            console.log(false)
        }
        
    }console.log(isCharAVowel("i"))

// check into includes array method or switch statement


   // Exercise 4
    let sumArray = function(num1, num2, num3){
        return num1 + num2 + num3
    }
        console.log(sumArray(2, 4, 5))


    //Exercise 5
    function multiplyArray(m1, m2, m3){
        return m1 * m2 * m3
    }
        console.log(multiplyArray(2, 4, 5))


    //Exercise 6
    let numArgs = function(...numArgs){ //spread
        return arguments.length //length of arrays 
    }
        console.log(numArgs(1, 2, 3, 4))


    //Exercise 7
    function reverseString(str){
            return str.split('').reverse().join('');
    }

   console.log(reverseString('rockstar'))


   //Exercise 8
    let string = ['red', 'blue', 'yellow', 'green', 'purple']

//    let longestStringArray (...string){
//        return
//    }

//-----------------------------------

// MORE ARRAY METHODS

// FOR EACH loop (built in array method)
//need notes

  let foods = ['kimchi', 'tacos', 'arepas', 'spam']

  foods.forEach(function(foodItem){
        console.log(foodItem)
  })

  foods.forEach(function(item, idx, arr){
    console.log(item)
    console.log(idx)
    console.log(arr)
  })

// FILTER (built in array method), filter through array
//returns true or false

let newFoodsArr = foods.filter((item, idx) => {
    //if you return true
    //keep the item
    //if false
    //discard it
    if (item[0] === 'k' || item[0] === 's') { //checks if first character is k or s
        return true
    } else {
        return false
    }
})

console.log(newFoodsArr) //not mutated just created new array variable
console.log(foods)

// FILTER Arrow function example (CodeAcademy)

//words is array with string elements
//const shortWords stores results of filtering the array(words)
//word is param in callback function
//each element in words array will be passed to this function as arguement
//any word with less than 6 letters will be added to shortWords array


const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
const shortWords = words.filter(word => {
  return word.length < 6;
});

// MAP, change something about each element in the array
//mutates to new array


let brandNewArray = foods.map(function(item, idx) {
    // change the current item
    return item + '!' //will create new array so need to store
})

console.log(brandNewArray)

// REDUCE, returns single value after iterating through elements
//built in array method

let nums = [4, 10, 25, 30, 100]

let result = nums.reduce((previousValue, currentValue) => { // 2 arguements here
    return currentValue + previousValue
}, 0) //zero is initial value
// 0 + 4 + 10 + 25 + 30 + 100
// 4 + 10 + 25 + 30 + 100 without zero

console.log(result)
//169
//0 + 4 = 4 + 10 = 14 + 25 = 39 + 30 = 69 + 100 = 169


//.findIndex()
//return the index of the first element that evaluates to true in the callback function. 
const jumbledNums = [123, 25, 78, 5, 9]; 
 
const lessThanTen = jumbledNums.findIndex(num => { //num is param that each item in array will be passed
  return num < 10; //condition elements are check against
});
console.log(lessThanTen); 
// Output: 3 , element at 3rd index evaluates true

console.log(jumbledNums[3]); //what element has index of 3?
// Output: 5

//if nothing evaluates true, will return -1

// EVERY
//test whether all elements in array pass test, true or false
// SOME
//test if at least one element in array pass test, true or false


// -------------------------------

// ARRAYS

let arr = [3, 10, 25]

//for of loop
//super simple to loop through strings and arrays
//need more notes

for (let num of arr){
    console.log(num)
}

// SPLICE
let fruit =['apple', 'pear', 'banana', 'kiwi']
//fruit.splice(0, 1) //where to start, how many to delete
//console.log(fruit)
//removed apple
//mutates array

fruit.splice(1, 0, 'blueberry') //start at 1 index, delete zero or nothing, add blueberry
console.log(fruit)

// SLICE copies
let fruit2 = fruit.slice(0, 2) //copies everythoing from 0 to 2

//fruit2[0] = 'nothing', //replace at 0 index

console.log('fruit: ', fruit)
console.log('fruit2: ', fruit2)


// STRING methods


// let firstName = 'bobby'

 console.log(firstName[0])

for (let i = 0; i < firstName.length; i++){
    console.log(firstName[i])
}

//method chaning, using multiple methods together
//.charAt
//.toUpperCase
//.toLowerCase
//.trim removes extra spaces
//.split, splits each character in a seperate value of an array based off parameters
const hiString = 'hi there';
const usingSplit = hiString.split('');
// [ 'h', 'i', ' ', 't', 'h', 'e', 'r', 'e' ]

//.join, array method, array back into a string


//for of loop
//super simple to loop through strings and arrays
//need more notes

let str = "bobby"
for(let character of str){
    console.log(character)
}

//--------------------------


