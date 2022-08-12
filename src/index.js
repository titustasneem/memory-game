const memoryCards = document.querySelectorAll(".memory-card");

let matchCounter = 0;
let flippedCards = false;
let lockBoard = false;
let cardOne, cardTwo;

(function beginShuffle() {
  shuffleMemoryCards();
})();

function matchMemoryCards(firstCard, secondCard) {
  let foundMatch = firstCard === secondCard;

  if (foundMatch) {
    matchCounter++;
    disableCardClick();
  } else {
    unflipCards();
  }

  if (matchCounter == memoryCards.length / 2) {
    window.alert("Congratulations! You Won!");
    setTimeout(() => location.reload(), 2000);
  }
}

function flipMemoryCard() {
  if (lockBoard) {
    return;
  }

  if (this === cardOne) {
    return;
  }

  this.classList.add("flip");

  if (!flippedCards) {
    flippedCards = true;
    cardOne = this;
    return;
  } else {
    flippedCards = false;
    cardTwo = this;
  }
  matchMemoryCards(cardOne.dataset.name, cardTwo.dataset.name);
}

function resetBoard() {
  [flippedCards, lockBoard] = [false, false];
  [cardOne, cardTwo] = [null, null];
}

function disableCardClick() {
  cardOne.removeEventListener("click", flipMemoryCard);
  cardTwo.removeEventListener("click", flipMemoryCard);

  resetBoard();
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

memoryCards.forEach((card) => card.addEventListener("click", flipMemoryCard));

function shuffleMemoryCards() {
  memoryCards.forEach((card) => {
    let randomPosition = Math.floor(Math.random() * 12);
    card.style.order = randomPosition;
  });
}

module.exports = {
  memoryCards,
  matchMemoryCards,
  flippedCards,
  disableCardClick,
  unflipCards,
  resetBoard,
  shuffleMemoryCards,
};