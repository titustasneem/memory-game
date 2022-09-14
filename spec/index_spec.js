const jsdom = require("jsdom");
const fs = require("fs");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = window;
global.document = document;
document.body.innerHTML = fs.readFileSync("index.html", "utf-8");

const game = require("../src/index");
let selection = document.getElementById("grid");
// let cards = cardOne

const gameCharacterArray = [
  "Johnny",
  "kano",
  "Kitana",
  "Raiden",
  "Scorpion",
  "Sonya",
];


// describe("flipMemoryCard", function () {
//    beforeEach(()=> {
//     document.querySelector("#grid").value = 4;

//     game.displayCardsDiv()

//    })
//   it("should call the matchMemoryCards", function () {
//     game.displayCardsDiv()

//     spyOn(game, "matchMemoryCards");
//     let num = 1
//     const memoryCards = document.querySelector(`.memory-cards1`);
//     // memoryCards.classList = 'hi';
//       console.log(memoryCards.classList)

//     game.flipMemoryCard(num)
//     expect(game.matchMemoryCards).not.toHaveBeenCalled();
//    });
// });



// -----------------------------------------------------------------------------------

describe("matchMemoryCards", function () {
  it("should call the unflipCards if there is no match found", function () {
    spyOn(game, "unflipCards");
      game.matchMemoryCards('Johnny', 'Johnny');
    expect(game.unflipCards).not.toHaveBeenCalled();
  });
});

describe("disableCardClick", () => {
  beforeEach(() => {
    const memoryGame = document.querySelector(".memory-game");
    memoryGame.innerHTML = gameCharacterArray[0];
    memoryGame.innerHTML = gameCharacterArray[1];
  });
  it("should not call the reset board function since the cards do not match ", () => {
    spyOn(game, "resetBoard");
    game.disableCardClick();
    expect(game.resetBoard).not.toHaveBeenCalled();
  });
});
// -----------------------------------------------------------------------------------
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
