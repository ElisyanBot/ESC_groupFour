const body = document.querySelector('body');
// For all
import MobileMeny from './functions/mobileMeny.js';
MobileMeny();

import { fetchData } from "./functions/fetchData.js";
const data = await fetchData();

// For index
import indexRenderChallenges from './functions/indexRenderChallenges.js';
if (body.className == "index") {
  indexRenderChallenges(data);
}

// For challenge
import renderChallenges from './functions/renderChallenges.js';
import enableFilters from './functions/filter/enableFilters.js';
if (body.className == "challengesPage") {
  enableFilters(data);
  renderChallenges(data);
};