// // I. Variables & datatypes

// // A. Q + A

// /*
// 1. How do we assign a value to a variable? 
//     With an assignment operator ( = )

// 2. How do we change the value of a variable? 

// 3. How do we assign an existing variable to a new variable? 
//     We can change value with assignment operator but only if initialized with let.

// 4. Remind me, what are declare, assign, and define?
//     Declare is to declare/initialize a variable, assign is to give a value, and define is to define the datatype

// 5. What is pseudocoding and why should you do it?
//     writing out the steps and methods you are going to take or need to do in order to solve problem

// 6. What percentage of time should be spent thinking about how your going to solve a problem vs actually typing in code to solve it?
//     Spend more time thinking about how to solve
// */

// // B. Strings

//     //1
//     let firstVariable;

//     //2
//     firstVariable = "Hello World";

//     //3
//     firstVariable = 42;

//     //4
//     let secondVariable = firstVariable;

//     //5
//     secondVariable = "code, pray, cry";

//     //6
//     console.log(firstVariable); 
//     //output 42

//     //7
//     let yourName = 'Kristy';
//     let intro = 'Hello, my name is ' + yourName
//     console.log(intro)
//     //Hello, my name is Kristy


// // C. Booleans

//     //7. >
//     //8. <
//     //9. ===
//     //11. ||
//     //12. && && && && && ||
//     //13. &&
//     //14. ===
//     //15. +, ===
//     //16. *, ===
//     //17. ==

// // D. The Farm

//     let animal = 'cow';

//     if(animal === 'cow'){
//         console.log('moooooo')
//     }else{
//         console.log('Hey! Your not a cow.')
//     }


// //E. Driver Ed
//     let age = 30;

//     if(age >= 16){
//         console.log('Here are the keys!')
//     }else{
//         console.log("Sorry, you're too young.")
//     }

// // II. Loops

// //A. The basics

//     // //1. 
//     // for (let i = 0; i <= 10; i++) {
//     //     console.log(i);
//     // }

//     // //2.
//     // for (let j = 400; j <= 10; j++) {
//     //     console.log(j);
//     // }

//     // //3.
//     // for (let x = 12; x < 400; x += 3) {
//     //     console.log(x);
//     // }

// //B. Get even

//     // for (y = 1; y <=100; y++){
//     //     if(y % 2 == 0 ){
//     //         console.log(y + '<-- is an even number')
//     //     }else{
//     //         console.log(y)
//     //     }
//     // }

// //C. Give me Five

//     for (number = 0; number <= 100; number++)  {
//         if(number % 5 == 0 && number % 3 == 0){
//             console.log('I found a ' + number + '. High five!' + ' Three is a crowd')
            
//         }else if (number % 5 == 0 || number % 3 != 0){
//             console.log('I found a ' + number + '. High five!')
//         }else if (number % 3 == 0 || number % 5 != 0){
//             console.log('Three is a crowd')
//         }
//     }

// //D. Savings Account <----- COME BACK TO THIS
//     const range = [1, 10]; //set range
//     const bank_account = ([num1, num2]) => {
//     let sum = 0;
//     for(let i = num1; i <= num2; i++){
//         sum += i;
//     };
//     return sum;
//     };
// console.log(bank_account(range));

// let bankAcct = 0;
// for(let i = 1; i <= 100; i++){
//       bank_account += 2*i;
//  }

// // III. Arrays & Control flow

// // A. Talk about it:
//     /*
//     1. What are the things in an array called?
//         elements

//     2. Do Arrays guarantee those things will be in order?
//         no

//     3. What reali-life thing could you model with an array?
//         any type of list
//     */

// // B. Easy Does It
//     let quotes = ['carpe diem', 'love not war', 'to infinity and beyond']

// // C. Accessing elements
//     const randomThings = [1, 10, "Hello", true]

//     /*
//     1. How do you access the 1st element in the array?
//         randomThings[0]

//     2. Change the value of "Hello" to "World"
//         randomThings[2] = "World"

//     3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
//         console.log(randomThings[0])
//         [ 1, 10, 'World', true ]
//     */

// // D. Change values
//     const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
//     /*
//     1. What would you write to access the 3rd element of the array?
//         ourClass[2]

//     2. Change the value of "Github" to "Octocat"
//         ourClass[4] = "Octocat"

//     3. Add new element, "Cloud City" to the array
//         ourClass.push("Cloud City")
//     */

