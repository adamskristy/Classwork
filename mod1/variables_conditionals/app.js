 let ages;
// able to change

const firstName = "kristy";
//constant variable, not able to be changed
//first error was missing quotes so not known as string
//second error capital K

console.log(firstName)


//Exercise1

let num1 = 4;
let num2 = 8;
let sum = num1 + num2;
console.log(sum);


//Exercise2

let num3 = 20;
let num4 = 234;
newSum = num1 * num4;
console.log(newSum);

//Exercise3

let num5 = 45;
let num6 = 42;
let num7 = 2;
let num8 = 100;
let num9 = -4;
let num10 = -1;

let avg1 = (num1 + num2 + num3 + num4 + num5) / 5;
let avg2 = (num6 + num7 + num8 + num9 + num10) / 5;
//question easier way to write?

let bigAvg = (avg1 + avg2) / 2;

console.log(bigAvg);

//Exercise4

let myVar = (4 + 10 + 22 + -30 + 55) / 5
let myVar2 = (68 + 7 + -22 + 9 + 100) / 5;
let bigVar = (myVar + myVar) / 2;
console.log(bigVar);

let box1 = 'hello';
let box2 = 'class';
let box3  //undefined or empty 

box3 = box1; // giving box3 values of hello, box1 is still hello
box1 = box2; // giving box one value of class, box2 is also class
box2 = box3; // giving box2 value of hello

console.log(box1 +' '+ box2)

//--------------------------------------------------------------

//Condtionals

let x;

if (1 > 1) {
    console.log("true")
} else {
    console.log ('false')
}


//Exercise1 positive and negative not even or odd

let num = 9;

if (num > 0 ){
    console.log("positive")
}else {
    console.log("negative")
}

//Exercise2

let age = 18;

if (age <= 18){
    console.log("Access Denied")
} else {
    console.log ("Access Granted")
}


//Exercise 3

let nums = -1;

if (nums > 0  && nums > 100 ){
    console.log("positive and greater than 100")
}else if (nums < 0 && nums < 100) {
    console.log ("positive and less than 100")
}else{
    console.log("negative")
}


//Exercise

if (grade >= 55) {
    if (grade >= 90) {
        console.log('A');
    } else if (grade >= 80) {
        console.log('B');
    } else if (grade >= 70) {
        console.log('C');
    } else {
        console.log('D');
    }
} else {
    console.log('F');
}

//------------------------------------------------------------

//blockscope , block around code

//outer if statement

let global;

if (true){
    let blockScoped = "block"; //declared in if statement so cannot use outside
        
        // inner (nested)
        if (true){

            console.log(blockScoped)

            if (true){

                console.log(blockScoped)
            }
        }



}

//--------------------------
//switch statement


let numbers = 1;
switch (numbers) { // checking variable against the case
    case 1: 
        console.log ('inside of case 1')
        break; //end the case
    case 2: 
        console.log('inside of case 2')
        break;
    default: //end the switch similiar to else
        console.log ("none of cases met")
        break;
}


//ternary operator
//return a value back to you, picking btwen values

let lighting = 'dark';

lighting === 'dark' ? "nighttime" : "daytime" // nighttime

console.log(lighting);

//condition     condition true    condition false
//ligthing is equal to dark so left of colon is value

//Exercise1

let letter = "Z";

switch (letter) {
    case "A": 
    case "E": 
    case "I": 
    case "O": 
    case "U": 
    default:
        console.log("constonant")
        break;

}

//Exercise2

let number = 3;

let numStatus = number % 2 == 0 ? "even" : "odd"

 console.log(numStatus);


