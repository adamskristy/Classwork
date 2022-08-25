// DOM Events
//examples: user moves or clicks mouse, press a key, form submited, page finished loading

//Event listener/event handlers
// function or callback function that is called when an event fires

//HTML (inline) (seperation of concerns, do not use)
//<button> id = "reset-btn" onclick= "reset()">

//Assigning to DOM elements properties
//restBtn.onclick = reset;

//Calling on DOM element (use this one)
//resetBtn.addEventListener()

//Registering an event listener

//element.addEventListener(<event-name>,<callback>,<use-capture>)

//event-name - name of string
//callback - function we want to execute, passed as event object in arguement
//use-capture - boolean, optional
//returns an object

//////////////////////////////////////////////////////////////
//////// Event Practice
//////////////////////////////////////////////////////////////

//first select the element we want and store in variable (btn)
const btn = document.querySelector('button')

//attach event listener to element
//pass two argurement (type),(callback)
//example uses anonymous function

btn.addEventListener('click', function(event){
    //evt is special param representing event object
    //event object has all info needed about event
    //and element that caused it
    console.log(event.target);

    //btn, evt.target, and all this represents same
    //button element
})


//Examining the event object
//target property shows



btn.addEventListener('click', function (evt) {

    //Creating a new element and store in li
    const li = document.createElement('li')
    console.log(li)

    //select the input and store variable (input)
    const input = document.querySelector('input')
    console.dir(input)

    //input elements need to access "value property"
    console.log(input.value)

    //target textcontent propert of li tag
    //and we assign it the value of our input
    li.textContent = input.value 
    
    //select ul tag and then add the new li tag,
    //which has new comment to selected ul
        //one way
        const ul = document.querySelector('ul')
        ul.appendChild(li)

        //other way
        document.querySelector('ul').appendChild(li);

    //clearing the input
    input.value =''

})

//store in btn and then select
//use add event listener, want something to happen
    //type of event click
    //call back
//function create element and store in li
//select input element, has what new comment will be
//select with query, store in input
//


////////////////////////////////////////////////
/////
///////////////////////////////////////////////

//event bubbling
//when an event occurs on and object
//whether listened or not, event bubbles up through the DOM

//evetnt bubbling allow event delegation

//Event Delegation
//instead of adding event listeners to each li tag
//add one to ul tag


// select the ul tag
const ul = document.querySelector('ul')
//add event listener
ul.addEventListener('click', handleClick)

function handleClick(event){
    // console.log('clicked on event...')
    // console.log(event)
    // console.log(event.target)
    //event.target.style.color = "blue", will change all to blue
//console.log(event.target)

console.log('clicked on...', event.target.tagName)

    if(event.target.tagName === "LI"){
        event.target.style.color = "blue"
    }
}

//select the li
// const li = document.querySelector('li')
// li.addEventListener('click', changeColor)
// li.target.style.color = "red"
//     function changeColor(){
//         li.style.color = "blue"
// }


//localName
//nodeName
//tagName

//ul.removeEventListener("click", handleClick)

