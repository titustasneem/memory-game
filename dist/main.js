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
/***/ ((module) => {

eval("const memoryCards = document.querySelectorAll(\".memory-card\");\r\n\r\nlet matchCounter = 0;\r\nlet flippedCards = false;\r\nlet lockBoard = false;\r\nlet cardOne, cardTwo;\r\n\r\n(function beginShuffle() {\r\n  shuffleMemoryCards();\r\n})();\r\n\r\nfunction matchMemoryCards(firstCard, secondCard) {\r\n  let foundMatch = firstCard === secondCard;\r\n\r\n  if (foundMatch) {\r\n    matchCounter++;\r\n    disableCardClick();\r\n  } else {\r\n    unflipCards();\r\n  }\r\n\r\n  if (matchCounter == memoryCards.length / 2) {\r\n    window.alert(\"Congratulations! You Won!\");\r\n    setTimeout(() => location.reload(), 2000);\r\n  }\r\n}\r\n\r\nfunction flipMemoryCard() {\r\n  if (lockBoard) {\r\n    return;\r\n  }\r\n\r\n  if (this === cardOne) {\r\n    return;\r\n  }\r\n\r\n  this.classList.add(\"flip\");\r\n\r\n  if (!flippedCards) {\r\n    flippedCards = true;\r\n    cardOne = this;\r\n    return;\r\n  } else {\r\n    flippedCards = false;\r\n    cardTwo = this;\r\n  }\r\n  matchMemoryCards(cardOne.dataset.name, cardTwo.dataset.name);\r\n}\r\n\r\nfunction resetBoard() {\r\n  [flippedCards, lockBoard] = [false, false];\r\n  [cardOne, cardTwo] = [null, null];\r\n}\r\n\r\nfunction disableCardClick() {\r\n  cardOne.removeEventListener(\"click\", flipMemoryCard);\r\n  cardTwo.removeEventListener(\"click\", flipMemoryCard);\r\n\r\n  resetBoard();\r\n}\r\n\r\nfunction unflipCards() {\r\n  lockBoard = true;\r\n\r\n  setTimeout(() => {\r\n    cardOne.classList.remove(\"flip\");\r\n    cardTwo.classList.remove(\"flip\");\r\n    lockBoard = false;\r\n    resetBoard();\r\n  }, 1000);\r\n  return true;\r\n}\r\n\r\nmemoryCards.forEach((card) => card.addEventListener(\"click\", flipMemoryCard));\r\n\r\nfunction shuffleMemoryCards() {\r\n  memoryCards.forEach((card) => {\r\n    let randomPosition = Math.floor(Math.random() * 12);\r\n    card.style.order = randomPosition;\r\n  });\r\n}\r\n\r\nmodule.exports = {\r\n  memoryCards,\r\n  matchMemoryCards,\r\n  flippedCards,\r\n  disableCardClick,\r\n  unflipCards,\r\n  resetBoard,\r\n  shuffleMemoryCards,\r\n};\n\n//# sourceURL=webpack://tasneem-titus-222-memory-game-in-vanilla-js-javascript/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;