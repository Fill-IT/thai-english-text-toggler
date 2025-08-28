const isThaiChar = (char) => {
    return /[\u0E00-\u0E7F]/.test(char);
};

module.exports = { isThaiChar };