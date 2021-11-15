import { fetchData } from "./fetchData.js";

async function renderChallenges() {
  const data = await fetchData();
  const cardSection = document.querySelector('#card-section')
  data.forEach(data => {
    const newCard = document.createElement('article');
    newCard.setAttribute("class", "card");

    newCard.innerHTML = `
      <picture class="card-top-part"><img src = ${data.image}></picture>
      <div class="card-bottom-part">
        <div class="card-text-container">
          <h2> ${data.title} </h2>
          <div class="card-subheader-container">
            <ul class="rating-stars"><li>${data.rating}</li></ul>
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
  });
}
renderChallenges();