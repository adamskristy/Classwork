// FIZZ BUZZ

// for loop
for (let i = 1; i < 100; i++){
    if( i % 3 === 0){
        console.log('Fizz');
    } else (i % 5 === 0 && i %! 3 === 0);{
        console.log('Buzz');
    }
}
//console.log(i);

//function

function fizzBuzzCount(i){ //need two parameters, two arguements, and a loop
    for(let i = 0; i < 100; i++) {
        if(i % 3 === 0 && i % 5 !=0){
            console.log('Fizz')
        } else if (i % 5 != 0 && i % 3 !=0 ) {
                console.log('Buzz')
        }
    } console.log(fizzBuzzCount(i))
} 


//num less than num2, while loop

function fizzBuzzThing(num1, num2){
    while(num1 < num2){ //
        for(let i = 0; i < 100; i++) {
            if(i % 3 === 0 && i % 5 !=0){
                console.log('Fizz')
            } else if (i % 5 != 0 && i % 3 !=0 ) {
                    console.log('Buzz')
            }
        } console.log(fizzBuzzCount(i))  
    }
}

// if div3, nest if div 5 and div 5


// fancy way
for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)



// LOGIC PRACTICE

// Function written
function fizzBuzz(){
    // testing the function
    // print numbers 1 - 100 
    // make a for loop
    for(let i = 1; i <= 100; i++){
        // how to start counting
        console.log(i)
        // for numbers divisible by 3 print fizz
        if(i % 3 == 0 && i % 5 != 0){ //if i is divided by 3 and the remainder is zero
            // print fizz
           console.log('Fizz')
        } else if (i % 5 == 0 && i % 3 != 0){ ///if i is divided by 5 and the remainder is zero
            // print buzz
            console.log('Buzz')
        } else if (i % 3 == 0 && i % 5 == 0){
            console.log('FizzBuzz')
        } else{
            console.log(i)
        }
    }

    //console.log('number')
}

// call the function
fizzBuzz();

let n = 0;

while (n < 3) {
  n++;
}