// //Using a for loop, decrement countDown by one each time the loop runs until it equals 0, 
// //making use of looping functionality instead of logging each number separately.

// let countDown = 10;

// for(let i = 1; i <= 10; i++){
//   countDown--;// -> should print 0;
// }


// //-----------------------------------------------


// // Uncomment the below line to check your work
//  console.log(countDown) // -> should print 0;

// //1. Iterate through the synonyms array using a for loop, 
// //pushing a greeting string with the format "Have a [synonym] day!" into the greetings array.

// //2. Use a second for loop to iterate through the greetings and console.log() each greetings.

// const synonyms = ['fantastic', 'wonderful', 'great'];
// const greetings = []

// // 1.
// // Loop through the synonyms array. Each time, push a string into the greetings array. 
// // The string should have the format 'Have a [synonym] day!'
// // ADD CODE HERE

// for (let i = 0; i < synonyms.length; i++){
//  greetings.push('Have a ' + synonyms[i] + ' day!')
// }


// // 2. 
// // Loop through the greetings array, logging each greeting to the console:
// // 'Have a fantastic day!'
// // 'Have a wonderful day!'
// // 'Have a great day!'
// // ADD CODE HERE

// for(let j = 0; j < greetings.length; j++){
//   console.log(greetings[j])
// }

// //--------------------------------------------------------------


// //For this challenge, loop through the arrays and push a string with the format 
// //"My name is [firstName] [lastName] and I am from [place]" into the array holding the respective bios.

// const firstNames = ["Jon", "Arya", "Jamie"];
// const lastNames = ["Snow", "Stark", "Lannister"];
// const places = ["The Wall", "Winterfell", "Kings Landing"];


// const bios = [];

// // Loop through your arrays and store the following strings in the bios array:
// // 'My name is Jon Snow and I am from The Wall'
// // 'My name is Arya Stark and I am from Winterfell'
// // 'My name is Jamie Lannister and I am from Kings Landing'

// // ADD CODE HERE
// for(let i = 0; i < firstNames.length; i++){
// 		 bios.push('My name is ' + firstNames[i]+ ' ' + lastNames[i] + ' and I am from ' + places[i])
//   }
//   console.log(bios)
// //use push to insert everything into empty variable 


// //------------------------------------------------------


// //You are given an array of five numbers called increaseByTwo. 
// //Use a for loop to iterate through the array and increase each number by two.

// const increaseByTwo = [1, 2, 3, 4, 5];
// // ADD CODE HERE

// for(let i = 0; i < increaseByTwo.length; i++){//use .length to iterate through array
//   increaseByTwo[i] += 2; //at the [] index of the array. add 2 to the number in that index
// }

// // Uncomment the line below to check your work!
//  console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];


// function add(...numbers){ 
//   console.log(numbers)
// }
// add(4, 5, 6, 10, 100, 50) 
