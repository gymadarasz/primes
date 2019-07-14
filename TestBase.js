
module.exports = class TestBase {

    constructor(counter) {
        this.counter = counter;
        this.setup();
    }

    setup() {}

    assert(a, b) {
        if (typeof a !== 'string') {
            a = a.toString();
            b = b.toString();
        }
        if (a === b) {
            console.log('.');
            this.counter.increment();
            return true;
        }
        console.log('A: [', a, ']');
        console.log('B: [', b, ']');
        throw new Error('Assert error');
    }

    static status(counter) {
        console.log(counter.get() + ' assert(s) OK\n');
    }

}