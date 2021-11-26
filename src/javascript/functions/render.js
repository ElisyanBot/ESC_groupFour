import { setStarsInRating } from "./renderStars.js";

export default function render(data, idOfCard) {
  const newCard = document.createElement('article');
  newCard.setAttribute("id", "id" + idOfCard);
  newCard.setAttribute("class", `card ${data.type}`);

  data.labels.forEach(label => newCard.classList.add(`${label}`));

  newCard.innerHTML = `
      <picture class="card-top-part"><img src = ${data.image}></picture>
      <div class="card-bottom-part">
        <div class="card-text-container">
          <h2>${data.title} (${data.type})</h2>
          <div class="card-subheader-container">
            <ul class="rating-stars">
              <li>&#9733;</li>
              <li>&#9733;</li>
              <li>&#9733;</li>
              <li>&#9733;</li>
              <li>&#9733;</li>
            </ul>
            <small>
            ${data.minParticipants} - ${data.maxParticipants} participants
            </small>
          </div>
          <p>${data.description}</p>
        </div>
        <div class="card-btn-container">
          <button class="fourth-btn">Book this room</button>
        </div>
      </div>
      `;

  document.querySelector('#card-section').appendChild(newCard);

  setStarsInRating(idOfCard, data.rating);
}