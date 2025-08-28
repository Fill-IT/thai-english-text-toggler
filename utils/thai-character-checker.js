function isThaiCharacter(char) {
    return /[\u0E00-\u0E7F]/.test(char);
}

module.exports = { isThaiCharacter };