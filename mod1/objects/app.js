//OOP - Object oriented programing

//objects are colletion of zero or more properties
//properties are key: value pair

//Ex Dictionaries, key is word, definition is value

// object literal
// let obj = {

// }

let cat ={
    name: 'Mr. Bean',
    fur: 'grey, black, and white',
    legs: 4,
    canSpeakFrench: false,
    //behaviors == functions
    meow: function() { // method
        console.log('meow');
    },
    purr: () => {
        console.log('purr');
    },
    talk(speech) { //another way to create a method inside a object
        console.log(speech);
    }
}


//-------------------------------

console.log(cat)
//output { name: 'Mr. Bean', fur: 'grey, black, and white', legs: 4 }

//access property with dot notation
console.log(cat.name)

//can also access properties with []
console.log(cat['name'])

//when you dont know property name
let propName = 'fur'
console.log(cat[propName])

//add properties, dot notation and assignment
//also change properties
cat.breed = 'calico'

console.log(cat)
//output { name: 'Mr. Bean', fur: 'grey, black, and white', legs: 4, breed: 'calico'}

//if want to add to properties later, make array and add on that way

//if add multiple properties with same name, takes the last one, most recent


cat.meow();  //invoke function within object
//output meow
//method : functions inside of objects?
cat.talk('hello');


//-------------------------------------------


if (cat.canSpeakFrench === true) {
    console.log('oui')
} else {
    console.log('no')
}
//output no


for (let i = 0; i < cat.legs; i++){
    console.log('LEG')
}
//output LEG LEG LEG LEG


//check if property exists
console.log('Does my cat have legs?')
if (cat.science) { //undefined
    console.log('oui')
} else {
    console.log('no')
}

//output no, because.science is not a defined property
//if console.log cat.science - undefined


//-----------------------------------------------------------------

//FOR IN LOOP
// loops through properties of an object
//keys are properties
//values are data types (string, array, objects, etc)
//keys reference values

// for (const variable in object) {
//     statement
//   }
  


for (let key in cat) {  //key represents ... fur, name, legs, age, meow
    console.log('key: ', key)
    //prop is string value
    console.log('value: ', cat[key])  // access the value , cat['fur']
    console.log();
}

// output example
// key:  name
// value:  Mr. Bean
// etc ...

// use case
// given an object and not know its properties and need to access that information

//------------------------------------------------

// create two object, 
// at least 3 properties with 3 different data types, 2 methods
// access properties and run the methods


//obj 1

let car = {
    make: 'hyundai',
    year: 2016,
    color: ['grey', 'metallic'],
    fuel: true,
    drive(){
        console.log('vroom vroom')
    }
} 

console.log(car)

//obj 2

let playGame = {
    game: 'skyrim',
    startPlayingAt: 2100,
    havingFun: true,
    shout(){
        console.log('Fus Ro Dah')
    }
} 

console.log(playGame)
playGame.shout();


//-----------------------------------------------

//Exercises

//create function
//takes string as arguement
//returns string as object and keeps count of occurences (how many times letter occurs)

//need somewhere to store string
//converts string to obj


let str = []
let obj = {

}

// characterCounter - function
// str - parameters (place holder for argument/string)
// strArr - stored string split up

// function characterCounter(str){ //create func and take str as arguement
//     for(let i = 0; i < str.length; i++){ //loop through entire string
//         for() {  //count occurences?
            
//         }
//         //take string store in array  
//     let strArr = str.split('') 

//     }
    
// }

characterCounter('hello'); // character and how many times

//output h: 1, e: 1, l: 2, 0: 1

// * can loop through with for of instead of for loop


const string = 'hello'
console.log(string.split('')) //split
console.log([...string]) // spread
//output [ 'h', 'e', 'l', 'l', 'o' ]


//Rasheem code example
function count(str){
    let obj={};
    for(let i=0; i < str.length; i++){
        
        let char = str[i]; //character at this index in string
         if(obj[char]) {  // if obj
            obj[char] ++;

        }
         else {
            obj[char] =1;
         }
    }
        return obj;
}
  console.log(count("Mississippi"));

// -------------------------------------------

