module.exports = class PrimeGenerator {

    run(n, max = 100) {
        // validate
        if (n <= 1) throw new Error('User input should be greater than 1');
        if (max < 2) throw new Error('Prime can not be less than 2');
        
        // get all numbers up to max
        let numbers = [];
        for (let i = 2; i < max; i++) {
            numbers.push(i);
        }

        // remove all non-primes
        let results = [];
        while(numbers.length) {
            let first = numbers.shift();    
            for (let i = first + first; i < max; i+= first) {
                let idx = numbers.indexOf(i);
                if (idx < 0) continue;
                numbers.splice(idx, 1);
            }
            results.push(first);
        }
        if (results.length < n) throw new Error('Not enough results, increase max');
        return results.slice(0, n);
    }

}







