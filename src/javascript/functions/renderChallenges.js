import { fetchData } from "./fetchData.js";
import { setStarsInRating } from "./renderStars.js";

export default async function renderChallenges() {
  const data = await fetchData();
  const cardSection = document.querySelector('#card-section')
  let idOfCard = 0;

  data.forEach(data => {
    const newCard = document.createElement('article');
    newCard.setAttribute("id", "id" + idOfCard); // Using id prefix to escape escaping when using querySelector when rendering stars
    newCard.setAttribute("class", `card ${data.type}`);

    for (let i = 0; i < data.labels.length; i++) {
      newCard.classList.add(`${data.labels[i]}`);
    }

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

    setStarsInRating(idOfCard, data.rating)

    idOfCard++;
  });
}
renderChallenges();