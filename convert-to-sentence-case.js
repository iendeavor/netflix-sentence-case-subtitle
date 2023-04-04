/**
 * @param {string} text
 * @returns {string}
 */
function convertToSentenceCase(text) {
  return text
    .replace(/\w/g, (word) => word.toLowerCase())
    .replace(/^\w/, (first) => first.toUpperCase())
    .replace(/\.\s\w/g, (first) => first.toUpperCase())
    .replace(/\.\.\.\s\w/g, (first) => first.toLowerCase())
    .replace(/\bi\b/g, (I) => I.toUpperCase());
}

module.exports = convertToSentenceCase;
