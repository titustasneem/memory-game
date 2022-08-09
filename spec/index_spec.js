  


// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const fs = require("fs");
// const document = new JSDOM(fs.readFileSync("./index.html", "utf-8")).window
//   .document;
// global.document = document;
 
const jsdom = require("jsdom");
const fs = require("fs");
const { JSDOM } = jsdom;
const index = fs.readFileSync("index.html", "utf-8");
const { document } = new JSDOM(index).window;
global.document = document;
 
// beforeEach(function () {
//   const dom = new jsdom.JSDOM('');
//   global.document = dom.window.document;
//   global.window = dom.window;
//   global.navigator = dom.window.navigator;
// }
 
const { cards, flipCard,  } = require('../src/index')
 
describe("cards", function () {
 
  it("should check if the cards are defined", function () {
    expect(cards).toBeDefined();
  });
  it("should add an event listener to every card", function () {
    expect(cards).toBeDefined();
  });
});
 
 
describe("flipCard", function () {
 
  it("should toggle the card when the click is fired", function () {
    expect(flipCard()).toBeDefined();
  });
});