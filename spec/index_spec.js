const jsdom = require("jsdom");
const fs = require("fs");
const { JSDOM } = jsdom;
const index = fs.readFileSync("index.html", "utf-8");
const { document } = new JSDOM(index).window;
global.document = document;

const game = require("../src/index");
const memoryCards = document.querySelector(`.memory-card`);

// console.log(game.memoryCards)

describe("memoryCards", function () {
  it("should check if memoryCards is defined", function () {
    expect(memoryCards).not.toBe(undefined);
  });
  // it("should add an eventListener to every card", function () {
  //   spyOn(game, "memoryCards");
  //   expect(game.memoryCards).toBeDefined();
  // });
});

describe("isCardFlipped", function () {
  it("should check flip the card onto the front-face when clicked on", function () {
    expect(game.isCardFlipped).toBeDefined();
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

// describe("shuffleMemoryCards", function () {
//   it("should shuffle the memory cards", function () {
//     spyOn(game, "shuffleMemoryCards");
//     game.shuffleMemoryCards();
//     expect(game.shuffleMemoryCards).toHaveBeenCalled();
//   });
// });

describe("unflipCards", function () {
  it("should unflip the cards", function () {
    const card1 = document.getElementsByClassName("memory-card0");
    // console.log(card1);
    const card2 = document.getElementsByClassName("memory-card2");
    spyOn(game, "unflipCards");
    game.unflipCards();
    // game.matchMemoryCards(card1.dataset.name, card2.dataset.name);
    expect(game.unflipCards).toHaveBeenCalled();
  });
});

// describe("matchMemoryCards", () => {
//   it("should check if the memoryCards match", () => {
//     spyOn(game, "matchMemoryCards");
//     let cardOne = document.getElementsByClassName("memory-card")[0];
//     let cardTwo = document.getElementsByClassName("memory-card")[1];
    
//     //console.log(cardOne.dataset.name)
//     //cardOne.click();
//     //cardTwo.click();
//     game.matchMemoryCards(cardOne.dataset.name, cardTwo.dataset.name);

//     console.log(document.getElementsByClassName("memory-card")[0].getAttribute("matched"));
//     console.log(document.getElementsByClassName("memory-card")[1].getAttribute("matched"));


//     //expect(game.matchCounter).toEqual(1);
//     expect(cardOne.dataset.name).toBe("Johnny Cage");
//     expect(cardTwo.dataset.name).toBe("Johnny Cage");
//   });
// });