const TestBase = require('./TestBase.js');
const PrimeGenerator = require('./PrimeGenerator.js');
const MultipleMatrix = require('./MultipleMatrix.js');

module.exports = class PrimeTest extends TestBase {

    setup() {
        this.gen = new PrimeGenerator();
        this.out = new MultipleMatrix();
        this.testOk();
    }

    testOk() {
        let results = this.gen.run(3);
        this.assert(results, [2, 3, 5]);
        let output = this.out.get(results);
        this.assert(output, `| | 2 | 3 | 5 |
| 2 | 4 | 6 | 10 |
| 3 | 6 | 9 | 15 |
| 5 | 10 | 15 | 25 |
`);
    }
}