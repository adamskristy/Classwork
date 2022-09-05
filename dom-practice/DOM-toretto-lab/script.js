let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  let title = document.getElementById('main-title')
  title.innerText = "DOM's Homepage"

  // Part 2
  document.body.style.backgroundColor = "plum";
  //let body = document.querySelector ('body')
  //body.style.backgroundColor = ('blue')

  // Part 3
 let favThings = document.querySelector('#favorite-things');
 favThings.removeChild(favThings.lastElementChild);
 //document.querySelectorAll(#favorite-things li)
 //favThings[favThings.length - 1].remove();


  // Part 4
  let resizeTitle = document.querySelectorAll(".special-title")
  for (let i = 0; i < resizeTitle.length; i++){
    resizeTitle[i].style.fontSize = "2rem"
  }

  // Part 5
  // let raceList = document.querySelectorAll("#past-races li")
  // raceList[3].remove();

  let ul = document.querySelector("#past-races")
  //let lis = ul.querySelector("li")

  // Part 6
  let li = document.createElement("li")
  let text = document.createTextNode("Washington, D.C.")
  //li.textContent = "Washington, D.C." alternate way
  //textContent no need to create new variable
  li.appendChild(text)
  document.querySelector("#past-races").appendChild(li)


  // Part 7
  let blogPost = document.createElement('div')
  blogPost.classList.add('blog-post', 'purple')

  let h2Tag = document.createElement('h2')
  h2Tag.textContent = "Washington, D.C."
  blogPost.appendChild(h2Tag)

  let pTag = document.createElement('p')
  pTag.textContent = "Welcome to D.C"
  blogPost.appendChild(pTag)
  let main = document.querySelector('.main').appendChild(blogPost)

  // Part 8
  let quote = document.querySelector('#quote-title')
  quote.addEventListener('click', function (event){
    randomQuote()
  })

  // Part 9

  let blogPostAll = document.querySelectorAll('.blog-post')
  for (let items of blogPostAll){
    items.addEventListener('mouseenter', function (event){
      items.classList.toggle("red")
    })

    items.addEventListener('mouseout', function (event){
      items.classList.toggle("purple")
  })

  }

  // //alternative
  // let allPosts = document.querySelectorAll(".blog-post")
  // for (let i = 0; i < allPosts.length; i++){
  //   let post = allPosts[i]
  //   post.addEventListener("mouseenter", (e) => {
  //     post.classList.toggle("red")
  //   })
  // }

});
