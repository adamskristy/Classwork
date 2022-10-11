// DOM (Document Object Manipulation)

//document keyword (to access the DOM)
// DOM has methods we can use to traverse the DOM
    //getElementById
    //document.querySelector

let h1Tag = document.getElementById("title")

//h1Tag is an element modeled as an object
//it has a BUNCH of properties we can access
//with dot notation

console.dir(h1Tag) //use dir instead of log to show properties

console.log(h1Tag.innerText)

// SELECTING ELEMENTS

//select element by tag name, or does not have an id (p)
let pTag = document.querySelector("p")
console.log(pTag)

//select element by class name (".main-title")
// let pTag = document.querySelector(".main-title")

//select element by id name ("#title")
// let pTag = document.querySelector("#title")

/*
let pEl = document.querySelector(".cool")
console.log(pEl)
*/

//let pTag = document.querySelector(".p-tag")

// ACCESS THE TEXT AND innerHTML OF AN ELEMENT
//insert content in an element that includes markup

//gives us everything inside the tag include
console.log(pTag.innerHTML)

//gives us only the text inside the tag
console.log(pTag.textContent)

// console.log(pTag.innerText)
​
// console.log(h1Tag.innerText)

console.dir(pTag)

// STYLING ELEMENTS
//changing the style of an element/set CSS properties

//centers element
h1Tag.style.textAlign = "center"

//changes color
h1Tag.style.color = "blue"

/*
​
REVIEW:
​
There is a special document keyword (represents the DOM)
​
We can use methods to select specific elements:
    - getElementById -select by id
    - querySelector- does not have id
    - querySelectorAll- selecr multiple elements
    - setAttribute
​
Access the text and innerHTML of an element with:
    - textContent
    - innerHTML
​
The style property (object) can be used to make changes in CSS
    - style
​
It has a bunch of properties that represent CSS Properties for that element
    - color
    - backgroundColor
    - textAlign
​
*/

// MODIFYING ATTRIBUTES OF ELEMENTS

    //getAttribute(name)
    //setAttribute(name, value)
    //hasAttribute(name)



// ADDING A CLASS TO  A ELEMENT

// pTag.setAttribute("class", "my-special-class-name")

console.log(pTag.classList)

console.log(pTag.classList.contains("my-second-class"))
pTag.classList.toggle("my-second-class")

/*
//exercise adding an "a" element
let aLink = document.querySelector("a")

aLink.setAttribute("href", "https://www.google.com")
*/

//  SELECTING MULTIPLE ELEMENTS

// selecting multiple elements by tag name
let liTags = document.getElementsByTagName("li")

console.log("byTagName method: ", liTags)

// selecting multiple elements by className
let liTags2 = document.getElementsByClassName("comment")

console.log("byClassName method: ", liTags2)

console.log(liTags2[0])

// selecting multiple elements by whatever you like
let liTags3 = document.querySelectorAll(".comment")

console.log(liTags3)


// we can iterate over our array of elements 
// (HTMLCollection or NodeList)


console.log('looping with for of...')
// with a for of loop...
for (let li of liTags3) {
    console.log(li)
}

console.log('looping with for loop...')
// with a regular for loop...
for (let i = 0; i < liTags3.length; i++) {
    console.log(liTags3[i])
}

console.log('looping with forEach...')
// with a forEach array method
liTags3.forEach((element) => console.log(element))

/*
//for of loop that chnages font size of all comment elements to 30px
for (let li of liTags3){
    li.style.fontSize = "30px"
}

*/





