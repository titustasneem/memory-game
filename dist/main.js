/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// // make memoryCards flip\r\nconst memoryCards = document.querySelectorAll(\".memory-card\");\r\n\r\n// When player clicks card, we have to know if it is the first or second card\r\nlet flippedCards = false;\r\nlet cardOne, cardTwo;\r\n\r\n// lock board to wait for memoryCards to flip finish \r\nlet lockBoard = false;\r\n\r\n\r\n\r\n \r\nfunction flipMemoryCard() {\r\n\r\n  console.log('I was clicked')\r\n   // this represents the element that fired the event \r\n  console.log(this)\r\n\r\n  if (lockBoard) return;\r\n  \r\n  // don't click on first card twice and disaBLE CARD CLICK\r\n   if (this === cardOne) return;\r\n\r\n   // access the classList of the memory card and toggle the flip class\r\n   // toggle means that if the class is there then remove it, if not then add it\r\n  this.classList.add(\"flip\");\r\n \r\n  // if has flipped card is false then it is the first time a player has clicked a card \r\n  if (!flippedCards) {\r\n   //   // first click\r\n     flippedCards = true;\r\n     cardOne = this;\r\n \r\n    return;\r\n  }\r\n    // second click\r\n   flippedCards = false;\r\n   cardTwo = this;\r\n  matchingMemoryCards();\r\n}\r\n\r\n\r\n \r\nfunction matchingMemoryCards() {\r\n  let isCardsMatching = cardOne.dataset.name === cardTwo.dataset.name;\r\n \r\n  isCardsMatching ? disableCardClick() : unflippedmemoryCards();\r\n}\r\n \r\nfunction disableCardClick() {\r\n  cardOne.removeEventListener(\"click\", flipMemoryCard);\r\n  cardTwo.removeEventListener(\"click\", flipMemoryCard);\r\n  resetBoard();\r\n}\r\n\r\n\r\n// if memoryCards is not a match, we won't flip them\r\n// remove flip class from card\r\nfunction unflippedmemoryCards() {\r\n  // only lock board if memoryCards have been flipped\r\n  lockBoard = true;\r\n \r\n  setTimeout(() => {\r\n    cardOne.classList.remove(\"flip\");\r\n    cardTwo.classList.remove(\"flip\");\r\n    lockBoard = false;\r\n    resetBoard();\r\n  }, 1000);\r\n}\r\n\r\nfunction resetBoard() {\r\n  [flippedCards, lockBoard] = [false, false];\r\n  [cardOne, cardTwo] = [null, null];\r\n}\r\n\r\n\r\n\r\n\r\n // should loop through all the memoryCards and add an event listener\r\n // listen for a click event\r\n // when that event is fired then flipMemoryCard function will be executed\r\n memoryCards.forEach((card) => card.addEventListener(\"click\", flipMemoryCard));\r\n\r\n\r\n (function shuffleMemoryCards() {\r\n  cards.forEach((card) => {\r\n    let randomCardPosition = Math.floor(Math.random() * 12);\r\n    card.style.order = randomCardPosition;\r\n  });\r\n})();\r\n \r\ncards.forEach((card) => card.addEventListener(\"click\", flipCard));\r\n \r\nfunction countdownTimer() {\r\n  const timer = document.getElementById('timer');\r\n  let seconds = 30;\r\n  const interval = setInterval(() => {\r\n    seconds--;\r\n    timer.innerHTML = `You have ${seconds} seconds left to match all cards`;\r\n    if (seconds < 1) {\r\n      clearInterval(interval);\r\n      alert(\"You have run out of time. Try again...\");\r\n      setTimeout(() => location.reload(), 2000);\r\n    }\r\n  }, 1000);\r\n}\r\ncountdownTimer()\r\n \r\n\r\n\n\n//# sourceURL=webpack://tasneem-titus-222-memory-game-in-vanilla-js-javascript/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;