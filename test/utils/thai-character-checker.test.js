const { isThaiCharacter } = require('../../utils/thai-character-checker');

describe('isThaiCharacter', () => {
    test('givenEnglishCharacter_WhenCallingIsThaiChar_ThenReturnFalse', () => {
        const input = 'a'
        const expectedOutput = false
        
        const result = isThaiCharacter(input)
        
        expect(result).toBe(expectedOutput)
    });

    test('givenEnglishNumber_WhenCallingIsThaiChar_ThenReturnFalse', () => {
        const input = '5'
        const expectedOutput = false
        
        const result = isThaiCharacter(input)
        
        expect(result).toBe(expectedOutput)
    });

    test('givenEnglishSpecialCharacter_WhenCallingIsThaiChar_ThenReturnFalse', () => {
        const input = '@'
        const expectedOutput = false
        
        const result = isThaiCharacter(input)
        
        expect(result).toBe(expectedOutput)
    });

    test('givenThaiCharacter_WhenCallingIsThaiChar_ThenReturnTrue', () => {
        const input = 'ก'
        const expectedOutput = true
        
        const result = isThaiCharacter(input)
        
        expect(result).toBe(expectedOutput)
    });

    test('givenThaiVowel_WhenCallingIsThaiChar_ThenReturnTrue', () => {
        const input = 'ะ'
        const expectedOutput = true
        
        const result = isThaiCharacter(input)
        
        expect(result).toBe(expectedOutput)
    });

    test('givenThaiToneMarker_WhenCallingIsThaiChar_ThenReturnTrue', () => {
        const input = '่'
        const expectedOutput = true
        
        const result = isThaiCharacter(input)
        
        expect(result).toBe(expectedOutput)
    });

    test('givenThaiNumber_WhenCallingIsThaiChar_ThenReturnTrue', () => {
        const input = '๕'
        const expectedOutput = true
        
        const result = isThaiCharacter(input)
        
        expect(result).toBe(expectedOutput)
    });

    test('givenEmptyString_WhenCallingIsThaiChar_ThenReturnFalse', () => {
        const input = ''
        const expectedOutput = false
        
        const result = isThaiCharacter(input)
        
        expect(result).toBe(expectedOutput)
    });

    test('givenSpaceCharacter_WhenCallingIsThaiChar_ThenReturnFalse', () => {
        const input = ' '
        const expectedOutput = false
        
        const result = isThaiCharacter(input)
        
        expect(result).toBe(expectedOutput)
    });

    test('givenMultipleThaiCharacters_WhenCallingIsThaiChar_ThenReturnTrueForFirstCharacter', () => {
        const input = 'สวัสดี'
        const expectedOutput = true
        
        const result = isThaiCharacter(input)
        
        expect(result).toBe(expectedOutput)
    });
});