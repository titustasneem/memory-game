// const gameCharacterArray = [
//   "Johnny",
//   // "Johnny",
//   "kano",
//   // "kano",
//   // "Kitana",
//   "Kitana",
//   // "Raiden",
//   "Raiden",
//   // "Scorpion",
//   "Scorpion",
//   // "Sonya",
//   "Sonya",
// ];

// for (let i = 0; i < gameCharacterArray.length; i++) {
//   let j = Math.floor(Math.random() * gameCharacterArray.length);
//   let temp = gameCharacterArray[i];
//   gameCharacterArray[i] = gameCharacterArray[j];
//   gameCharacterArray[j] = temp;
// }

// let randomGameCharacter = [];

// let matchCounter = 0;
// let isCardFlipped = false;
// let lockBoard = false;
// let cardOne, cardTwo;

// // --------------------------------------------------------------------------------------

// // (function beginShuffle() {
// //   shuffleMemoryCards();
// // })();

// // ---------------------------------------------------------------------------------------

// // function shuffleMemoryCards() {
// //   memoryCards.forEach((card) => {
// //     let randomPosition = Math.floor(Math.random() * 12);
// //     card.style.order = randomPosition;
// //   });
// // }

// // --------------------------------------------------------------------------------------

// function flipMemoryCard(num) {

//   // console.log(num);
//   const memoryCards = document.querySelector(`.memory-card${num}`);
//   // memoryCards.classList
//   // console.log(memoryCards);
//   if (lockBoard) {
//     return;
//   }

//   if (memoryCards === cardOne) {
//     return;
//   }
//   // console.log(memoryCards)

//   memoryCards.classList.add("flip");

//   if (!isCardFlipped) {
//     isCardFlipped = true;
//     cardOne = memoryCards;
//     return;
//   } else {
//     lockBoard = true;
//     cardTwo = memoryCards;
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
//   if (matchCounter == randomGameCharacter.length / 2) {
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

// // ------------------------------------------------------------------------------------------

// // let memoryGameContainer = document.querySelector(".memory-game");

// function displayCardsDiv() {
//   let value = document.querySelector("#grid").value;
//   // console.log(value);
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
//   // console.log(p.innerHTML);
//   p.innerHTML = "";

//    randomGameCharacter = [...gameCharacterArray.slice(0,num / 2) , ...gameCharacterArray.slice(0, num / 2) ];
//   // console.log(testing)

//   // randomGameCharacter = gameCharacterArray.slice(0, num / 2);

//   for (let i = 0; i < randomGameCharacter.length; i++) {
//     let j = Math.floor(Math.random() * randomGameCharacter.length);
//     let temp = randomGameCharacter[i];
//     randomGameCharacter[i] = randomGameCharacter[j];
//     randomGameCharacter[j] = temp;
//   }

//   for (let i = 0; i < num; i++) {
//     p.innerHTML += `<div class="memory-card${i}" data-name="${randomGameCharacter[i]}" onclick='flipMemoryCard(${i})' >
//     <img class="front-face" src="./src/${randomGameCharacter[i]}.png"/>
//     <img class="back-face" src="./src/mk5.png" alt="Mortal Combat" />
//   </div>`;
//   }
// }
// displayCardsDiv();

// // --------------------------------------------------------------------------------------------------------------------------
// module.exports = {
//   memoryCards,
//   matchMemoryCards,
//   isCardFlipped,
//   disableCardClick,
//   unflipCards,
//   resetBoard,
//   shuffleMemoryCards,
// };

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
// v
// v
// v
// v
// v

const gameCharacterArray = [
  "Johnny",
  "kano",
  "Kitana",
  "Raiden",
  "Scorpion",
  "Sonya",
];

for (let i = 0; i < gameCharacterArray.length; i++) {
  let j = Math.floor(Math.random() * gameCharacterArray.length);
  let temp = gameCharacterArray[i];
  gameCharacterArray[i] = gameCharacterArray[j];
  gameCharacterArray[j] = temp;
}

let randomGameCharacter = [];

let matchCounter = 0;
let isCardFlipped = false;
let lockBoard = false;
let cardOne, cardTwo;


function flipMemoryCard(num) {
  const memoryCards = document.querySelector(`.memory-card${num}`);

  if (lockBoard) return;
  if (memoryCards === cardOne) return;

  memoryCards.classList.add("flip");

  if (!isCardFlipped) {
    isCardFlipped = true;
    cardOne = memoryCards;
    return;
  } else {
    lockBoard = true;
    cardTwo = memoryCards;
  }

  matchMemoryCards(cardOne.dataset.name, cardTwo.dataset.name);
  memoryCards.forEach((card) => card.addEventListener("click", flipMemoryCard));

}

function matchMemoryCards(firstCard, secondCard) {
  let foundMatch = firstCard === secondCard;

  if (foundMatch) {
    countMatches();
    disableCardClick();
  } else {
    unflipCards();
  }
}

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

function foundAllMatches() {
  if (matchCounter == randomGameCharacter.length / 2) {
    return true;
  } else {
    return false;
  }
}

function disableCardClick() {
  cardOne.removeEventListener("click", flipMemoryCard);
  cardTwo.removeEventListener("click", flipMemoryCard);

  resetBoard();
}

function resetBoard() {
  [isCardFlipped, lockBoard] = [false, false];
  [cardOne, cardTwo] = [null, null];
}

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

const memoryGame = document.querySelector(".memory-game");
function displayCardsDiv() {
  let value = document.querySelector("#grid").value;
  let num = 0;

  if (value === "") {
    return false;
  }

  if (value === "first option") {
    num = 4;
    memoryGame.style.gridTemplateColumns = "repeat(2, auto)";
  } else if (value === "second option") {
    num = 6;
    memoryGame.style.gridTemplateColumns = "repeat(3, auto)";
  } else if (value === "third option") {
    num = 12;
    memoryGame.style.gridTemplateColumns = "repeat(4, auto)";
  }

  let generateCards = memoryGame;
  generateCards.innerHTML = "";

  randomGameCharacter = [
    ...gameCharacterArray.slice(0, num / 2),
    ...gameCharacterArray.slice(0, num / 2),
  ];

  for (let i = 0; i < randomGameCharacter.length; i++) {
    let j = Math.floor(Math.random() * randomGameCharacter.length);
    let temp = randomGameCharacter[i];
    randomGameCharacter[i] = randomGameCharacter[j];
    randomGameCharacter[j] = temp;
  }

  for (let i = 0; i < num; i++) {
    generateCards.innerHTML += `<div class="memory-card${i}" data-name="${randomGameCharacter[i]}" onclick='flipMemoryCard(${i})' >
    <img class="front-face" src="./src/${randomGameCharacter[i]}.png"/>
    <img class="back-face" src="./src/mk5.png" alt="Mortal Combat" />
  </div>`;
  }
}
displayCardsDiv();

module.exports ={
  
  matchMemoryCards,
  isCardFlipped,
  disableCardClick,
  unflipCards,
  resetBoard,
  displayCardsDiv,
  flipMemoryCard,
};
