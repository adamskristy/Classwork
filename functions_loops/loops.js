// FOR LOOPS

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// inside parenthesis 3 statements
//statement 1: 
//declare and initialize a variable scoped to for loop
//"let i = 0;"

//statement 2:
// a condition that when true runs code in for loop
// "as long as i is less than 10"

//statement 3:
//incrementing of the variable in order to eventually break the loop
//"i++" , i increases by 1, terminating condition

//1: declare and initialize
//2: check if condition is true
//3: console log runs and prints 0
//4: variable i increments and become 1
//5: repeat step 2
//6: repeat step 3
//7: repeat step 4

//keywords to break out of loops
//break, break the loop
//continue, move on to next iteration of the loop

for (i = 2; i <= 10; i +=2) { // i=+ 1 = i = i+ 1
  console.log(i)
}


//write a for loop that counts down from 10 to 1

for (let down = 10; down >= 0; down--) {
    console.log(down);
}

//write loop for given input 1,3,5,7,9,2,4,6,8
for (i = 1; i <= 10; i +=2) { // i=+ 1 = i = i+ 1
    console.log(i)
}


//multiples of 3 start at 6 end 60
for (index = 6; index < 61; index +=3){
    console.log (index)
}


//##
let str= " "
for (i = 1; i <=7; i++){
    str += "#"
    console.log(str)
}

//using remainder operator %.....

for (let j = 0; j < 11; j%2==0) {  // missing way to increment, replace % equation with i++, put % in if
    console.log (j);
}

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//Write a loop that iterates from 1 - 20, odd, even, prime.....

for (let i = 1; i <= 20; i++) { //start at 1, end at 20, count up
    if (i == 1 || i == 3) {  // if i is equal to 1 or 3, odd
        console.log (i +' is an odd number');
    } 
        else if (i % 2 == 0) { // if i divides 2, 0 remainder, even
            console.log(i+ ' is an even number');
        } else if (i % 3 == 0) { // if i divides 2, 0 remainder, even
            console.log(i + ' is an odd number');
        } else {
            console.log(i + ' is a prime number');
        }
    }


//-----------------------------------

// WHILE LOOPS

let j = 1;

while (j < 10) {
    console.log(j)
    j++
}

// inside parenthesis 1 statement
//statement 1: 
//declare and initialize a variable scoped to for loop
//"let i = 0;" outside

//statement 2:
// a condition that when true runs code in for loop
// "as long as i is less than 10"

//statement 3:
//incrementing of the variable in order to eventually break the loop
//"i++" 


//multiples of 3
let i = 0;
while (i < 35 && i % 3 == 0)
{
    console.log(i+=3) //not outputtting interger so keeps going to 36
} // code goes to 36 in this format

let interger = 0; //set start number at 0
while (interger < 35){ //only looks for intergers less than 35
    console.log (interger) //prints number
    interger += 3        //increments number by 3
} // code stops at 33

let integer = 0;
while (integer < 35 && integer % 3 == 0){ // does both
    console.log(integer) //output of interget before incrementing
    integer+=3
} 


//multiples of 5
let int = 0;
while (int < 100){
    console.log (int)
    int += 5
} 


//print 0 - 20 divde 2 time 3

let banana = 0;
while (banana < 21 ){ //set banana range 0 - 20
    if (banana % 2 == 0) {  // if banana is able to be divided by 2 with zero remainder,
        console.log(banana * 3)  //then times by 3
    }
    banana++ //why is this out here? not sure...
}


//print prime numbers between 0 - 20

let prime = 0; //start of prime numbers is 2
while(prime < 20) { //set range btwn 0 - 20
    if (prime % prime == 0) //
    console.log(prime)
} prime++


//Bonus
let num5 = 10
let coins = 0
while (num >4){
    console.log(coins +=4)
    num5--
}
console.log('final' + coins)


    