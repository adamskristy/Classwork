//Singleton

class Car{
    constructor(maker, serialNumber){
        this.maker = maker;
        this.serialNumber = serialNumber;
    }
    drive(){
        console.log('Vroom vroom')
    }
}
class Factory { //use this to create cars
    constructor(company){
        this.company = company;
        this.cars = []; //when new cars created, pushed into this array
    }
    generateCar () {
        const newCar = new Car(this.company, this.cars.length); //to give a serialNumber
        this.cars.push(newCar);
        return this //return the updated instance and then reuse the method
                    //tesla.generateCar().generateCar().generateCar()
    }

    findCar (index) { //find cars at this index, since it is a array
        return this.cars[index];
    }
}

//only need one instance
const tesla = new Factory('Tesla')
tesla.generateCar();
//output Car {serialNumber: 99, make: 'Tesla'}
tesla.generateCar();
//output Car {serialNumber: 98, make: 'Tesla'}
