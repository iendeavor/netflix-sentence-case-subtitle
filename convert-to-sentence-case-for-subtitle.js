const convertToSentenceCase = require("./convert-to-sentence-case");

/**
 *
 * @param {HTMLDivElement} playerTimedtextEl
 */
function convertToSentenceCaseForSubtitle(playerTimedtextEl) {
  const leafs = [...playerTimedtextEl.children]
    .map((child) => child.children[0])
    .flat()
    .map((child) => [...child.children])
    .flat();
  if (leafs.some((leaf) => leaf.classList.contains("sentence-case"))) return;
  const subtitle = convertToSentenceCase(
    leafs.map((leaf) => leaf.innerHTML).join("\n")
  ).split("\n");
  leafs.forEach((leaf, index) => {
    leaf.classList.add("sentence-case");
    leaf.innerHTML = subtitle[index];
  });
}

module.exports = convertToSentenceCaseForSubtitle;
