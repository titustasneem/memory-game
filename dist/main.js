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

eval("// Seelct all innerCard divs because those divs will get clicked on\r\n//  and the transform: rotate Y will be applied on them\r\nlet cards = document.querySelectorAll(\".innerCard\");\r\n\r\n// firstClick stores a boolean to tell whether any innerCard div has been clicked on or not \r\nlet firstClick = false;\r\n\r\n// will store how many innerCard divs have been clicked on, Max value is two\r\nlet count = 0;\r\n\r\n// stores atmost 2 innerCard divs which got clicked on\r\nlet matchingCards = [];\r\n\r\n// creating a property state for all innerCard divs\r\n//  and aSSigning the initial value of 'unclicked'\r\ncards.forEach((card) => {\r\n  card.state = \"unclicked\";\r\n});\r\n\r\n// shuffle function will shuffle imgSrcs of images (to get random flipcars at every play)\r\n// it will aSSign the values of imgSrcs property of every <img> element\r\nshuffle();\r\n\r\n\r\n// adding click eventListener for all innerCard divs\r\nfor (let i = 0; i < cards.length; i++) {\r\n    cards[i].addEventListener(\"click\", () => {\r\n\r\n        // if firstClick = false then call time function\r\n      if (!firstClick) {\r\n        time();\r\n      }\r\n        // aSSigning true to firstClick so that the time function gets called \r\n        // only once in a complete game\r\n        firstClick = true;\r\n     \r\n\r\n// if state of the clicked card(innercard) is unclicked then:\r\n      if (cards[i].state == \"unclicked\") {\r\n        //   rotate the clicked card(innercard div)\r\n        // applying transform rotate property to innerCard div is what causes\r\n        // the whole card to flip about it's axis\r\n        cards[i].style.transform = \"rotateY(180deg)\";\r\n\r\n        // update the state of the innerCard to 'clicked'\r\n        cards[i].state = \"clicked\";\r\n\r\n        // increment count\r\n        count++;\r\n\r\n        // push clicked innerCard to matchingCards\r\n        matchingCards.push(cards[i]);\r\n\r\n        // check function will checker whether the two innerCrads in matchingCards array\r\n        // have images of the same src property value or not\r\n        check();\r\n      } else if(cards[i].state == 'clicked'){\r\n          cards[i].style.transform = 'rotateY(0deg)'\r\n          cards[i].state = 'unclicked'\r\n          count--\r\n          matchingCards = []\r\n      }\r\n    });\r\n  }\r\n\r\nfunction shuffle() {\r\n    let images = document.querySelectorAll(\"img\");\r\n    \r\n    // no of flipcards = no of imgSrcs\r\n    let imgSrcs = [\"Android17.png\",\"bulma.jpg\",\"cell.gif\",\"goku.jpg\",\"master roshi.jpg\",\"piccolo.png\"\r\n    ];\r\n\r\n//   loop is an algorithm which will shuffle images in imgSrcs array \r\n    for (let i = imgSrcs.length - 1; i > 0; i--) {\r\n      let j = Math.floor(Math.random() * i);\r\n      let temp = imgSrcs[i];\r\n      imgSrcs[i] = imgSrcs[j];\r\n      imgSrcs[j] = temp;\r\n    }\r\n//   will assign the value to the src property of every <img> element \r\n    for (let i = 0; i < images.length; i++) {\r\n      images[i].src = imgSrcs[i];\r\n    }\r\n  }\r\n\r\n \r\n\r\n\r\nfunction check() {\r\n  if (count == 2) {\r\n    if (\r\n      matchingCards[0].querySelector(\"img\").src ==\r\n      matchingCards[1].querySelector(\"img\").src\r\n    ) {\r\n        matched()\r\n    } else {\r\n       unmatched(matchingCards[0], matchingCards[1]) \r\n    }\r\n  }\r\n}\r\n\r\n// once cards are matched we want to set state to blocked, so it can't be clicked again\r\nfunction matched(){\r\n    matchingCards[0].state = 'blocked'\r\n    matchingCards[1].state = 'blocked'\r\n\r\n    // value of count is updated  0 and matchingCards to an empty array\r\n    count = 0;\r\n    matchingCards = [];\r\n    let score = document.querySelector('#score').innerHTML;\r\n    score++\r\n    document.querySelector('#score').innerHTML = score\r\n}\r\n\r\nfunction unmatched(x,y){\r\n   setTimeout(()=> {\r\n    x.style.transform = 'rotateY(0deg)'\r\n    y.style.transform = 'rotateY(0deg)'\r\n   }, 750) \r\n\r\n  //  state to unclicked to hide images again\r\n   matchingCards[0].state = 'unclicked'\r\n   matchingCards[1].state = 'unclicked'\r\n   count = 0\r\n   matchingCards = []\r\n}\r\n\r\nfunction time() {\r\n  let seconds = 0;\r\n  let minutes = 0;\r\n  let SS;\r\n  let MM;\r\n\r\n//   set interval will update the time displayed on screen every 1 second\r\n  setInterval(() => {\r\n    seconds++;\r\n    if (seconds === 60) {\r\n      seconds = 0;\r\n      minutes++;\r\n    }\r\n    seconds < 10 ? SS = `0${seconds}` : SS = `${seconds}`;\r\n    minutes < 10 ? MM = `0${minutes}` : SS = `${minutes}`;\r\n\r\n    // display the time\r\n    document.querySelector(\"#time\").innerHTML = `${MM}:${SS}`;\r\n  }, 1000);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://tasneem-titus-222-memory-game-in-vanilla-js-javascript/./src/index.js?");

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