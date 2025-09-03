const { toggleThaiEnglishStringInput } = require('../../utils/text-toggler');

describe('toggleStringInput', () => {
    test('givenEnglishOnlyString_WhenCallingToggleStringInput_ThenReturnThaiOutput', () => {
        const input = 'l;ylfu'
        const expectedOutput = "สวัสดี"
        
        const result = toggleThaiEnglishStringInput(input);
        
        expect(result).toBe(expectedOutput);
    });

    test('givenThaiOnlyString_WhenCallingToggleStringInput_ThenReturnEnglishOutput', () => {
        const input = "าพีิ"
        const expectedOutput = 'krub'
        
        const result = toggleThaiEnglishStringInput(input);
        
        expect(result).toBe(expectedOutput);
    });

    test('givenThaiAndEnglishString_WhenCallingToggleStringInput_ThenReturnThaiAndEnglishOutput', () => {
        const input = "l;ylfu าพีิ"
        const expectedOutput = "สวัสดี krub"
        
        const result = toggleThaiEnglishStringInput(input);
        
        expect(result).toBe(expectedOutput);
    });

    test(`givenStringWithThaiAndEnglishWithDuplicateEnglishRecordCharacter_WhenCallingToggleStringInput_ThenReturnThaiAndEnglishOutput`, () => {
        const input = "]n,gx]ujpo4kKk น้ ืน"
        const expectedOutput = "ลืมเปลี่ยนภาษา oh no"

        const result = toggleThaiEnglishStringInput(input);
        
        expect(result).toBe(expectedOutput);
    })
});