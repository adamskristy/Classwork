///CSX Challenges

//For Loops - Exercise

// let countDown = 10;

// for(let i = 1; i <= 10; i++){ 
//   countDown--;
// }

// console.log(countDown)

// //while this code is running the variable countdown is decrementing


 // original code
// for(let countDown = 10; countDown >= 0, countDown--;){
//   console.log(countDown)
// }


//For Loops and Arrays - Exercise

// need to loop through synonym array

//synonym[0]
//synonym[1]
//synonym[2]

//need to print greeting while looping through synonym array

//greeting[synonym[0]]
//greeting[synonym[1]]
//greeting[synonym[2]]

const synonyms = ['fantastic', 'wonderful', 'great'];

// for (let i = 0; i < synonyms.length; i++){
//   console.log(synonyms[i]);
// }

//first focus on looping through array
//loop through array with length
//had to remove greeting and strip down to bare  requirements
//code not working due to using comma instead of semicolon, and extra semicolon behind i++
//

//now add greeting

//const greeting = ['Have a ' + synonyms[0, 1, 2] + ' day!']
// const greetings = ['Have a ' + synonyms[i] + ' day']

// for (let i = 0; i < synonyms.length; i++){
//   return (synonyms[i]);

// }console.log(greetings);


//solution smh
//didnt event consider push method
//focused on storing text inside greeting and calling later


// for (let i = 0; i < synonyms.length; i++){
//   greetings.push('Have a ' + synonyms[i] + ' day');

// }console.log(greetings);



// for(let j = 0; j < greetings.length; j++){
//   console.log(greetings[j])
// }


//For Loops and Arrays Indices - Exercise

const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];


const bios = [];

// for(let i = 0; i < firstNames.length; i++){
//   for(let i = 0; i < lastNames.length; i++){
//     for(let i = 0; i < places.length; i++){
      
//     }
//     bios.push('My name is ' + firstNames[i]+ ' ' + lastNames[i] + ' and I am from ' + places[i] )
//   }
//   console.log(bios[i])
// }

//simplified

for(let i = 0; i < firstNames.length; i++){
  bios.push('My name is ' + firstNames[i]+ ' ' + lastNames[i] + ' and I am from ' + places[i] )    
    }
   console.log(bios)


//For Loops - Calculating Array Elements

// const increaseByTwo = [1, 2, 3, 4, 5];
// // ADD CODE HERE

// for(let i = 0; i < increaseByTwo.length; i++){
//   increaseByTwo[i] + 2;
// }

// // Uncomment the line below to check your work!
//  console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];

