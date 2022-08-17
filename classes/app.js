// OOP

// Classes 

//are blueprints used to create objects of certain types
//also known as constructor functions
//easily create objects with similar properties


// *Encapsulation*
//bundling data in an object, properties with methods
//everything you need is inside the object



// class Vehicle {

//     //vin: 'X123Y'
//     //make: 'Boeing'
    
//     // constructor() {} //even if you dont make one a default is present but no parameters? will show?
//     //constructor is a method
//     //constructor initializes and instance of the class



//     constructor(vinParam, makeParam, modelParam,) {
//         this.vinParam = vinParam; //this, will refer to current obj being referenced
//         this.makeParam = makeParam;
//         this.modelParam = modelParam;
//         this.running = false;
//         console.log('creating anew instance of Vehicle')
//     }

//     goVroom() {
//         console.log('vroom!')
//     }

//     start() {
//         this.running = true;
//         console.log('running')
//     }

//     stop() {
//         this.running = false;
//         console.log('stopped')
//     }

//     toString() { //will override built in method
//         return ' Vehicle (' + this.vin + ') is a ' + this.make + ' model ' + this.model;
//     }
// }

// const toyota = new Vehicle('X123Y', 'Boeing')
// //v1 is instance of the class
// //instantiate with new keyword

// const tesla = new Vehicle()
// const car = new Vehicle('VIN489308', 'Hyundai','Sonata')

// //console.log(toyota, tesla)
// // output 
// //Vehicle { vinParam: 'X123Y', makeParam: 'Boeing' } 
// //Vehicle { vinParam: undefined, makeParam: undefined }

// console.log(car)
// car.goVroom()
// car.start()
// car.stop()

// //prototype method/ instance method
// // for each

// // let arr = [1, 2, 3]
// // arr.forEach()

// // let arr2 = new Array(1, 2, 3)
// // console.log(arr2)
// // //output [1, 2, 3]

// // arr2.forEach((x) => console.log(x))
// // //output 1 2 3

// //math.random()
// //Math is built in call
// //random is static method

// // *Inheritance*
// //subclasses inherit from parent classes

// //console.log(hyundai.toString())
// //output  [object Object]
// //created toString method in object, and overidded code to do something else


// //--------------------------------------------

// //Exercise 1

// class Cat {
//     constructor(name, color, age, personality){
//         this.name = name;
//         this.color = color;
//         this.age = age;
//         this.personality = personality;
//         this.hungry = true
//     }
//     meow(){
//         console.log('meow')
//     }
//     purr(){
//         console.log('purr')
//     }
//      eat(){ 
//             this.hungry = false
//             console.log('your cat has been fed')
//     }
// }

// //running code to check if objects and methods are working
// const Cat1 = new Cat('Garfield','orange',10, 'frisky', false) 
// const Cat2 = new Cat ('Kitty','grey', 1, 'shy', true)

// //console.log(Cat1,Cat2)

// Cat1.meow()
// Cat2.meow()

// Cat1.purr()
// Cat2.purr()

// console.log(Cat1.hungry)
// Cat1.eat()
// console.log(Cat1.hungry)

// console.log(Cat2.hungry)
// Cat2.eat()
// console.log(Cat2.hungry)

// //Exercise 2

// class Pirate {

//     constructor(name, age, beardcolor ){
//         this.name = name;
//         this.age  = age
//         this.drunk = false;
//         this.beardcolor = beardcolor; 
//     }

//     talk(){
//         console.log ('yarr')
//     }
//     drink(){
//         this.drunk = true
//         console.log('Slow down there Matey-y!')
//     }
//     sail(){
//         if(this.drunk = true){
//             console.log('Portside')
//         }else{
//             console.log(Starboard)
//         }
//     }

// }

// const Pirate1 = new Pirate()


// //Extra exercise

// class Car {
//     constructor(number ){
//         this.number
//     }
// }


// //-------------------------------------------

// class Character {
//     constructor(number ){
//         //this.loveDogs = lovesDogs || true;  //short-circuit evaluation
//     }
//     smite(){
//         console.log('I smited thee.')
//     }
// }

// // use extend keyword to inherit properties and methods from parent or super class
// //child class and/or sub class

// class Hobbit extends Character{
//     constructor(name, age, eyes, hair){ //setup param
//         super(name, age, eyes, hair) //(will run methods from super class) pass param as arguements
//         console.log('inside of hobbit constructor...')
//     }
//     static steal(){
//         console.log()
//     }
//     greet(name){
//         console.log('teeheee hi ' + name)
//         super.smite() //will look in super parent class and find method and run it
//     }
// }

// const frodo = new Hobbit ('Frodo', 30, 'brown')

// frodo.smite()
// //can use even though not actually in class

// frodo.greet('Sam')
// //will output greet method and smite method

// Hobbit.steal()


//Exercise 1
//not instatiating, so no need for constructor

// class Governor {
//     static party = "Democrat"; //property
//     static lobbyForVotes(){  //method
//         return 'Vote for Me!';
//     }
// }

// console.log(Governor.party)
// console.log(Governor.lobbyForVotes())


//Exercise 2

class Person {
    constructor(name, age, uniform, company  ){
        this.name = name;
        this.age = age;
        this.uniform = uniform;
        this.company = company;
    }
}

class PostalWorker extends Person {
    work(){
        console.log('Deliver Mail')
    }
    seeDog(){
        console.log('Run!')
    }
}

class Chef extends Person {
    cook(){
        console.log('Bon Appetit')
    }
    serveFood(){

    }
}

const post1 = new PostalWorker('John', 27, 'brown', 'UPS');
const post2 = new PostalWorker('Carla', 33, 'purple', 'FedEx')

const chef1 = new Chef('George', 56, 'white', 'Mortons');
const chef2 = new Chef('Betty', 33, 'black', 'Chilis')






