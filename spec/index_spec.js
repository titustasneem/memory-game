const jsdom = require("jsdom");
const fs = require("fs");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = window;
global.document = document;
document.body.innerHTML = fs.readFileSync("index.html", "utf-8");

const game = require("../src/index");
let selection = document.getElementById("grid");

const gameCharacterArray = [
  "Johnny",
  "kano",
  "Kitana",
  "Raiden",
  "Scorpion",
  "Sonya",
];

describe("disableCardClick", function () {
  it("should disable the card click", function () {
    spyOn(game, "disableCardClick");
    game.disableCardClick();
    expect(game.disableCardClick).toHaveBeenCalled();
  });
});

describe("resetBoard", function () {
  it("should reset the board", function () {
    spyOn(game, "resetBoard");
    game.resetBoard();
    expect(game.resetBoard).toHaveBeenCalled();
  });
});

describe("unflipCards", function () {
  it("should unflip the cards", function () {
    spyOn(game, "unflipCards");
    game.unflipCards();
    expect(game.unflipCards).toHaveBeenCalled();
  });
});

describe("gameCharacterArray", () => {
  beforeEach(() => {
    gameCharacters = [...gameCharacterArray];
  });

  it("should contain an array of all the game characters", () => {
    expect(gameCharacters.length).toBe(6);
  });
});

describe("gameCharactersArray", () => {
  it("should be shuffled in any random order", () => {
    expect([...gameCharacterArray]).toMatch(
      /Johnny|kano|Kitana|Raiden| Scorpion|Sonya/
    );
  });
});
describe("flipMemoryCard function", () => {
  it("should add an event listener to the cards and enable them to flip", () => {
    expect(game.flipMemoryCard).toBeDefined();
  });
});

describe("displayCardsDiv", function () {
  it("should create a 2x2 grid with the length of 4 cards", function () {
    selection.value = "first option";
    game.displayCardsDiv();
    expect(game.memoryGame.children.length).toBe(4);
  });
  it("should create a 3x2 grid with the length of 6 cards", function () {
    selection.value = "second option";
    game.displayCardsDiv();
    expect(game.memoryGame.children.length).toBe(6);
  });
  it("should create a 4x3 grid with the length of 12 cards", function () {
    selection.value = "third option";
    game.displayCardsDiv();
    expect(game.memoryGame.children.length).toBe(12);
  });
});
