# Thai English Text Toggler

A JavaScript library for toggling between Thai and English text - perfect for fixing "forgot to change language" typing mistakes.

## Installation

```bash
npm install thai-english-text-toggler
```

## Usage

### Basic Usage

```javascript
const { toggleStringInput, isThaiCharacter } = require('thai-english-text-toggler');

// Example 1: English to Thai
const englishText = 'l;ylfu';
console.log(toggleStringInput(englishText)); // สวัสดี

// Example 2: Thai to English  
const thaiText = 'าพีิ';
console.log(toggleStringInput(thaiText)); // krub

// Example 3: Mixed text with context-aware conversion
const mixedText = ']n,gx]ujpo4kKk น้ ืน';
console.log(toggleStringInput(mixedText)); // ลืมเปลี่ยนภาษา oh no

// Example 4: Check if character is Thai
console.log(isThaiCharacter('น')); // true
console.log(isThaiCharacter('a')); // false
```

## API Reference

### toggleStringInput(input)

Converts text between Thai and English keyboard layouts with smart context detection.

**Parameters:**
- `input` (string): The text to toggle

**Returns:**
- (string): The converted text

**Example:**
```javascript
toggleStringInput('l;ylfu'); // Returns: สวัสดี
toggleStringInput('สวัสดี'); // Returns: l;ylfu
```

### isThaiCharacter(char)

Checks if a character belongs to the Thai Unicode range (U+0E00-U+0E7F).

**Parameters:**
- `char` (string): The character to check

**Returns:**
- (boolean): True if the character is Thai, false otherwise

**Example:**
```javascript
isThaiCharacter('ก'); // Returns: true
isThaiCharacter('a'); // Returns: false
isThaiCharacter('๕'); // Returns: true (Thai number)
isThaiCharacter('่'); // Returns: true (Thai tone marker)
```

## Supported Characters

- All Thai consonants (ก-ฮ)
- Thai vowels and tone markers
- Thai numbers (๐-๙)  
- English letters (a-z, A-Z)
- Numbers (0-9)
- Special characters and punctuation
- Context-aware handling of ambiguous mappings

## Development

### Running Tests

```bash
npm test
```

### Project Structure

```
thai-english-text-toggler/
├── index.js                           # Main entry point
├── utils/
│   ├── text-toggler.js               # Core conversion logic
│   └── thai-character-checker.js     # Thai character detection
├── data/
│   ├── thai-english-keyboard-text-dictionary.json  # Character mappings
│   └── duplicate-mappings.json       # Context-aware duplicate mappings
└── test/
    └── utils/
        ├── text-toggler.test.js      # Core functionality tests
        └── thai-character-checker.test.js  # Character detection tests
```

## Use Cases

- Fix "forgot to change language" typing mistakes
- Text processing applications  
- Keyboard layout conversion tools
- Thai-English bilingual applications
- Input validation and text normalization

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Keywords

thai, english, ลืมเปลี่ยนภาษา, forget, to, change, language, text, toggler, keyboard, layout, conversion