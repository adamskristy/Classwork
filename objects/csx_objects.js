// // Challenge: Objects - Iterating with for... in

// const checkObj = {
//     oddNum: 1,
//     evenNum: 2,
//     foundNum: 5,
//     randomNum: 18
//   };
  
//   const objToArray = [];
//   // ADD CODE HERE

// for(const key in checkObj){
//   // console.log(checkObj[key])
//   if(checkObj[key] >= 2){
//     console.log(checkObj[key])
//     //objToArray.push(checkObj[key])
//     let result = checkObj[key]
//     //result.push(objToArray)
//   }
//   return objToArray
// }

// console.log(objToArray)

//   //push items into the array
//   //if greater than or equal to 2

// //how to push an object into an array <---look up

// //template from VSCode
// // for (const key in object) {
// //   if (Object.hasOwnProperty.call(object, key)) {
// //     const element = object[key];
    
// //   }
// // }

// //correct code
// for(const key in checkObj){
//   if(checkObj[key] >= 2){
//      objToArray.push(checkObj[key])
//   }
// }

// console.log(objToArray)


// //Challenge: Objects - Iterating with a for loop
// const checkObj = {
//   oddNum: 1,
//   evenNum: 2,
//   foundNum: 5,
//   randomNum: 18
// };

// let divBy6 = false;
// // ADD CODE HERE

// const objToArray = Object.values(checkObj)
// for(let i = 0; i < objToArray[i]; i++) {
//   if(objToArray[i] % 6 === 0){
//      divBy6 = true;
//      }
// }

// // Challenge: Objects - Nested Arrays
// const nestedArr = [];
// // ADD CODE HERE
// for(let i = 0; i < 5; i++){
//   nestedArr.push('loop' + i, nestedArr[i]);
// }


// //Challenge: Objects - Adding Properties

// //what will final output look like?
// ///3, 1 - key, index

// const possibleIterable = [4, 3, 9, 6, 23];
// const divByThree = {};
// // ADD CODE HERE
// //iterate over possibleIterable using a for loop
// for(let i = 0; i < possibleIterable.length; i++){
//   //determine if current element is divisible by 3
//   if (possibleIterable[i] % 3 === 0){
//     //if so, assign new key-value pair to divbyThree
//     //key is current element, value is current index
//     divByThree[possibleIterable[i]] = i;
//     }
//   }

//   console.log(divByThree);

  //Challenge: Objects - Evaluating Keys

  const sumMe = {
    hello: 'there',
    you: 8,
    are: 7,
    almost: '10',
    done: '!'
  };
  let total = 0;
  // ADD CODE HERE
  
  for (const key in sumMe){
    if(Number.isInterger){
       key + total;
       }
  }
