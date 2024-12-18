// pollyfills for call method

function Greet(params) {
    console.log(`Hello ${params}`);
}
console.dir(Greet);

Function.prototype.myCall = function (context = {}, ...args) {
    // console.log('Hello');
    // console.log(this);
    if (typeof this !== 'function') {
        throw new Error(`${this} method can not be called`);
    }
    context.myFunction = this;
    context.myFunction(...args);
}

const obj1 = {
    name: 'Anil',
    printDetails: function (location) {
        console.log(`${this.name} and location is ${location}`);
    }
}

const obj2 = {
    name: 'satya'
}

obj1.printDetails.myCall(obj2, "Chennai");


// // pollyfills for Apply method


Function.prototype.myApply = function (context = {}, args = []) {
    if (typeof this !== 'function') {
        throw new Error(`${this} method can not be called`);
    }
    context.myFunction = this;
    context.myFunction(...args);
}

obj1.printDetails.myApply(obj2, ['Chennai']);