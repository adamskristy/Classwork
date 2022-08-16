//Functions
//provide reuse & documentation

console.log()
//log is method and console function?


//Function Declaration / Definition
function sayHello() { //function keyword (instructions)
    return 'Hello!' //scope
}

//gets hoisted (moved to top), so able to use anywhere
//give name after function keyword



//Function Expression,
//assigning function w/o name
//cannot be called before they are defined
const sayHi = function () { //the constant sayHi is assigned to be a function
    return 'Hi'  //return sends back value we can use
}


//Arrow function
const sayHey = () => 'Hey!'

//dont need return, its implied if single line
//similiar to expression



//Calling functions
sayHello()  // 'Hello!'

console.log(sayHey()) /// to call invoke functions, name and ()

//------------------------------------------------



//Parameter / arguements

function add(num1, num2) { // keyword/name( list parameters: space holders)
    return num1 + num2
}

console.log(add(2, 3)) // ( list of arguments: specific values)
console.log(add(5, 5)) 
console.log (add ('Bob', 'The Builder'))



Exercise1

function computeArea(width, height) {
    return "The area of a rectangle with a width of " + width + "and length of " + height + "is" + width * height + "square units."
}

console.log(computeArea(4, 7))


//Exercise2

function planetHasWater(planet){
    if (planet.toLowerCase() == "earth" || planet.toLowerCase() == "mars"){
        return true;
    }else{
        return false;
    }

 }

 console.log(planetHasWater("MARS"))




