// const mkCharacters = [
//   "Johnny",
//   "Johnny",
//   "kano",
//   "kano",
//   "Kitana",
//   "Kitana",
//   "Raiden",
//   "Raiden",
//   "Scorpion",
//   "Scorpion",
//   "Sonya",
//   "Sonya",
// ];

// let randomMkCharacters = [];

// // const memoryCards = document.querySelectorAll(".memory-card");
// const firstDiv = document.querySelector(`.memory-card`);

// let matchCounter = 0;
// let isCardFlipped = false;
// let lockBoard = false;
// let cardOne, cardTwo;

// // --------------------------------------------------------------------------------------

// (function beginShuffle() {
//   shuffleMemoryCards();
// })();

// // ---------------------------------------------------------------------------------------

// function shuffleMemoryCards() {
//   memoryCards.forEach((card) => {
//     let randomPosition = Math.floor(Math.random() * 12);
//     card.style.order = randomPosition;
//   });
// }

// // --------------------------------------------------------------------------------------

// function flipMemoryCard(num) {
//   console.log(num);
//   const firstDiv = document.querySelector(`.memory-card${num}`);
//   // firstDiv.classList
//   console.log(firstDiv);
//   if (lockBoard) {
//     return;
//   }

//   if (firstDiv === cardOne) {
//     return;
//   }
//   // console.log(firstDiv)

//   firstDiv.classList.add("flip");

//   if (!isCardFlipped) {
//     isCardFlipped = true;
//     cardOne = firstDiv;
//     return;
//   } else {
//     lockBoard = true;
//     cardTwo = firstDiv;
//   }

//   matchMemoryCards(cardOne.dataset.name, cardTwo.dataset.name);
// }

// // -----------------------------------------------------------------------
// function matchMemoryCards(firstCard, secondCard) {
//   let foundMatch = firstCard === secondCard;

//   if (foundMatch) {
//     countMatches();
//     disableCardClick();
//   } else {
//     unflipCards();
//   }
// }
// // ---------------------------------------------------------------------------

// function countMatches() {
//   matchCounter = matchCounter + 1;
//   if (foundAllMatches()) {
//     setTimeout(function () {
//       alert("Congratulations! You won!");
//       setTimeout(() => {
//         location.reload(), 2000;
//       });
//     }, 1000);
//   }
// }

// // --------------------------------------------------------------------------

// function foundAllMatches() {
//   if (matchCounter == memoryCards.length / 2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // ----------------------------------------------------------------------------

// function disableCardClick() {
//   cardOne.removeEventListener("click", flipMemoryCard);
//   cardTwo.removeEventListener("click", flipMemoryCard);

//   resetBoard();
// }

// // ----------------------------------------------------------------------------------

// function resetBoard() {
//   [isCardFlipped, lockBoard] = [false, false];
//   [cardOne, cardTwo] = [null, null];
// }

// // -------------------------------------------------------------------------------------

// function unflipCards() {
//   lockBoard = true;

//   setTimeout(() => {
//     cardOne.classList.remove("flip");
//     cardTwo.classList.remove("flip");
//     lockBoard = false;
//     resetBoard();
//   }, 1000);
//   return true;
// }

// // ---------------------------------------------------------------------------------------

// memoryCards.forEach((card) => card.addEventListener("click", flipMemoryCard));

// module.exports = {
//   memoryCards,
//   matchMemoryCards,
//   isCardFlipped,
//   disableCardClick,
//   unflipCards,
//   resetBoard,
//   shuffleMemoryCards,
// };

// // ------------------------------------------------------------------------------------------

// let memoryGameContainer = document.querySelector(".memory-game");

// function displayCardsDiv() {
//   let value = document.querySelector("#grid").value;
//   console.log(value);
//   let num = 0;

//   const div = document.querySelector(".tester");

//   if (value === "") {
//     return false;
//   }

//   if (value === "first option") {
//     num = 4;
//     div.style.gridTemplateColumns = "repeat(2, auto)";
//   } else if (value === "second option") {
//     num = 6;
//     div.style.gridTemplateColumns = "repeat(3, auto)";
//   } else if (value === "third option") {
//     num = 12;
//     div.style.gridTemplateColumns = "repeat(4, auto)";
//   }

//   let p = document.querySelector(".tester");
//   console.log(p.innerHTML);
//   p.innerHTML = "";

//   randomMkCharacters = mkCharacters.slice(0, num);

//   for (let i = 0; i < randomMkCharacters.length; i++) {
//     let j = Math.floor(Math.random() * randomMkCharacters.length);
//     let temp = randomMkCharacters[i];
//     randomMkCharacters[i] = randomMkCharacters[j];
//     randomMkCharacters[j] = temp;
//   }

//   for (let i = 0; i < num; i++) {
//     p.innerHTML += `<div class="memory-card${i}" data-name="${randomMkCharacters[i]}" onclick='flipMemoryCard(${i})' >
//     <img class="front-face" src="./src/${randomMkCharacters[i]}.png"/>
//     <img class="back-face" src="./src/mk5.png" alt="Mortal Combat" />
//   </div>`;
//   }
// }
// displayCardsDiv();

// // --------------------------------------------------------------------------------------------------------------------------

// v
// v
// v
// v
// v
// v
// v
// v
// v
// v
// v
// v
// v
// v

