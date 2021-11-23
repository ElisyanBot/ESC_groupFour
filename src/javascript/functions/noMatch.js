export default function noMatches() {
  const noMatchesDiv = document.querySelector('.no-matches');
  const cards = document.querySelectorAll('article');
  let cardsArray = Array.prototype.slice.call(cards);

  const displayNone = (card) => card.style.display == 'none';

  if (cardsArray.every(displayNone)) {
    noMatchesDiv.innerHTML = '<h1>No matching challenges</h1>'
  }
  else {
    noMatchesDiv.innerHTML = ''
  }
}

