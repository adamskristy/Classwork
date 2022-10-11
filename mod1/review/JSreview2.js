////////////////////////////////////////////////
///Easy Going
////////////////////////////////////////////////
for (let i = 1;i <= 20; i++){
    console.log(i)
}
////////////////////////////////////////////////
///Get Even
////////////////////////////////////////////////
for (let i = 0; i <= 200; i += 2) {
    console.log(i)
    
}

////////////////////////////////////////////////
///Fizz Buzz
////////////////////////////////////////////////
for(let i = 0; i < 100; i++){
    if(i % 15 === 0){
        console. log("FizzBuzz")
    }
    else if(i % 3 === 0) {
        console. log("Fizz")
    }
    else if(i % 5 === 0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}

////////////////////////////////////////////////
///Wild Wild Life
////////////////////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant", 5000, "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-to"]
const dart = ["D'art", "Demogorgan Dog", 2, "Upside Down"]

plantee[2] = 5001
console.log(plantee)

wolfy[3] = "Gotham City"
console.log(wolfy)

dart.push("Hawkins")
console.log(dart)

wolfy.shift()
console.log(wolfy)

wolfy.unshift("Gameboy")
console.log(wolfy)

////////////////////////////////////////////////
///Yell at the Ninja Turtles
////////////////////////////////////////////////
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
for (const turtle of ninjaTurtles) {
    console.log(turtle.toUpperCase())
}

////////////////////////////////////////////////
///Methods, Revisited
////////////////////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']

console.log(favMovies[8])

console.log(favMovies.sort())
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

console.log(halfFavMovies) //logs the half that was removed

console.log(favMovies.indexOf("Fast and Furious"))// return zero

////////////////////////////////////////////////
///Where is Waldo
////////////////////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                     ["Lucinda", "Jacc", "Neff", "Snoop"],
                     ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(1,1) //remove eggbert
//console.log(whereIsWaldo)

whereIsWaldo[1][2] = "No One"
//console.log(whereIsWaldo)

console.log(whereIsWaldo[2][1][1])

////////////////////////////////////////////////
///Excited Kitten
////////////////////////////////////////////////
for(let i = 0; i <= 20; i++){
    console.log("HSSSSSS")
}


let catMessages = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "why does the red dot always get away..."]
let message = 0;
for(let i = 0; i <= 20; i++){
    if(i % 2 === 0){
        message = catMessages[Math.floor(Math.random() * catMessages.length)]
        console.log(message[catMessages])
    }
    else{
        console.log ( "Love me, pet me! HSSSSSS!");
    }
    
}

////////////////////////////////////////////////
///Find the Median
////////////////////////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

//median is: put numbers in order, count total numbers,
//if even take two middle numbers and add them then divide by two
// if odd, take middle number

function median(arr) {

    nums.sort((a, b) => a - b); //sort the array
    const middle = Math.floor(nums.length / 2); // find midle of array
    const findMedian = nums.length % 2 === 1 ? // ( ternary) condition ?
      nums[middle] : //  if array length odd, take middle number (what happens if true)
      (nums[middle - 1] + nums[middle]) / 2; //  if array length even, take to median of two middle numbers (what happens if false)
    return findMedian;
  }
//console.log(median(nums))

////////////////////////////////////////////////
///Return of the Closets
////////////////////////////////////////////////
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
        "dark grey button-up",
        "light blue button-up",
        "blue button-up"
    ], [
        //These are Thom's pants
        'grey jeans',
        'jeans',
        'PJs'
    ],[
        //Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];


////////////////////////////////////////////////
///Alien Attire
////////////////////////////////////////////////
console.log(kristynsCloset)

const kristynsShoe = kristynsCloset.shift();
console.log(kristynsShoe)

thomsCloset.push(kristynsShoe)
console.log(thomsCloset)

////////////////////////////////////////////////
///Dress Us Up
////////////////////////////////////////////////

console.log("Kristyn is wearing a " + kristynsCloset[2]+ ", " + kristynsCloset[3]+ ", and a " + kristynsCloset[4])
console.log("Kristyn is wearing " + kristynsCloset[0]+ ", " + kristynsCloset[4]+ ", and a " + kristynsCloset[5])
console.log("Kristyn is wearing " + kristynsCloset[1]+ ", " + kristynsCloset[2]+ ", and a " + kristynsCloset[3])

console.log("Thom is wearing a " + thomsCloset[0][1]+ ", " + thomsCloset[1][2]+ ", and a " + thomsCloset[2][1])
console.log("Thom is wearing a " + thomsCloset[0][3]+ ", " + thomsCloset[1][1]+ ", and " + thomsCloset[2][2])
console.log("Thom is wearing a " + thomsCloset[0][2]+ ", " + thomsCloset[1][0]+ ", and " + thomsCloset[2][0])

////////////////////////////////////////////////
///Dirty Laundry
////////////////////////////////////////////////
    for(let i = 0; i < kristynsCloset.length; i++ ){
        console.log("WHIRR: Now washing item: " + kristynsCloset[i] )
    }

/////////////////////////////////////////////////
///Inventory
////////////////////////////////////////////////

console.log(thomsCloset[0])
console.log(thomsCloset[1])
console.log(thomsCloset[2])
