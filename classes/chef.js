class Dinner {
    constructor(appetizer, entree, dessert){
        this.appetizer = appetizer;
        this. entree = entree;
        this. dessert = dessert;
        
    }
}

class Chef {  //is factory of dinner, purpose is to create dinner objects
    makeDinner(appetizer, entree, dessert) { //setup params to pass them in dinner
        const newDinner = new Dinner(appetizer, entree, dessert);
        return newDinner;
    }
    
}

const boyardee = new Chef()
boyardee.makeDinner()

const dinner = chef1.makeDinner('soup', 'steak', 'cheesecake')
console.log(dinner)

const dinner1 = new Dinner() // returns the new object
