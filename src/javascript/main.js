// For all
import MobileMeny from './functions/mobileMeny.js';
MobileMeny();

// For index
import indexRenderChallenges from './functions/indexRenderChallenges.js';
if (document.querySelector("#card-articles-container")) {
  indexRenderChallenges();
}

// For challenge
import showFilters from './functions/showFilters.js';
import renderChallenges from './functions/renderChallenges.js';
import filterByType from './functions/filterByType.js';
import filterBySearch from './functions/filterBySearch.js';
import { byRatingFilterBtns } from './functions/filterByRating.js';

import renderfilterTagsInMeny from './functions/renderFilterTags.js';

if (document.querySelector("#card-section")) {
  renderChallenges();
  filterBySearch();
  filterByType();
  byRatingFilterBtns();
  renderfilterTagsInMeny();
  showFilters()
};