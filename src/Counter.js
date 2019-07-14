module.exports = class Counter {

    constructor() {
        this.counter = 0;
    }

    increment() {
        this.counter++;
    }

    get() {
        return this.counter;
    }

}