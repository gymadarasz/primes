const TestBase = require('./TestBase.js');
const PrimeGenerator = require('./PrimeGenerator.js');

module.exports = class PrimeTest extends TestBase {

    setup() {
        this.gen = new PrimeGenerator();
        this.testOk();
    }
    
    testOk() {
        let results = this.gen.run(3);
        this.assert(results, [2, 3, 5]);
    }
}