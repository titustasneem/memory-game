const memoryCards = document.querySelectorAll(".memory-card");
// --------------------------
let matchCounter = 0;
let flippedCards = false;
let lockBoard = false;
let cardOne, cardTwo;
// --------------------------
(function beginShuffle(){
  shuffleMemoryCards()
})();
// -------------------------------------------------------------
function flipMemoryCard() {
  if (lockBoard) {
    return;
  }

  if (this === cardOne) {
    return;
  }

  this.classList.add("flip");

  if (!flippedCards) {
    // first click
    flippedCards = true;
    cardOne = this;
    return;
  } else {
    // second click
    flippedCards = false;
    cardTwo = this;
  }
  matchMemoryCards();
}
// ------------------------------------------------------------

function matchMemoryCards() {
  let foundMatch = cardOne.dataset.name === cardTwo.dataset.name;

  if (foundMatch) {
    matchCounter++;
    disableCardClick();
  } else {
    unflipCards();
  }
}
// -----------------------------------------------------------------------
function disableCardClick() {
  cardOne.removeEventListener("click", flipMemoryCard);
  cardTwo.removeEventListener("click", flipMemoryCard);

  resetBoard();
}
// -------------------------------------------------------------------------

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    cardOne.classList.remove("flip");
    cardTwo.classList.remove("flip");
    lockBoard = false;
    resetBoard();
  }, 1000);
}
// ----------------------------------------------------------------------------
function resetBoard() {
  [flippedCards, lockBoard] = [false, false];
  [cardOne, cardTwo] = [null, null];
}
// -----------------------------------------------------------------------------

memoryCards.forEach((card) => card.addEventListener("click", flipMemoryCard));
// --------------------------------------------------------------------------------------

function shuffleMemoryCards() {
  memoryCards.forEach((card) => {
    let randomPosition = Math.floor(Math.random() * 12);
    card.style.order = randomPosition;
  });
}

// ---------------------------------------------------------------------------------------

function countdownTimer() {
  const timer = document.getElementById("timer");
  let seconds = 25;
  const interval = setInterval(() => {
    seconds--;
    timer.innerHTML = `Time left: ${seconds} second / seconds`;

    if (matchCounter == memoryCards.length / 2) {
      clearInterval(interval);
      window.alert("Congratulations! You Won!");
      setTimeout(() => location.reload(), 2000);
    } else if (seconds < 1) {
      clearInterval(interval);
      alert("You have run out of time. Try again...");
      setTimeout(() => location.reload(), 2000);
    }
  }, 1000);
}
countdownTimer();
// ----------------------------------------------------------------------

module.exports = { memoryCards,
  flippedCards,
  disableCardClick,
  unflipCards,
  resetBoard,
  shuffleMemoryCards,
  countdownTimer };
