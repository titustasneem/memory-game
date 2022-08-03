const card = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard(){
    this.classList.toggle('flip')
    // first click
    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
            // console.log(hasFlippedCard, firstCard);   
    } else {
        // second click
        hasFlippedCard = false;
        secondCard = this;
        console.log(firstCard, secondCard);
    }

    // check if cards match?
    // console.log(firstCard.dataset.name)
    // console.log(secondCard.dataset.name)
    if(firstCard.dataset.name === secondCard.dataset.name) {
        // its a match (disable click )
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    } else{
        setTimeout(()=> {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip')
        }, 1500)
        

    }
    // console.log('function was executed')


    // console.log('I was clicked!');
    // console.log(this);
}

card.forEach(card => card.addEventListener('click', flipCard))