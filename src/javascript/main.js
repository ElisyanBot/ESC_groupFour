// For all
import MobileMeny from './functions/mobileMeny.js';
MobileMeny();

import { fetchData } from "./functions/fetchData.js";
const data = await fetchData();

// For index
import indexRenderChallenges from './functions/indexRenderChallenges.js';
if (window.location.pathname == "/index.html") {
  indexRenderChallenges(data);
}

// For challenge
import renderChallenges from './functions/renderChallenges.js';
import enableFilters from './functions/enableFilters.js';
if (window.location.pathname == "/src/Pages/challengesPage.html") {
  enableFilters(data);
  renderChallenges(data);
};