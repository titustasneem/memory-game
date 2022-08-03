const card = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.toggle("flip");

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;
    // console.log(hasFlippedCard, firstCard);

    return;
  } 
    // second click
    hasFlippedCard = false;
    secondCard = this;
    // console.log(firstCard, secondCard);
    getMatchingCards();
  
}
// console.log('function was executed')

// console.log('I was clicked!');
// console.log(this);

// function getMatchingCards() {
//   // check if cards match?
//   // console.log(firstCard.dataset.name)
//   // console.log(secondCard.dataset.name)
//   if (firstCard.dataset.name === secondCard.dataset.name) {
//     // its a match (disable click )
//     disableCardClick();
//   } else {
//    unflippedCards();
//   }
// }

function getMatchingCards(){
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;

    isMatch ? disableCardClick() : unflippedCards();
}

function disableCardClick(){
 firstCard.removeEventListener("click", flipCard);
 secondCard.removeEventListener("click", flipCard);
}

function unflippedCards(){
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
      }, 1000);
}

card.forEach((card) => card.addEventListener("click", flipCard));
