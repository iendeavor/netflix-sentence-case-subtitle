// ==UserScript==
// @name         Netflix sentence-case subtitle
// @namespace    https://github.com/iendeavor/netflix-sentence-case-subtitle
// @version      0.1.0
// @description  Convert Netflix subtitles to sentence-case
// @author       Ernest
// @match        https://www.netflix.com/*
// @grant        none
// ==/UserScript==

const convertToSentenceCaseForSubtitle = require("./convert-to-sentence-case-for-subtitle");

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
