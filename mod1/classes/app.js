// OOP

// Classes 

// are blueprints used to create objects of certain types
// also known as constructor functions
// easily create objects with similar properties


// *Encapsulation*
// bundling data in an object, properties with methods
// everything you need is inside the object



class Vehicle {    // classes begin with Capital letters

    constructor() {} 
    //constructor is a method, initializes an instance of the class
    //take parameters
    //even if you dont make one a default is present 

    //vin: 'X123Y'
    //make: 'Boeing'


    constructor(vinParam, makeParam, modelParam,) {
        this.vinParam = vinParam; //this, will refer to current obj being referenced
        this.makeParam = makeParam;
        this.modelParam = modelParam;
        this.running = false;
        console.log('creating anew instance of Vehicle')
    }

    goVroom() { //methods or actions of object
        console.log('vroom!')
    }

    start() {
        this.running = true;
        console.log('running')
    }

    stop() {
        this.running = false;
        console.log('stopped')
    }

    toString() { //will override built in method
        return ' Vehicle (' + this.vin + ') is a ' + this.make + ' model ' + this.model;
    }
}

const airplane = new Vehicle('X123Y', 'Boeing', '787')
//airplane is instance of the class
//instantiate with new keyword

const car = new Vehicle('VIN489308', 'Hyundai','Sonata')

console.log(car, airplane)  // can log two with comma
// output 

//Vehicle { vinParam: 'X123Y', makeParam: 'Boeing' } 
//Vehicle { vinParam: 'VIN489308', makeParam: 'Hyundai' }

console.log(car) 
car.goVroom() //class.method()
car.start()
car.stop()

//---------------------------------------

//Not sure about this section

//prototype method/ instance method
//built-in tasks performed by an object instance

// For Each is instance method

let arr = [1, 2, 3]
arr.forEach()

let arr2 = new Array(1, 2, 3)
console.log(arr2)
//output [1, 2, 3]

arr2.forEach((x) => console.log(x))
//output 1 2 3

math.random()
// Math is built in call
// random is static method

// *Inheritance*
// subclasses inherit from parent classes

console.log(hyundai.toString())
//output  [object Object]
//created toString method in object, and overidded code to do something else

//--------------------------------------------

//Exercise 1 CAT

class Cat {
    constructor(name, color, age, personality){
        this.name = name;
        this.color = color;
        this.age = age;
        this.personality = personality;
        this.hungry = true
    }
    meow(){
        console.log('meow')
    }
    purr(){
        console.log('purr')
    }
     eat(){ 
            this.hungry = false
            console.log('your cat has been fed')
    }
}

//running code to check if objects and methods are working
const Cat1 = new Cat('Garfield','orange',10, 'frisky', false) 
const Cat2 = new Cat ('Kitty','grey', 1, 'shy', true)

//console.log(Cat1,Cat2)

Cat1.meow()
Cat2.meow()

Cat1.purr()
Cat2.purr()

console.log(Cat1.hungry)
Cat1.eat()
console.log(Cat1.hungry)

console.log(Cat2.hungry)
Cat2.eat()
console.log(Cat2.hungry)

//Exercise 2 PIRATE

class Pirate {

    constructor(name, age, beardcolor ){
        this.name = name;
        this.age  = age
        this.drunk = false;
        this.beardcolor = beardcolor; 
    }

    talk(){
        console.log ('yarr')
    }
    drink(){
        this.drunk = true
        console.log('Slow down there Matey-y!')
    }
    sail(){
        if(this.drunk = true){
            console.log('Portside')
        }else{
            console.log(Starboard)
        }
    }

}

const Pirate1 = new Pirate()

//Extra exercise CAR

class Car {
    constructor(number ){
        this.number
    }
}

//-------------------------------------------

// Exercise 1 GOVERNOR
// not instatiating, so no need for constructor

class Governor {
    static party = "Democrat"; //property
    static lobbyForVotes(){  //method
        return 'Vote for Me!';
    }
}

console.log(Governor.party)
console.log(Governor.lobbyForVotes())


//Exercise 2 PERSON

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


//Exercise 3 BANK ACCT

//acctNum generated in constructor not passed in

//*acctNum, will be same number if keep console logging
//but if create new object it will be a new number
// when we instatiate, the constructor run only once for each instance

class BankAccount {
    constructor(ownerName, balance){ 
        this.ownerName = ownerName; 
        this.balance = balance;
        this.acctNum = Math.floor(Math.random() * 1000); //acctNum will be generated randomly inside constructor, not manually entered
    }
    deposit(depositedAmount){
        this.balance =+ depositedAmount
        console.log('current balance after deposit: ' + depositedAmount + 'is' + this.balance)
    }
    withdraw(withdrawnAmount){
        this.balance -= withdrawnAmount
        console.log('current balance after withdrawal: ' + withdrawnAmount + 'is' + this.balance)
    }
}

class CheckingAccount extends BankAccount{
    constructor(ownerName, balance, overdraftEnabled = true){ // need constructor since adding new property
        super(ownerName, balance) //calls properties from parent class
        this.overdraftEnabled = this.overdraftEnabled;
    }
}withdraw(amount); {
    if(amount > this.balance && this.overdraftEnabled === true){
        let overDraftFee = 20;
        this.balance -= (amount + overDraftFee)
        console.log('this transaction overdrafts your account ')
    }else{
        console.log('you cannot withdraw more than you have')
    }
}

class SavingsAccount extends BankAccount{ // no constructor because not adding new property
    withdraw(){
        console.log('you cannot withdraw from this savings account')
    }
}

const kristy = new BankAccount('kristy', 100000)
