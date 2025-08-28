const fs = require('fs');
const path = require('path');

function toggleStringInput(input) {
    const arrayInput = input.split('');
    
    const dictionaryPath = path.join(__dirname, '..', 'data', 'thai-english-keyboard-text-dictionary.json');
    
    const dictionary = JSON.parse(fs.readFileSync(dictionaryPath, 'utf8'));
    
    const arrayOutput = arrayInput.map(char => {
        if (dictionary[char]) {
            return dictionary[char];
        }
        return char;
    });
    
    const output = arrayOutput.join('');

    return output;
}

module.exports = { toggleStringInput };