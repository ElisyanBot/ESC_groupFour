import render from "./render.js";

export default async function indexRenderChallenges(dataUnsorted) {
  const data = dataUnsorted.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
  let idOfCard = 0;
  for (let index = 0; index < 3; index++) {
    render(data[index], idOfCard);
    idOfCard++;
  };
}