import { fetchData } from "./functions/fetchData.js";
const data = await fetchData();

const body = document.querySelector('body');


// For all
import MobileMeny from './functions/mobileMeny.js';
import bookChallenge from './functions/bookChallenge.js';
MobileMeny();
bookChallenge(data);

// For index
import indexRenderChallenges from './functions/indexRenderChallenges.js';

if (body.className == "index") {
  indexRenderChallenges(data);
  
}

// For challenge
import renderChallenges from './functions/renderChallenges.js';
import enableFilters from './functions/Filter/enableFilters.js'; 

if (body.className == "challengesPage") {
  enableFilters(data);
  renderChallenges(data);
};