/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 626:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const convertToSentenceCase = __webpack_require__(306);

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


/***/ }),

/***/ 306:
/***/ ((module) => {

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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// ==UserScript==
// @name         Netflix sentence-case subtitle
// @namespace    https://github.com/iendeavor/netflix-sentence-case-subtitle
// @version      0.1.2
// @description  Convert Netflix subtitles to sentence-case
// @author       Ernest
// @match        https://www.netflix.com/*
// @grant        none
// ==/UserScript==

const convertToSentenceCaseForSubtitle = __webpack_require__(626);

(function () {
  "use strict";

  function main() {
    const playerTimedtextEl = document.querySelector(".player-timedtext");
    if (playerTimedtextEl instanceof HTMLDivElement) {
      convertToSentenceCaseForSubtitle(playerTimedtextEl);
    }

    requestAnimationFrame(main);
  }

  requestAnimationFrame(main);
})();

})();

/******/ })()
;