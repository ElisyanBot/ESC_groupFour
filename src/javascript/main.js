// For all
import MobileMeny from './functions/mobileMeny.js';
MobileMeny();

// For index
import indexRenderChallenges from './functions/indexRenderChallenges.js';
if (document.querySelector("#card-articles-container")) {
  indexRenderChallenges();
}

// For challenge
import enableFilters from './functions/enableFilters.js';
import renderChallenges from './functions/renderChallenges.js';


if (document.querySelector("#card-section")) {
  renderChallenges();
  enableFilters();
};