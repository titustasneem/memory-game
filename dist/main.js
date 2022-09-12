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

eval("const gameCharacterArray = [\r\n  \"Johnny\",\r\n  \"kano\",\r\n  \"Kitana\",\r\n  \"Raiden\",\r\n  \"Scorpion\",\r\n  \"Sonya\",\r\n];\r\n\r\nfor (let i = 0; i < gameCharacterArray.length; i++) {\r\n  let j = Math.floor(Math.random() * gameCharacterArray.length);\r\n  let temp = gameCharacterArray[i];\r\n  gameCharacterArray[i] = gameCharacterArray[j];\r\n  gameCharacterArray[j] = temp;\r\n}\r\n\r\nlet randomGameCharacter = [];\r\n\r\nlet matchCounter = 0;\r\nlet isCardFlipped = false;\r\nlet lockBoard = false;\r\nlet cardOne, cardTwo;\r\n\r\nfunction flipMemoryCard(num) {\r\n  const memoryCards = document.querySelector(`.memory-card${num}`);\r\n\r\n  if (lockBoard) return;\r\n  if (memoryCards === cardOne) return;\r\n\r\n  memoryCards.classList.add(\"flip\");\r\n\r\n  if (!isCardFlipped) {\r\n    isCardFlipped = true;\r\n    cardOne = memoryCards;\r\n    return;\r\n  } else {\r\n    lockBoard = true;\r\n    cardTwo = memoryCards;\r\n  }\r\n\r\n  matchMemoryCards(cardOne.dataset.name, cardTwo.dataset.name);\r\n  memoryCards.forEach((card) => card.addEventListener(\"click\", flipMemoryCard));\r\n}\r\n\r\nfunction matchMemoryCards(firstCard, secondCard) {\r\n  let foundMatch = firstCard === secondCard;\r\n\r\n  if (foundMatch) {\r\n    countMatches();\r\n    disableCardClick();\r\n  } else {\r\n    unflipCards();\r\n  }\r\n}\r\n\r\nfunction countMatches() {\r\n  matchCounter = matchCounter + 1;\r\n  if (foundAllMatches()) {\r\n    setTimeout(function () {\r\n      alert(\"Congratulations! You won!\");\r\n      setTimeout(() => {\r\n        location.reload(), 2000;\r\n      });\r\n    }, 1000);\r\n  }\r\n}\r\n\r\nfunction foundAllMatches() {\r\n  if (matchCounter == randomGameCharacter.length / 2) {\r\n    return true;\r\n  } else {\r\n    return false;\r\n  }\r\n}\r\n\r\nfunction disableCardClick() {\r\n  cardOne.removeEventListener(\"click\", flipMemoryCard);\r\n  cardTwo.removeEventListener(\"click\", flipMemoryCard);\r\n\r\n  resetBoard();\r\n}\r\n\r\nfunction resetBoard() {\r\n  [isCardFlipped, lockBoard] = [false, false];\r\n  [cardOne, cardTwo] = [null, null];\r\n}\r\n\r\nfunction unflipCards() {\r\n  lockBoard = true;\r\n\r\n  setTimeout(() => {\r\n    cardOne.classList.remove(\"flip\");\r\n    cardTwo.classList.remove(\"flip\");\r\n    lockBoard = false;\r\n    resetBoard();\r\n  }, 1000);\r\n  return true;\r\n}\r\n\r\nconst memoryGame = document.querySelector(\".memory-game\");\r\n\r\nfunction displayCardsDiv() {\r\n  let value = document.querySelector(\"#grid\").value;\r\n  let num = 0;\r\n\r\n  if (value === \"first option\") {\r\n    num = 4;\r\n    memoryGame.style.gridTemplateColumns = \"repeat(2, auto)\";\r\n  } else if (value === \"second option\") {\r\n    num = 6;\r\n    memoryGame.style.gridTemplateColumns = \"repeat(3, auto)\";\r\n  } else if (value === \"third option\") {\r\n    num = 12;\r\n    memoryGame.style.gridTemplateColumns = \"repeat(4, auto)\";\r\n  }\r\n\r\n  let generateCards = memoryGame;\r\n  generateCards.innerHTML = \"\";\r\n\r\n  randomGameCharacter = [\r\n    ...gameCharacterArray.slice(0, num / 2),\r\n    ...gameCharacterArray.slice(0, num / 2),\r\n  ];\r\n\r\n  for (let i = 0; i < randomGameCharacter.length; i++) {\r\n    let j = Math.floor(Math.random() * randomGameCharacter.length);\r\n    let temp = randomGameCharacter[i];\r\n    randomGameCharacter[i] = randomGameCharacter[j];\r\n    randomGameCharacter[j] = temp;\r\n  }\r\n\r\n  for (let i = 0; i < num; i++) {\r\n    generateCards.innerHTML += `<div class=\"memory-card${i}\" data-name=\"${randomGameCharacter[i]}\" onclick='flipMemoryCard(${i})' >\r\n    <img class=\"front-face\" src=\"./src/${randomGameCharacter[i]}.png\"/>\r\n    <img class=\"back-face\" src=\"./src/mk5.png\" alt=\"Mortal Combat\" />\r\n  </div>`;\r\n  }\r\n}\r\ndisplayCardsDiv();\r\n\r\nmodule.exports = {\r\n  matchMemoryCards,\r\n  isCardFlipped,\r\n  disableCardClick,\r\n  unflipCards,\r\n  resetBoard,\r\n  displayCardsDiv,\r\n  flipMemoryCard,\r\n  memoryGame,\r\n};\r\n\n\n//# sourceURL=webpack://tasneem-titus-222-memory-game-in-vanilla-js-javascript/./src/index.js?");

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