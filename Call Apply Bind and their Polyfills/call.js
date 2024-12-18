const person1 = {
    name: 'John',
    age: 25,
    printNameAndAge: function (location) {
        console.log(`My name is ${this.name} and I am ${this.age} years old and i live in ${location}`);
    }
}

const person2 = {
    name: 'Anil',
    age: 20
}

const person3 = {
    name: 'Satya',
    age: 30,
}

person1.printNameAndAge('Hyderabad');
// call method

person1.printNameAndAge.call(person2 , 'Mumbai');
person1.printNameAndAge.call(person3 , 'chennai');
