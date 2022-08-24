var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
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