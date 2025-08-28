const fs = require('fs');
const path = require('path');

function toggleStringInput(input) {
    const arrayInput = input.split('');
    
    const dictionaryPath = path.join(__dirname, '..', 'data', 'thai-english-keyboard-text-dictionary.json');
    
    const dictionary = JSON.parse(fs.readFileSync(dictionaryPath, 'utf8'));
    
    // Helper function to check if a character is Thai
    const isThaiChar = (char) => {
        return /[\u0E00-\u0E7F]/.test(char);
    };
    
    // Define duplicate mappings that need context checking
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
        // Check if this character has duplicate mappings
        if (duplicateMappings[char]) {
            // Check neighboring characters to determine context
            const prevChar = index > 0 ? arrayInput[index - 1] : '';
            const nextChar = index < arrayInput.length - 1 ? arrayInput[index + 1] : '';
            
            // Check if neighbors are Thai OR will become Thai after conversion
            const prevIsThai = isThaiChar(prevChar) || (dictionary[prevChar] && isThaiChar(dictionary[prevChar]));
            const nextIsThai = isThaiChar(nextChar) || (dictionary[nextChar] && isThaiChar(dictionary[nextChar]));
            
            // If either neighbor is/becomes Thai, convert to Thai; otherwise convert to English
            if (prevIsThai || nextIsThai) {
                return duplicateMappings[char].thai;
            } else {
                return duplicateMappings[char].english;
            }
        }
        
        // For non-duplicate characters, use regular dictionary mapping
        if (dictionary[char]) {
            return dictionary[char];
        }
        return char;
    });
    
    const output = arrayOutput.join('');

    return output;
}

module.exports = { toggleStringInput };