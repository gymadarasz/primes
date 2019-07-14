module.exports = class MultipleMatrix {

    get(numbers) {
        let out = '| ';
        for (let i in numbers) {
            out += '| ' + numbers[i] + ' ';
        }
        out += '|\n';
        for (let i in numbers) {
            out += '| ' + numbers[i] + ' |';
            for (let j in numbers) {
                out += ' ' + numbers[i] * numbers[j] + ' |';
            }
            out+= '\n';
        }
        return out;
    }

}