// const gameCharacterArray = [
//   "Johnny",
//   "kano",
//   "Kitana",
//   "Raiden",
//   "Scorpion",
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
// let clicks = 0;
// if(clicks > 0){
//   countDownTimer();
// }
// function flipMemoryCard(num) {
//   clicks++

//   const memoryCards = document.querySelector(`.memory-card${num}`);

//   if (lockBoard) return;
//   if (memoryCards === cardOne) return;

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
//   memoryCards.forEach((card) => card.addEventListener("click", flipMemoryCard));
// }

// function matchMemoryCards(firstCard, secondCard) {
//   let foundMatch = firstCard === secondCard;

//   if (foundMatch) {
//     countMatches();
//     disableCardClick();
//   } else {
//     unflipCards();
//   }
// }

// function countMatches() {
//   matchCounter = matchCounter + 1;
// }

// function foundAllMatches() {
//   if (matchCounter == randomGameCharacter.length / 2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function disableCardClick() {
//   if (cardOne || cardTwo) {
//     cardOne.removeEventListener("click", flipMemoryCard);
//     cardTwo.removeEventListener("click", flipMemoryCard);
//   }

//   resetBoard();
// }

// function resetBoard() {
//   [isCardFlipped, lockBoard] = [false, false];
//   [cardOne, cardTwo] = [null, null];
// }

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

// const memoryGame = document.querySelector(".memory-game");

// function displayCardsDiv() {
//   clicks = 0;
//   let value = document.querySelector("#grid").value;
//   let num = 0;

//   if (value === "first option") {
//     num = 4;
//     memoryGame.style.gridTemplateColumns = "repeat(2, auto)";
//     // countDownTimer();

//     // resetTimer();
//   } else if (value === "second option") {
//     num = 6;
//     memoryGame.style.gridTemplateColumns = "repeat(3, auto)";
//     // countDownTimer();

//     // resetTimer();
//   } else if (value === "third option") {
//     num = 12;
//     memoryGame.style.gridTemplateColumns = "repeat(4, auto)";
//     // countDownTimer();

//     // resetTimer();
//   }

//   let generateCards = memoryGame;
//   generateCards.innerHTML = "";

//   randomGameCharacter = [
//     ...gameCharacterArray.slice(0, num / 2),
//     ...gameCharacterArray.slice(0, num / 2),
//   ];

//   for (let i = 0; i < randomGameCharacter.length; i++) {
//     let j = Math.floor(Math.random() * randomGameCharacter.length);
//     let temp = randomGameCharacter[i];
//     randomGameCharacter[i] = randomGameCharacter[j];
//     randomGameCharacter[j] = temp;
//   }

//   for (let i = 0; i < num; i++) {
//     generateCards.innerHTML += `<div class="memory-card${i}" data-name="${randomGameCharacter[i]}" onclick='flipMemoryCard(${i})' >
//     <img class="front-face" src="./src/${randomGameCharacter[i]}.png"/>
//     <img class="back-face" src="./src/mk5.png" alt="Mortal Combat" />
//   </div>`;
//   }
// }

// displayCardsDiv();
// let seconds = 0;
// function countDownTimer() {
//   const timer = document.querySelector(".timer");
//    seconds = 0;

//   const interval = setInterval(() => {
//     seconds++;
//     timer.innerHTML = `You are currently on: ${seconds} second/s`;

//     if (foundAllMatches()) {
//       clearInterval(interval);
//       window.alert(`Congratulations! You Won the game in ${seconds} seconds`);
//       setTimeout(() => location.reload(), 2000);
//     }
//   }, 1000);
// }

// // function resetTimer() {
// //   seconds = 0;
// //   // timer.innerHTML = "";
// //   // timer.innerHTML = `You are currently on: ${seconds} second/s`;
// //   clearTimeout(countDownTimer());
// // }

// module.exports = {
//   matchMemoryCards,
//   isCardFlipped,
//   disableCardClick,
//   unflipCards,
//   resetBoard,
//   displayCardsDiv,
//   flipMemoryCard,
//   memoryGame,
// };
// --------------------------------------------------------------------

let randomGameCharacter = [];
let matchCounter = 0;
let isCardFlipped = false;
let lockBoard = false;
let cardOne, cardTwo;
let clicks = 0;
let seconds = 0;
const timer = document.querySelector(".timer");


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




function flipMemoryCard(num) {
  clicks = 1
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

  // if (foundAllMatches()) {
  //   // clearInterval(interval);
  //   window.alert(`Congratulations! You Won the game in ${seconds} seconds`);
  //   setTimeout(() => location.reload(), 2000);
  // }
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
    clicks = 0;
    // seconds = 0;
    setTimeout(function () {
      alert(`Congratulations! You Won the game in ${seconds} seconds`);
      setTimeout(() => {
        location.reload(), 2000;
        seconds = 0
      });
    }, 1000);
  }
}

function foundAllMatches() {
  if (matchCounter === randomGameCharacter.length / 2) {
    return true;
  } else {
    return false;
  }
}

function disableCardClick() {
  if (cardOne || cardTwo) {
    cardOne.removeEventListener("click", flipMemoryCard);
    cardTwo.removeEventListener("click", flipMemoryCard);
  }

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
  timer.innerHTML = '';
  clicks = 0;
  seconds = 0;
  let value = document.querySelector("#grid").value;
  let num = 0;

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
function countDownTimer() {

  // let seconds = 0;
  setTimeout(() => {
    seconds += 1;
    timer.innerHTML = `You are currently on: ${seconds} second/s`;
  }, 1000);
}

 setInterval(() => {
  if (clicks !== 0) {
    countDownTimer();
  }
}, 1000);



module.exports = {
  matchMemoryCards,
  isCardFlipped,
  disableCardClick,
  unflipCards,
  resetBoard,
  displayCardsDiv,
  flipMemoryCard,
  memoryGame,
};
