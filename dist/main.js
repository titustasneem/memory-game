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

eval("const card = document.querySelectorAll(\".memory-card\");\r\n\r\nlet hasFlippedCard = false;\r\nlet lockBoard = false\r\nlet firstCard, secondCard;\r\n\r\nfunction flipCard() {\r\n  if(lockBoard) return\r\n  if(this === firstCard) return;\r\n  this.classList.toggle(\"flip\");\r\n\r\n  if (!hasFlippedCard) {\r\n    // first click\r\n    hasFlippedCard = true;\r\n    firstCard = this;\r\n    // console.log(hasFlippedCard, firstCard);\r\n\r\n    return;\r\n  } \r\n    // second click\r\n    hasFlippedCard = false;\r\n    secondCard = this;\r\n    // console.log(firstCard, secondCard);\r\n    getMatchingCards();\r\n  \r\n}\r\n// console.log('function was executed')\r\n\r\n// console.log('I was clicked!');\r\n// console.log(this);\r\n\r\n// function getMatchingCards() {\r\n//   // check if cards match?\r\n//   // console.log(firstCard.dataset.name)\r\n//   // console.log(secondCard.dataset.name)\r\n//   if (firstCard.dataset.name === secondCard.dataset.name) {\r\n//     // its a match (disable click )\r\n//     disableCardClick();\r\n//   } else {\r\n//    unflippedCards();\r\n//   }\r\n// }\r\n\r\nfunction getMatchingCards(){\r\n    let isMatch = firstCard.dataset.name === secondCard.dataset.name;\r\n\r\n    isMatch ? disableCardClick() : unflippedCards();\r\n}\r\n\r\nfunction disableCardClick(){\r\n firstCard.removeEventListener(\"click\", flipCard);\r\n secondCard.removeEventListener(\"click\", flipCard);\r\n resetBoard();\r\n}\r\n\r\nfunction unflippedCards(){\r\n  lockBoard = true\r\n\r\n    setTimeout(() => {\r\n        firstCard.classList.remove(\"flip\");\r\n        secondCard.classList.remove(\"flip\");\r\n        lockBoard = false;\r\n        resetBoard()\r\n      }, 1000);\r\n}\r\n\r\nfunction resetBoard(){\r\n  [hasFlippedCard, lockBoard] = [false, false]\r\n}\r\n\r\n(function shuffle(){\r\n  unflippedCards.forEach((card)=> {\r\n    let randomPosition = Math.floor(Math.random() * 12);\r\n    card.style.order = randomPosition;\r\n  });\r\n})();\r\n\r\ncard.forEach((card) => card.addEventListener(\"click\", flipCard));\r\n\n\n//# sourceURL=webpack://tasneem-titus-222-memory-game-in-vanilla-js-javascript/./src/index.js?");

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