// // E. Mix It Up
//     const myArray = [5, 10, 500, 20]

//     /*
//     1. Add the string "Ageon to the end of the array and add something else.
//         myArray.push("Aegon","Kelsier")

//     2. Remove the 5 from the beginning
//         myArray.shift()

//     3. Add the string "Bob Marley" to the beginning
//         myArray.unshift("Bob Marley")

//     4. Reverse the array using .reverse() 
//         myArray.reverse(), yes this mutates the array, mutates means the array changed,
//     */

// // F. Biggie Smalls
//     let int = 0;
//     function biggieSmalls (int) {
//         if(int < 100){
//             console.log("little number")
//         }
//         else if(int >= 100){
//             console.log("big number")
//         }
//     }

//     console.log(biggieSmalls(6))

// // G. Monkey in the Middle
//     let intNum = 0;
//     function monkeyMiddle (intNum) {
//         if(int < 5){
//             console.log("little number")
//         }
//         else if (int > 10) {
//             console.log("big number")
//         }
//         else{
//             console.log("monkey")
//         }
//     } console.log(monkeyMiddle(6))

// H. What's in Your Closet?

    const kristynsCloset = [
        "left shoe",
        "cowboy boots",
        'right sock',
        "GA hoodie",
        "green pants",
        "yellow knit hat",
        "marshmallow peeps"
    ];

    //Thom's closet is more complicated. Check out this nested data structure!!
    const thomsCloset = [
        [
            //These are Thom's shirts
            "grey button-up",
            "dark grey button=up",
            "light blue button-up",
            "blue button-up"
        ], [
            //These are Thom's pants
            'grey jeans',
            'jeans',
            'PJs'
        ],[
            //These are Thom's accessories
            "wool mittens",
            "wool scarf",
            "raybans"
        ]
    ];

    
    //1. What is kristyn wearing today?
        console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")
    
    //2. Add "raybans" to her closet after "yellow knit hat"
        //kristynsCloset.splice(6,0, 'raybans')
    
    //3. modify..."stained knit hat"
        //kristynsCloset[5] = "stained knit hat"
    
    //4-7 Put together an outfit for Thom
        //console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][1])

    //8. Get specific about what pjs Thom is wearing. Modify name of Pj pants to footie pajamas 
        console.log(thomsCloset[1][2] = "Footie Pajamas")

// IV. Functions

//A. printGreeting
    function printGreeting(name) {
        console.log("Hello there, " + name + "!")
    }
        console.log(printGreeting("Clarice"))

//B. printCool
    function printCool(name) {
        console.log(name + " is cool!")
    }
    console.log(printCool("Reptar"))

//C. calculateCube
    function calculateCube(edge) {
        return edge *= 3
    }

    console.log(calculateCube(3))

//D.isVowel 
    function isVowel(letter) {
        let result;
        result = letter == "a" || letter == "e" ||letter == "i" ||letter == "o" ||letter == "u" ||letter == "y";
        return result;
    }
    console.log(isVowel("b"))

//E. getTwoLengths
    function getTwoLengths(string1, string2) {
        let bothLengths = []; 
        bothLengths.push(string1.length);
        bothLengths.push(string2.length);
        return bothLengths;
        }

        console.log(getTwoLengths("turtle", "mississippi"))

//F. getMultipleLengths

    function getMultipleLengths(arr) {
        let newArr = [];
        for(let i = 0; i < arr.length; i++){ //iterating through arrays
            newArr.push(arr[i].length); //getting length of strings in array
        } 
        return newArr
    } 
    console.log(getMultipleLengths(["this", "is", "a", "long", "assignment"]));

//G. maxOfThree
    function maxOfThree(num1, num2, num3) {
        let max = Math.max(num1, num2, num3);
        return max;
    }

    console.log(maxOfThree(6, 9, 1))

//H. printLongestWord < ---- COME BACK
    function printLongestWord(arr) {
        let longestWord =[];
        for(let i = 0; i < arr.length; i++) {
            if (arr[i] > longestWord.length){
            longestWord = arr[i] 
            } 
        }
        return longestWord;
    }   
    console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big"]))

//Objects

//A. Make a user Object
    let user = {
        name: "Kristy",
        email: "kristy@email.com",
        age: 30,
        purchased: [],
    }

//B. Update the User
   user.email = "kristy2@email.com" 
   user.age++

//C. Adding keys and values
    user.location = "Maryland"