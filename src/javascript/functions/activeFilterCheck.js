import {showOnlineCards, showOnsiteCards} from "./filterByType.js";
import {displayCardsForActiveTags} from "./filterByTag.js";
import {displayCardsByRating} from "./filterByRating.js";
import {LookForSearchInputValue} from "./filterBySearch.js";

function showAllCards(){
    document.querySelectorAll('.card').forEach( card => card.style.display = "flex");
}


export default function activeFilters(){
    //displays all cards
    showAllCards();
    //filter cards out if filters is active
    if(document.querySelector("#filter-checkbox-online").checked == false) showOnlineCards();
    if(document.querySelector("#filter-checkbox-onsite").checked == false) showOnsiteCards();
    displayCardsByRating();
    displayCardsForActiveTags();
    LookForSearchInputValue();
}