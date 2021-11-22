import render from "./render.js";

export default async function renderChallenges(data) {
  let idOfCard = 0;
  data.forEach(data => {
    render(data, idOfCard);
    idOfCard++;
  });
}