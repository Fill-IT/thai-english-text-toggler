const fs = require('fs');
const path = require('path');
const { isThaiCharacter } = require('./thai-character-checker');

function toggleStringInput(input) {
    const arrayInput = input.split('');
    
    const dictionaryPath = path.join(__dirname, '..', 'data', 'thai-english-keyboard-text-dictionary.json');
    const duplicateMappingsPath = path.join(__dirname, '..', 'data', 'duplicate-mappings.json');
    
    const dictionary = JSON.parse(fs.readFileSync(dictionaryPath, 'utf8'));
    const duplicateMappings = JSON.parse(fs.readFileSync(duplicateMappingsPath, 'utf8'));
    
    const arrayOutput = arrayInput.map((character, index) => {
        if (duplicateMappings[character]) {
            const previousCharacter = index > 0 ? arrayInput[index - 1] : '';
            const nextCharacter = index < arrayInput.length - 1 ? arrayInput[index + 1] : '';
            
            const prevIsThai = isThaiCharacter(previousCharacter) || (dictionary[previousCharacter] && isThaiCharacter(dictionary[previousCharacter]));
            const nextIsThai = isThaiCharacter(nextCharacter) || (dictionary[nextCharacter] && isThaiCharacter(dictionary[nextCharacter]));
            
            if (prevIsThai || nextIsThai) {
                return duplicateMappings[character].thai;
            } else {
                return duplicateMappings[character].english;
            }
        }
        
        if (dictionary[character]) {
            return dictionary[character];
        }
        return character;
    });
    
    const output = arrayOutput.join('');

    return output;
}

module.exports = { toggleStringInput };