const mkCharacters = [
  "Johnny",
  // "Johnny",
  "kano",
  // "kano",
  // "Kitana",
  "Kitana",
  // "Raiden",
  "Raiden",
  // "Scorpion",
  "Scorpion",
  // "Sonya",
  "Sonya",
];

for (let i = 0; i < mkCharacters.length; i++) {
  let j = Math.floor(Math.random() * mkCharacters.length);
  let temp = mkCharacters[i];
  mkCharacters[i] = mkCharacters[j];
  mkCharacters[j] = temp;
}

let randomMkCharacters = [];

// const memoryCards = document.querySelectorAll(".memory-card");
const firstDiv = document.querySelector(`.memory-card`);

let matchCounter = 0;
let isCardFlipped = false;
let lockBoard = false;
let cardOne, cardTwo;

// --------------------------------------------------------------------------------------

// (function beginShuffle() {
//   shuffleMemoryCards();
// })();

// ---------------------------------------------------------------------------------------

// function shuffleMemoryCards() {
//   memoryCards.forEach((card) => {
//     let randomPosition = Math.floor(Math.random() * 12);
//     card.style.order = randomPosition;
//   });
// }

// --------------------------------------------------------------------------------------

function flipMemoryCard(num) {
  // let generateRandomCharacter =
  //   Math.random().toString(36).substring(2, 15) +
  //   Math.random().toString(36).substring(2, 15);

  // console.log(generateRandomCharacter);

  // console.log(num);
  const firstDiv = document.querySelector(`.memory-card${num}`);
  // firstDiv.classList
  // console.log(firstDiv);
  if (lockBoard) {
    return;
  }

  if (firstDiv === cardOne) {
    return;
  }
  // console.log(firstDiv)

  firstDiv.classList.add("flip");

  if (!isCardFlipped) {
    isCardFlipped = true;
    cardOne = firstDiv;
    return;
  } else {
    lockBoard = true;
    cardTwo = firstDiv;
  }

  matchMemoryCards(cardOne.dataset.name, cardTwo.dataset.name);
}

// -----------------------------------------------------------------------
function matchMemoryCards(firstCard, secondCard) {
  let foundMatch = firstCard === secondCard;

  if (foundMatch) {
    countMatches();
    disableCardClick();
  } else {
    unflipCards();
  }
}
// ---------------------------------------------------------------------------

function countMatches() {
  matchCounter = matchCounter + 1;
  if (foundAllMatches()) {
    setTimeout(function () {
      alert("Congratulations! You won!");
      setTimeout(() => {
        location.reload(), 2000;
      });
    }, 1000);
  }
}

// --------------------------------------------------------------------------

function foundAllMatches() {
  if (matchCounter == randomMkCharacters.length / 2) {
    return true;
  } else {
    return false;
  }
}

// ----------------------------------------------------------------------------

function disableCardClick() {
  cardOne.removeEventListener("click", flipMemoryCard);
  cardTwo.removeEventListener("click", flipMemoryCard);

  resetBoard();
}

// ----------------------------------------------------------------------------------

function resetBoard() {
  [isCardFlipped, lockBoard] = [false, false];
  [cardOne, cardTwo] = [null, null];
}

// -------------------------------------------------------------------------------------

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    cardOne.classList.remove("flip");
    cardTwo.classList.remove("flip");
    lockBoard = false;
    resetBoard();
  }, 1000);
  return true;
}

// ---------------------------------------------------------------------------------------

memoryCards.forEach((card) => card.addEventListener("click", flipMemoryCard));

module.exports = {
  memoryCards,
  matchMemoryCards,
  isCardFlipped,
  disableCardClick,
  unflipCards,
  resetBoard,
  shuffleMemoryCards,
};

// ------------------------------------------------------------------------------------------

let memoryGameContainer = document.querySelector(".memory-game");

function displayCardsDiv() {
  let value = document.querySelector("#grid").value;
  // console.log(value);
  let num = 0;

  const div = document.querySelector(".tester");

  if (value === "") {
    return false;
  }

  if (value === "first option") {
    num = 4;
    div.style.gridTemplateColumns = "repeat(2, auto)";
  } else if (value === "second option") {
    num = 6;
    div.style.gridTemplateColumns = "repeat(3, auto)";
  } else if (value === "third option") {
    num = 12;
    div.style.gridTemplateColumns = "repeat(4, auto)";
  }

  let p = document.querySelector(".tester");
  // console.log(p.innerHTML);
  p.innerHTML = "";

   randomMkCharacters = [...mkCharacters.slice(0,num / 2) , ...mkCharacters.slice(0, num / 2) ];
  // console.log(testing)

  // randomMkCharacters = mkCharacters.slice(0, num / 2);

  for (let i = 0; i < randomMkCharacters.length; i++) {
    let j = Math.floor(Math.random() * randomMkCharacters.length);
    let temp = randomMkCharacters[i];
    randomMkCharacters[i] = randomMkCharacters[j];
    randomMkCharacters[j] = temp;
  }

  for (let i = 0; i < num; i++) {
    p.innerHTML += `<div class="memory-card${i}" data-name="${randomMkCharacters[i]}" onclick='flipMemoryCard(${i})' >
    <img class="front-face" src="./src/${randomMkCharacters[i]}.png"/>
    <img class="back-face" src="./src/mk5.png" alt="Mortal Combat" />
  </div>`;
  }
}
displayCardsDiv();

// --------------------------------------------------------------------------------------------------------------------------
