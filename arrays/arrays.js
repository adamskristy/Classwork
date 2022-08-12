//Arrays, handles lists of values
//you can nest array inside of arrays
//let learners = ['Kristy', 'Sami', 'Jade'[3, 4, []]]

//index/position   0        1        2  
let learners = ['Kristy', 'Sami', 'Eon']


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


//Exercise 1

// function max (a, b){ //naming function max and setting parameters
//     if (a > b){ //if a is greater than b
//         return a; //prints the value of a
//     }
//     else    //prints the value of b
//         return b;
// }
// console.log(max(30,68)) //declaring values of a and b


//Exercise 2

// let numbers = [12,26,42]
// function maxOfThree (...numbers){
//     if (12 < 26 < 42){
//         return 42;
//     }
//     else {
//         return "nothing";
//     }
// }
// console.log(max3(12, 26, 42))

//Exercise 3

let vowels = ["a", "e", "i","o", "u"]
    function isCharAVowel (...vowels){ //insert vowel values
        if (vowels == isCharAVowel ){ //if letter is equal to one of the vowel values
        console.log(true) //print vowel
        }else{
            console.log(false)
        }
        
    }console.log(isCharAVowel("b"))
