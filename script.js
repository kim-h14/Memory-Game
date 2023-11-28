// creation of board game with cards
const cards = [
      'https://picsum.photos/id/237/100/100', 
      'https://picsum.photos/id/238/100/100',
      'https://picsum.photos/id/239/100/100',
      'https://picsum.photos/id/240/100/100',
      'https://picsum.photos/id/241/100/100',
      'https://picsum.photos/id/242/100/100',
      'https://picsum.photos/id/243/100/100',
      'https://picsum.photos/id/244/100/100'
    ];

const gameBoard = document.getElementById('game-board');
let selectedCards = [];

function createCard(cardUrl){
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.value = cardUrl;

  const cardContent = document.createElement('img');
  cardContent.classList.add('card-content');
  cardContent.src = cardUrl;

  card.appendChild(cardContent);

  card.addEventListener('click', onCardClick);
  return card;
}

function duplicateArray(arraySimple){
  let arrayDouble = [];
  arrayDouble.push(...arraySimple);
  arrayDouble.push(...arraySimple);

  return arrayDouble;
}

// function to shuffle array

function shuffleArray(arrayToshuffle){
  const arrayShuffled = arrayToshuffle.sort(() => 0.5 - Math.random());
  return arrayShuffled;
}

// Function to flip card on click
function onCardClick(e){
  const card = e.target.parentElement;
  card.classList.add("flip");

  // add card to table on click for potential matching
  selectedCards.push(card);
  if(selectedCards.length == 2){
    if(selectedCards[0].dataset.value == selectedCards[1].dataset.value){
       // pair found
       selectedCards[0].classList.add("matched");
       selectedCards[1].classList.add("matched");
       selectedCards[0].removeEventListner('click', onCardClick);
       selectedCards[1].removeEventListner('click', onCardClick);

    }
    else {
      // wrong pick
      selectedCards[0].classList.remove("flip");
       selectedCards[1].classList.remove("flip");
    }
    selectedCards = [];
  }

}


let allCards = duplicateArray(cards);

// Shuffle array
allCards = shuffleArray(allCards);
allCards.forEach(card => {
  const cardHtml =createCard(card);
  gameBoard.appendChild(cardHtml);  
})

