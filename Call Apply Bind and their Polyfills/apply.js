const person4 = {
    name: 'John',
    printDetails: function (hobbies1, hobbies2, hobbies3) {
        console.log(`My name is ${this.name} and I love ${hobbies1} , ${hobbies2} , ${hobbies3}.`);
    }
}

const person5 = {
    name: 'Anand'
}

person4.printDetails.apply(person5, ['Hiking', 'Swimming', 'Music']);


// apply application

const numbers = [1, 2, 3, 4, 5];
let max = Math.max(1, 2, 3, 4, 5);
let max_1 = Math.max.apply(null, numbers);
console.log(`Max : ${max}`);
console.log(`Max_1 : ${max_1}`);