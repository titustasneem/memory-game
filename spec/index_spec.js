// const jsdom = require("jsdom");
// const fs = require("fs");
// const { JSDOM } = jsdom;
// const index = fs.readFileSync("index.html", "utf-8");
// const { document } = new JSDOM(index).window;
// global.document = document;

// const game = require("../src/index");

// describe("memoryCards", function () {
//   it("should check if memoryCards is defined", function () {
//     expect(game.memoryCards).toBeDefined();
//   });
//   it("should add an eventListener to every card", function () {
//     spyOn(game, "memoryCards");
//     expect(game.memoryCards).toBeDefined();
//   });
// });

// describe("flippedCards", function () {
//   it("should check flip the card onto the front-face when clicked on", function () {
//     expect(game.flippedCards).toBeDefined();
//   });
// });

// describe("disableCardClick", function () {
//   it("should disable the card click", function () {
//     spyOn(game, "disableCardClick");
//     game.disableCardClick();
//     expect(game.disableCardClick).toHaveBeenCalled();
//   });
// });

// describe("resetBoard", function () {
//   it("should reset the board", function () {
//     spyOn(game, "resetBoard");
//     game.resetBoard();
//     expect(game.resetBoard).toHaveBeenCalled();
//   });
// });

// describe("shuffleMemoryCards", function () {
//   it("should shuffle the memory cards", function () {
//     spyOn(game, "shuffleMemoryCards");
//     game.shuffleMemoryCards();
//     expect(game.shuffleMemoryCards).toHaveBeenCalled();
//   });
// });

// describe("unflipCards", function () {
//   it("should unflip the cards", function () {
//     const card1 = document.getElementsByClassName("memory-card")[0];
//     const card2 = document.getElementsByClassName("memory-card")[2];
//     spyOn(game, "unflipCards");
//     game.unflipCards();
//     game.matchMemoryCards(card1.dataset.name, card2.dataset.name);
//     expect(game.unflipCards).toHaveBeenCalled();
//   });
// });


// -------------------------------------------------------------------------------------------------------

const jsdom = require("jsdom");
const fs = require("fs");
const { JSDOM } = jsdom;
const index = fs.readFileSync("index.html", "utf-8");
const { document } = new JSDOM(index).window;
global.document = document;

const game = require("../src/index");

const gameCharacterArray = [
  "Johnny",
  "kano",
  "Kitana",
  "Raiden",
  "Scorpion",
  "Sonya",
];

let gameCharacters;

describe('gameCharacterArray', () => {
  beforeEach(() => {
    gameCharacters = [...gameCharacterArray]
    // console.log(gameCharacters)
  });
  // console.log(gameCharacters)

  it('should contain an array of al the game characters', () => {
    expect(gameCharacters.length).toBe(6);
  });
});

  describe('gameCharactersArray', () => {
    it('should be shuffled in any random order', () => {
      expect([...gameCharacterArray]) 
      .toMatch(/Johnny|kano|Kitana|Raiden| Scorpion|Sonya/);
      // expect(memoryGame.cards instanceof Array).toBe(true);
    });
  });
  describe('flipMemoryCard function', () => {
    // beforeEach(() => {
    //    const memoryCards = document.querySelector(`.memory-card${num}`);
    // });
 it('should add an event listener to the cards and enable them to flip', () => {
      expect(game.flipMemoryCard).toBeDefined();
    });
  });

   
  describe('init', function() {

    it('should create a 2x2 grid when the displayCardsDiv function is called', function() {
      spyOn(game, 'displayCardsDiv');
      game.displayCardsDiv();
    // let gameLayout = document.querySelector("#grid").value = 4;
      expect(game.displayCardsDiv).toHaveBeenCalled();
    });
  });
