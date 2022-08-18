// ARRAYS

let arr = [3, 10, 25]

//for of loop
//super simple to loop through strings and arrays

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


//STRINGS methods


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
//.join, array method, array back into a string


//for of loop
//super simple to loop through strings and arrays


// let str = "bobby"
// for(let character of str){
//     console.log(character)
// }



