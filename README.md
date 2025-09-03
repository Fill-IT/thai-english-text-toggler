# Thai English Text Toggler

A JavaScript library for toggling between Thai and English text - perfect for fixing "forgot to change language" typing mistakes.

## Installation

```bash
npm install thai-english-text-toggler
```

## Usage

### Basic Usage

```javascript
const { toggleThaiEnglishStringInput } = require('thai-english-text-toggler');

// Example 1: English to Thai
const englishText = 'l;ylfu';
console.log(toggleThaiEnglishStringInput(englishText)); // สวัสดี

// Example 2: Thai to English  
const thaiText = 'าพีิ';
console.log(toggleThaiEnglishStringInput(thaiText)); // krub

// Example 3: Mixed text with context-aware conversion
const mixedText = ']n,gx]ujpo4kKk น้ ืน';
console.log(toggleThaiEnglishStringInput(mixedText)); // ลืมเปลี่ยนภาษา oh no

```

## API Reference

### toggleThaiEnglishStringInput(input)

Converts text between Thai and English keyboard layouts with smart context detection.

**Parameters:**
- `input` (string): The text to toggle

**Returns:**
- (string): The converted text

**Example:**
```javascript
toggleThaiEnglishStringInput('l;ylfu'); // Returns: สวัสดี
toggleThaiEnglishStringInput('สวัสดี'); // Returns: l;ylfu
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
├── data/
│   ├── thai-english-keyboard-text-dictionary.json  # Character mappings
│   └── duplicate-mappings.json       # Context-aware duplicate mappings
└── test/
    └── utils/
        ├── text-toggler.test.js      # Core functionality tests
```

## Use Cases

- Fix "forgot to change language" typing mistakes
- Text processing applications  
- Keyboard layout conversion tools
- Thai-English bilingual applications
- Input validation and text normalization

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: Add some amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

## Repository

GitHub: [https://github.com/Fill-IT/thai-english-text-toggler](https://github.com/Fill-IT/thai-english-text-toggler)

## License

MIT

## Keywords

thai, english, ลืมเปลี่ยนภาษา, forget, to, change, language, text, toggler, keyboard, layout, conversion