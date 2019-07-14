
module.exports = class TestRunner {

    runAll(tests) {
        for (k in tests) {
            tests[k].run();
        }
    }

}