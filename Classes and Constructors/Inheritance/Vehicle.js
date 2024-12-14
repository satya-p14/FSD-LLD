class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

class Car extends Vehicle {
    constructor(make, model, numDoors) {
        super(make, model)
        this.numDoors = numDoors;
    }
}