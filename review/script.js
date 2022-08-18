// I. Variables & datatypes

// A. Q + A

/*
1. How do we assign a value to a variable? 
    With an assignment operator ( = )

2. How do we change the value of a variable? 

3. How do we assign an existing variable to a new variable? 
    We can change value with assignment operator but only if initialized with let.

4. Remind me, what are declare, assign, and define?
    Declare is to declare/initialize a variable, assign is to give a value, and define is to define the datatype

5. What is pseudocoding and why should you do it?
    writing out the steps and methods you are going to take or need to do in order to solve problem

6. What percentage of time should be spent thinking about how your going to solve a problem vs actually typing in code to solve it?
    Spend more time thinking about how to solve
*/

// B. Strings

    //1
    let firstVariable;

    //2
    firstVariable = "Hello World";

    //3
    firstVariable = 42;

    //4
    let secondVariable = firstVariable;

    //5
    secondVariable = "code, pray, cry";

    //6
    console.log(firstVariable); 
    //output 42

    //7
    let yourName = 'Kristy';
    let intro = 'Hello, my name is ' + yourName
    console.log(intro)
    //Hello, my name is Kristy


// C. Booleans

    //7. >
    //8. <
    //9. ===
    //11. ||
    //12. && && && && && ||
    //13. &&
    //14. ===
    //15. +, ===
    //16. *, ===
    //17. ==

// D. The Farm

    let animal = 'cow';

    if(animal === 'cow'){
        console.log('moooooo')
    }else{
        console.log('Hey! Your not a cow.')
    }


//E. Driver Ed
    let age = 30;

    if(age >= 16){
        console.log('Here are the keys!')
    }else{
        console.log("Sorry, you're too young.")
    }

//F.