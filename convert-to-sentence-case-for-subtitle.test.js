const convertToSentenceCaseForSubtitle = require("./convert-to-sentence-case-for-subtitle");

/**
 * @type {{ input: string; output: string; }[]}
 */
const suits = [
  {
    input: `
<div class="player-timedtext">
  <div class="player-timedtext-text-container">
    <span>
      <span>IT DOESN'T MAKE</span>
    </span>
  </div>
  <div class="player-timedtext-text-container">
    <span>
      <span>MUCH OF A DIFFERENCE.</span>
    </span>
  </div>
</div>
    `.trim(),
    output: `
<div class="player-timedtext">
  <div class="player-timedtext-text-container">
    <span>
      <span>It doesn't make</span>
    </span>
  </div>
  <div class="player-timedtext-text-container">
    <span>
      <span>much of a difference.</span>
    </span>
  </div>
</div>
    `.trim(),
  },
  {
    input: `
<div class="player-timedtext">
  <div class="player-timedtext-text-container">
    <span>
      <span>HAVE</span>
      <span>A RESTAURANT</span>
    </span>
  </div>
</div>
    `.trim(),
    output: `
<div class="player-timedtext">
  <div class="player-timedtext-text-container">
    <span>
      <span>Have</span>
      <span>a restaurant</span>
    </span>
  </div>
</div>
    `.trim(),
  },
];

suits.forEach((suit, index) => {
  test(`suit #${index}`, () => {
    const div = document.createElement("div");
    div.innerHTML = suit.input;
    const playerTimedtextEl = div.children[0];

    if (playerTimedtextEl instanceof HTMLDivElement) {
      convertToSentenceCaseForSubtitle(playerTimedtextEl);

      expect(playerTimedtextEl.outerHTML).toEqual(suit.output);
    } else {
      throw Error();
    }
  });
});
