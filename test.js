
const TestRunner = require('./test/TestRunner.js');
const Counter = require('./src/Counter.js');
const PrimeTest = require('./test/PrimeTest.js');
const TestBase = require('./test/TestBase.js');

let counter = new Counter();
let runner = new TestRunner([
    new PrimeTest(counter)
]);
runner.runAll();
TestBase.status(counter);