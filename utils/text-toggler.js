const fs = require('fs');
const path = require('path');

function toggleStringInput(input) {
    const arrayInput = input.split('');
    
    const dictionaryPath = path.join(__dirname, '..', 'data', 'thai-english-keyboard-text-dictionary.json');
    
    const dictionary = JSON.parse(fs.readFileSync(dictionaryPath, 'utf8'));
    
    const isThaiChar = (char) => {
        return /[\u0E00-\u0E7F]/.test(char);
    };

    const duplicateMappings = {
        ',': { thai: 'ม', english: '}' },
        '/': { thai: 'ฝ', english: '2' },
        '?': { thai: 'ฦ', english: 'M' },
        '(': { thai: '๖', english: 'Z' },
        ')': { thai: '๗', english: 'X' },
        '-': { thai: 'ข', english: '3' },
        '+': { thai: '๙', english: '!' },
        '_': { thai: '๘', english: '`' },
        '%': { thai: '๔', english: '~' }
    };
    
    const arrayOutput = arrayInput.map((char, index) => {
        if (duplicateMappings[char]) {
            const prevChar = index > 0 ? arrayInput[index - 1] : '';
            const nextChar = index < arrayInput.length - 1 ? arrayInput[index + 1] : '';
            
            const prevIsThai = isThaiChar(prevChar) || (dictionary[prevChar] && isThaiChar(dictionary[prevChar]));
            const nextIsThai = isThaiChar(nextChar) || (dictionary[nextChar] && isThaiChar(dictionary[nextChar]));
            
            if (prevIsThai || nextIsThai) {
                return duplicateMappings[char].thai;
            } else {
                return duplicateMappings[char].english;
            }
        }
        
        if (dictionary[char]) {
            return dictionary[char];
        }
        return char;
    });
    
    const output = arrayOutput.join('');

    return output;
}

module.exports = { toggleStringInput };