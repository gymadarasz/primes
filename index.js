
const PrimeGenerator = require('./PrimeGenerator.js');
const MultipleMatrix = require('./MultipleMatrix.js');

let gen = new PrimeGenerator();
let out = new MultipleMatrix();
console.log(out.get(gen.run(process.argv[2])));