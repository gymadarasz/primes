
const TestRunner = require('./TestRunner.js');
const Counter = require('./Counter.js');
const PrimeTest = require('./PrimeTest.js');
const TestBase = require('./TestBase.js');

let counter = new Counter();
let runner = new TestRunner([
    new PrimeTest(counter)
]);
runner.runAll();
TestBase.status(counter);