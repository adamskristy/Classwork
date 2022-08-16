//Arrays, handles lists of values
//you can nest array inside of arrays
//let people = ['Kristy', 'Sami', 'Jade'[3, 4, []]]

//index/position   0        1        2  
//let learners = ['Kristy', 'Sami', 'Eon']


//console.log(learners) //prints whole array
// console.log(learners[0]) //prints first item in array

//Change value in array

// learners[0] = 'Bob' //replacing the first value 'Kristy' with 'Bob'
// console.log(learners)

//find out length of array
//console.log(learners.length) //how many values are in the array


//PUSH method, adds to end of the array
// learners.push('John')
// console.log(learners)

//POP method, removes last value
// learners.pop()
// console.log(learners)

//SHIFT method, removes first value of array
// learners.shift()
// console.log(learners)

//UNSHIFT method, insert new element at start of array
// learners.unshift('Will')
// console.log(learners)


//SPREAD operator, expand array, joing seperate arrays into new one
//spread two arrays into one

// let instructors = ['Teo', 'Jade', 'Rixio']

// let everybody = [...learners, ...instructors]
// console.log(everybody)


//REST parameters, add more values to array
//use inside parameters of functions
//trying to add more parameters

// function add(...numbers){ 
//     console.log(numbers)
// }
// add(4, 5, 6, 10, 100, 50) 


//first index is always zero
//last index is always lenght of array -1

//number of arrays (6) - 1 = 5
// function add(...numbers){ //add is function
//     for(let i = 0; i < numbers.length; i++){ //numbers is array
//         console.log(number[i])
// }

// add(4, 5, 6, 10, 100, 50) 
// }

//-------------------------

//Exercise 1

// function max (a, b){ //naming function max and setting parameters
//     if (a > b){ //if a is greater than b
//         return a; //prints the value of a
//     }
//     else    //prints the value of b
//         return b;
// }
// console.log(max(30,68)) //declaring values of a and b


// //Exercise 2 

// let numbers = [12,26,42]
// function maxOfThree (...numbers){
//     if (12 < 26 < 42){
//         return 42;
//     }
//     else {
//         return "nothing";
//     }
// }
// console.log(maxOfThree(12, 26, 42))

// //Exercise 3

// let vowels = ["a", "e", "i","o", "u"]
//     function isCharAVowel (...vowels){ //insert vowel values
//         if (vowels == isCharAVowel ){ //if letter is equal to one of the vowel values
//         console.log(true) //print vowel
//         }else{
//             console.log(false)
//         }
        
//     }console.log(isCharAVowel("b"))

//check into includes array method or switch statement


//    // Exercise 4
//     let sumArray = function(num1, num2, num3){
//         return num1 + num2 + num3
//     }
//         console.log(sumArray(2, 4, 5))


//     //Exercise 5
    // function multiplyArray(m1, m2, m3){
    //     return m1 * m2 * m3
    // }
    //     console.log(multiplyArray(2, 4, 5))


//  //Exercise 6
    // let numArgs = function(...numArgs){ //spread
    //     return arguments.length //length of arrays 
    // }
    //     console.log(numArgs(1, 2, 3, 4))


//     //Exercise 7
//     function reverseString(str){
//             return str.split('').reverse().join('');
//     }

//    console.log(reverseString('rockstar'))


// //    //Exercise 8
//     let string = ['red', 'blue', 'yellow', 'green', 'purple']

//    //let longestStringArray(...string){
//     //    return
//    //}

// //-----------------------------------

//    // MORE ARRAYS 

//    // FOR EACH loop (built in array method)

//   let foods = ['kimchi', 'tacos', 'arepas', 'spam']

// //   foods.forEach(function(foodItem){
// //         console.log(foodItem)
// //   })

//   foods.forEach(function(item, idx, arr){
//     console.log(item)
//     console.log(idx)
//     //console.log(arr)
//   })

// // FILTER (built in array method), filter through array

// let newFoodsArr = foods.filter((item, idx) => {
//     //if you return true
//     //keep the item
//     //if false
//     //discard it
//     if (item[0] === 'k' || item[0] === 's') { //checks if first character is k or s
//         return true
//     } else {
//         return false
//     }
// })

// console.log(newFoodsArr) //not mutated just created new array variable
// console.log(foods)

// // MAP, change someting about each element in the array, mutates
// //built in array method

// let brandNewArray = foods.map(function(item, idx) {
//     // change the current item
//     return item + '!' //will create new array so need to store
// })

// console.log(brandNewArray)

// // REDUCE, array of values and want to return single value
// //built in array method

// let nums = [4, 10, 25, 30, 100]

// let result = nums.reduce((previousValue, currentValue) => { // 2 arguements here
//     return currentValue + previousValue
// }, 0) //zero is initial value
// // 0 + 4 + 10 + 25 + 30 + 100

// console.log(result)

//-------------------------------

// FIZZ BUZZ

//for loop
// for (let i = 1; i < 100; i++){
//     if( i % 3 === 0){
//         console.log('Fizz');
//     } else (i % 5 === 0 && i %! 3 === 0);{
//         console.log('Buzz');
//     }
// }
// //console.log(i);

// //function

// function fizzBuzzCount(i){ //need two parameters, two arguements, and a loop
//     for(let i = 0; i < 100; i++) {
//         if(i % 3 === 0 && i % 5 !=0){
//             console.log('Fizz')
//         } else if (i % 5 != 0 && i % 3 !=0 ) {
//                 console.log('Buzz')
//         }
//     } console.log(fizzBuzzCount(i))
// } 


// //num less than num2, while loop

// function fizzBuzzThing(num1, num2){
//     while(num1 < num2){ //
//         for(let i = 0; i < 100; i++) {
//             if(i % 3 === 0 && i % 5 !=0){
//                 console.log('Fizz')
//             } else if (i % 5 != 0 && i % 3 !=0 ) {
//                     console.log('Buzz')
//             }
//         } console.log(fizzBuzzCount(i))  
//     }
// }

//if div3, nest if div 5 and div 5
//

//fancy way
//for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)



//LOGIC PRACTICE

//Function written
function fizzBuzz(){
    //testing the function
    //print numbers 1 - 100 
    //make a for loop
    for(let i = 1; i <= 100; i++){
        //how to start counting
        //console.log(i)
        //for numbers divisible by 3 print fizz
        if(i % 3 == 0 && i % 5 != 0){ //if i is divided by 3 and the remainder is zero
            //print fizz
            console.log('Fizz')
        } else if (i % 5 == 0 && i % 3 != 0){ ///if i is divided by 5 and the remainder is zero
            //print buzz
            console.log('Buzz')
        } else if (i % 3 == 0 && i % 5 == 0){
            console.log('FizzBuzz')
        } else{
            console.log(i)
        }
    }

    //console.log('number')
}

//call the function
fizzBuzz();

// let n = 0;

// while (n < 3) {
//   n++;
// }







