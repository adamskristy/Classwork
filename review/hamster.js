class Hamster {
    constructor(petName){ //only passing a value for
        this.owner = ""; //set to empty string
        this.petName = petName;
        this.price = 15; // set to value
    }
    wheelRun(){
        console.log("squeak squeak")
    }
    eatFood(){
        console.log("nibble nibble")
    }
    getPrice(){
        return this.price;
    }
}

const newHamster = new Hamster('Oxnard');

console.log(newHamster)

class Person{
    constructor(name){
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = []
        this.bankAccount = 0;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getWeight(){
        return this.weight;
    }
    greet(){
        console.log("Hello " + this.name)
    }
    eat(){
        this.weight++;
        this.mood++
    }
    exercise(){
        this.weight--;
    }
    ageUp(){
       this.age++;
       this.height++;
       this.weight++;
       this.mood--;
       this.bankAccount += 10; // question
    }
    buyHamster(newHamster){ //by passing newHamster we have access to properties
      this.hamsters.push(newHamster);
      this.mood += 10;
      this.bankAccount -= newHamster.getPrice(); //do not need to extend
    }                                          // referencing the newHamster will pull from 
}

// console.log(newPerson)
// newPerson.getAge;


const timmy = new Person ('Timmy')

//age timmy five years
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()

//eat five times
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()

//exercise five times
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()

//age timmy 9 years
for(let i = 0; i < 19 ; i++){
    timmy.ageUp()
}

//create a hamster named Gus
const hamster1 = new Hamster('Gus')

//set gus owner to timmy
hamster1.owner = 'Timmy'
console.log(hamster1)

//timmy buys gus
timmy.buyHamster(hamster1)
console.log(timmy)

//age timmy 15 years
for (let i = 0; i < 15; i++){
    timmy.ageUp()
}
console.log(timmy)

//have timmy eat twice
timmy.eat()
timmy.eat()

//have timmy exercise twice
timmy.exercise()
timmy.exercise()
