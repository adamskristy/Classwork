var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

let mainEl = document.querySelector('main')

//1.1
mainEl.style.backgroundColor= "var(--main-bg)"

//1.2

//mainEl.setAttribute("h1", "SEI ROCKS")
const tag = document.createElement("h1")
const text = document.createTextNode("SEI ROCKS")
tag.appendChild(text)
mainEl.appendChild(tag)

//mainEl.innerHTML = "<h1>SEI Rocks!</h1>"

//1.3
mainEl.classList.add("flex-ctr")

//2.0
const topMenuEl = document.querySelector("#top-menu")

//2.1
topMenuEl.style.height ="100%"

//2.2
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

//2.3
topMenuEl.classList.add("flex-around")

//3.1
//const aLink = document.createElement("a")
//aLink.setAttribute("href", "https://www.google.com")

for(let i = 0; i < menuLinks.length; i++) {
    let link = document.createElement('a')//create a tag
    link.href = menuLinks[i].href //add href
    link.innerText = menuLinks[i].text //add text
    topMenuEl.appendChild(link) //puts in top menu

}

///////////////////////////////////////////////////
/////DOM Lab Part 2
//////////////////////////////////////////////////

//4.0
const subMenuEl = document.querySelector('#sub-menu')

//4.1
subMenuEl.style.height = "100%"

//4.2
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"

//4.3
subMenuEl.classList.add("flex-around")

//4.4
subMenuEl.style.position ="absolute"

//4.5
subMenuEl.style.top = "0"

//5.1
const topMenuLinks = document.querySelectorAll('a')  //select all "a"
let showingSubMenu = false;

//5.2
topMenuEl.addEventListener('click', function(event){  //add event listener to topMenuEl
  event.preventDefault()    //call event object
  if (event.target.tagName != "A") { //if element clicked is not "a"
    return                          //immediately return
  }
  console.log(event.target.innerText)   //console log to verify

//5.3
  if (event.target.classList.contains("active")){ //if "a" clicked has class="active"
    event.target.classList.remove("active") //remove class from "a"
    showingSubMenu = false; //set to false
    subMenuEl.style.top = "0" //set to 0
    return    //exit
  }

//5.4
event.target.classList.remove("active") //remove active class

//5.5
event.target.classList.add("active") //add active class

//5.6
let activeLink;

for(let i = 0;  i < menuLinks.length)

// event.target.classList.add('active') 
//      if (event.target.text != "about"){ // eveything but about, 
//         showingSubMenu = true;          // about does not have sublinks property
// }
// else{
//   showingSubMenu = false;
// }

})









 

