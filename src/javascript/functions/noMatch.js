export default function noMatches() {
  const noMatchesDiv = document.querySelector('.no-matches-container');
  const cards = document.querySelectorAll('article');
  let cardsArray = Array.prototype.slice.call(cards);

  const displayNone = (card) => card.style.display == 'none';

  if (cardsArray.every(displayNone)) {
    noMatchesDiv.innerHTML = '<p class="no-matches-text">No matching challenges</p>'
  }
  else {
    noMatchesDiv.innerHTML = ''
  }
}

