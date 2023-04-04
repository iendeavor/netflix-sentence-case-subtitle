const convertToSentenceCase = require("./convert-to-sentence-case");

/**
 *
 * @param {HTMLDivElement} playerTimedtextEl
 */
function convertToSentenceCaseForSubtitle(playerTimedtextEl) {
  const leafs = [...playerTimedtextEl.children]
    .map((child) => child.children[0])
    .flat()
    .map((child) => child.children[0])
    .flat();
  const subtitle = convertToSentenceCase(
    leafs.map((leaf) => leaf.innerHTML).join("\n")
  ).split("\n");
  leafs.forEach((leaf, index) => {
    if (leaf.textContent) {
      leaf.innerHTML = subtitle[index];
    }
  });
}

module.exports = convertToSentenceCaseForSubtitle;
