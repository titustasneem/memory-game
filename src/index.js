
const memoryCards = document.querySelectorAll(".memory-card");

let matchCounter = 0;

let flippedCards = false;
let lockBoard = false;
let cardOne, cardTwo;


function flipMemoryCard() {
  if (lockBoard) return;
  if (this === cardOne) return;
  this.classList.add("flip");
 
  if (!flippedCards) {
    // first click
    flippedCards = true;
    cardOne = this;
 
    return;
  }
  // second click
  flippedCards = false;
  cardTwo = this;
  matchMemoryCards();
}
 
 
function matchMemoryCards() {

  let isMatch = cardOne.dataset.name === cardTwo.dataset.name;
 
  // isMatch ? disableCardClick() : unflippedCards();

  if(isMatch){
    matchCounter++;
    disableCardClick();
    
   } else {
      unflippedCards();
   }

}
 
function disableCardClick() {
  cardOne.removeEventListener("click", flipMemoryCard);
  cardTwo.removeEventListener("click", flipMemoryCard);
 

  resetBoard();

}
 
function unflippedCards() {
  lockBoard = true;
 
  setTimeout(() => {
    cardOne.classList.remove("flip");
    cardTwo.classList.remove("flip");
    lockBoard = false;
    resetBoard();
  }, 800);
}
 
function resetBoard() {
  [flippedCards, lockBoard] = [false, false];
  [cardOne, cardTwo] = [null, null];
}
 
 (function shuffleMemoryCards() {
  memoryCards.forEach((card) => {
    let randomPosition = Math.floor(Math.random() * 12);
    card.style.order = randomPosition;
  });
})();
 
memoryCards.forEach((card) => card.addEventListener("click", flipMemoryCard));
 
function countdownTimer() {
  const timer = document.getElementById('timer');
  let seconds = 30;
  const interval = setInterval(() => {
    seconds--;
    timer.innerHTML = `Time left: ${seconds} second / seconds`;

    if(matchCounter == memoryCards.length / 2){
      clearInterval(interval);
      window.alert("Congratulations! You Won!");
      setTimeout(() => location.reload(), 2000);
        } 
        else if (seconds < 1) {
        clearInterval(interval);
        alert("You have run out of time. Try again...");
        setTimeout(() => location.reload(), 2000);
      }
    }, 1000);
}
countdownTimer()
 



module.exports = { memoryCards, flipMemoryCard, matchMemoryCards, disableCardClick};




 
 
 
 

