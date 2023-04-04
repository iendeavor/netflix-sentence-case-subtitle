const convertToSentenceCase = require("./convert-to-sentence-case");

/**
 * @type {{ input: string; output: string; }[]}
 */
const suits = [
  {
    input: "I HAVE NEVER MADE COFFEE",
    output: "I have never made coffee",
  },
  {
    input: "SINCE I GRABBED A SPOON?",
    output: "Since I grabbed a spoon?",
  },
  {
    input: "HI. PAUL, IS IT?",
    output: "Hi. Paul, is it?",
  },
  {
    input: "IT DOESN'T MAKE\nMUCH OF A DIFFERENCE.",
    output: "It doesn't make\nmuch of a difference.",
  },
  {
    input: "WISH ME LUCK.\nWHAT FOR?",
    output: "Wish me luck.\nWhat for?",
  },
  {
    input: "UM... MY FATHER.",
    output: "Um... my father.",
  },
];

suits.forEach((suit, index) => {
  test(`suit #${index}`, () => {
    expect(convertToSentenceCase(suit.input)).toEqual(suit.output);
  });
});
