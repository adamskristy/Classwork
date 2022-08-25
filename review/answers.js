////////////////////////////////////////////////
///Easy Going
////////////////////////////////////////////////
// for (let i = 1;i <= 20; i++){
//     console.log(i)
// }
////////////////////////////////////////////////
///Get Even
////////////////////////////////////////////////
// for (let i = 0; i <= 200; i += 2) {
//     console.log(i)
    
// }

////////////////////////////////////////////////
///Fizz Buzz
////////////////////////////////////////////////
// for(let i = 0; i < 100; i++){
//     if(i % 15 === 0){
//         console. log("FizzBuzz")
//     }
//     else if(i % 3 === 0) {
//         console. log("Fizz")
//     }
//     else if(i % 5 === 0){
//         console.log("Buzz")
//     }
//     else{
//         console.log(i)
//     }
// }

////////////////////////////////////////////////
///Wild Wild Life
////////////////////////////////////////////////
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant", 5000, "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-to"]
// const dart = ["D'art", "Demogorgan Dog", 2, "Upside Down"]

// plantee[2] = 5001
// console.log(plantee)

// wolfy[3] = "Gotham City"
// console.log(wolfy)

// dart.push("Hawkins")
// console.log(dart)

// wolfy.shift()
// console.log(wolfy)

// wolfy.unshift("Gameboy")
// console.log(wolfy)

////////////////////////////////////////////////
///Yell at the Ninja Turtles
////////////////////////////////////////////////
// const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
// for (const turtle of ninjaTurtles) {
//     console.log(turtle.toUpperCase())
// }

////////////////////////////////////////////////
///Methods, Revisited
////////////////////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']

//console.log(favMovies[8])

//console.log(favMovies.sort())
//sorted the array in alphabetical order, it created a reference to originial array

favMovies.push("Guardians of the Galaxy") // added to end of array
//console.log(favMovies)

favMovies.reverse() //reversed the array
//console.log(favMovies)

favMovies.shift() //removed the first element of array
//console.log(favMovies)

favMovies.unshift() //
//console.log(favMovies)

//console.log(favMovies.indexOf("Django Unchained"))
favMovies.splice(15,1, "Avatar")//removed django and add avatar
//console.log(favMovies)

const halfFavMovies = favMovies.splice(9,9)//removed half of array, permanently alters
//console.log(favMovies)

//console.log(halfFavMovies) //logs the half that was removed

console.log(favMovies.indexOf("Fast and Furious"))// return zero

////////////////////////////////////////////////
///Where is Waldo
////////////////////////////////////////////////


////////////////////////////////////////////////
///Excited Kitten
////////////////////////////////////////////////


////////////////////////////////////////////////
///Find the Median
////////////////////////////////////////////////