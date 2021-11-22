import { setStarsInRating } from "./renderStars.js";

export default async function indexRenderChallenges(dataUnsorted) {
  const cardSection = document.querySelector('#card-section')
  let idOfCard = 0;

  const data = dataUnsorted.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));

  for (let index = 0; index < 3; index++) {
    const newCard = document.createElement('article');
    newCard.setAttribute("id", "id" + idOfCard); // Using id prefix to escape escaping when using querySelector when rendering stars
    newCard.setAttribute("class", `card ${data[index].type}`);

    data[index].labels.forEach(labels => {
      for (let i = 0; i < labels.length; i++) {
        newCard.classList.add(`${data[index].labels[i]}`);
      }
    });

    newCard.innerHTML = `
      <picture class="card-top-part"><img src = ${data[index].image}></picture>
      <div class="card-bottom-part">
        <div class="card-text-container">
          <h2> ${data[index].title} </h2>
          <div class="card-subheader-container">
            <ul class="rating-stars">
              <li>&#9733;</li>
              <li>&#9733;</li>
              <li>&#9733;</li>
              <li>&#9733;</li>
              <li>&#9733;</li>
            </ul>
            <small>
            ${data[index].minParticipants} - ${data[index].maxParticipants} participants
            </small>
          </div>
          <p>${data[index].description}</p>
        </div>
        <div class="card-btn-container">
          <button class="fourth-btn">Book this room</button>
        </div>
      </div>
      `;

    cardSection.appendChild(newCard);

    setStarsInRating(idOfCard, data[index].rating)

    idOfCard++;
  };
}