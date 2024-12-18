const person_b = {
    name: 'John',
    age: 25,
    printNameAndAge: function (location) {
        console.log(`My name is ${this.name} and I am ${this.age} years old and i live in ${location}`);
    }
}

const person_b1 = {
    name: 'Anil',
    age: 20
}

const person_b2 = {
    name: 'Satya',
    age: 30,
}

const bindFn = person_b.printNameAndAge.bind(person_b2);
bindFn('Chennai');