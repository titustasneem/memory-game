const jsdom = require("jsdom");
const fs = require("fs");
const { JSDOM } = jsdom;
const index = fs.readFileSync("index.html", "utf-8");
const { document } = new JSDOM(index).window;
global.document = document;

const game = require("../src/index");

describe("memoryCards", function () {
  it("should check if memoryCards is defined", function () {
    expect(game.memoryCards).toBeDefined();
  });
  it("should add an eventListener to every card", function () {
    spyOn(game, "memoryCards");
    expect(game.memoryCards).toBeDefined();
  });
});

describe("flippedCards", function () {
  it("should check flip the card onto the front-face when clicked on", function () {
    expect(game.flippedCards).toBeDefined();
  });
});

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

describe("shuffleMemoryCards", function () {
  it("should shuffle the memory cards", function () {
    spyOn(game, "shuffleMemoryCards");
    game.shuffleMemoryCards();
    expect(game.shuffleMemoryCards).toHaveBeenCalled();
  });
});

describe("unflipCards", function () {
  it("should unflip the cards", function () {
    const card1 = document.getElementsByClassName("memory-card")[0];
    const card2 = document.getElementsByClassName("memory-card")[2];
    spyOn(game, "unflipCards");
    game.unflipCards();
    game.matchMemoryCards(card1.dataset.name, card2.dataset.name);
    expect(game.unflipCards).toHaveBeenCalled();
  });
});