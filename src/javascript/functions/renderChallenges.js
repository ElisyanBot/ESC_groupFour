import { fetchData } from "./fetchData.js";

async function renderChallenges() {
  const data = await fetchData();
  const cardSection = document.querySelector('#card-section')
  let idOfCard = 0;
  data.forEach(data => {
    const newCard = document.createElement('article');
    newCard.setAttribute("class", "card");
    newCard.setAttribute("id", "id" + idOfCard);

    newCard.innerHTML = `
      <picture class="card-top-part"><img src = ${data.image}></picture>
      <div class="card-bottom-part">
        <div class="card-text-container">
          <h2> ${data.title} </h2>
          <div class="card-subheader-container">
            <ul class="rating-stars">
            <li>&#9733;</li>
            <li>&#9733;</li>
            <li>&#9733;</li>
            <li>&#9733;</li>
            <li>&#9733;</li>
            </ul>
            <small>${data.minParticipants} - ${data.maxParticipants} participants</small>
          </div>
          <p>${data.description}</p>
        </div>
        <div class="card-btn-container">
        <button class="fourth-btn">Book this room</button>
        </div>
      </div>
      `;

    cardSection.appendChild(newCard);

    function setStarsInRanking(idOfCard, rankinValue) {
      const starsItems = document.querySelectorAll(`#id${idOfCard} .rating-stars li`);
      let rankningNumber = rankinValue; //obs!! put ranking data from api in this param

      //removes error from console
      if (rankningNumber > 5) {
        rankningNumber = 0
        console.log(`ERR: challenge card ID: ${idOfCard} has has to high ranking value`)
      }

      for (let index = 0; index < rankningNumber; index++) {
        starsItems[index].classList.add('checked')
      }

    };
    setStarsInRanking(idOfCard, data.rating)

    idOfCard++;
  });
}
renderChallenges();

