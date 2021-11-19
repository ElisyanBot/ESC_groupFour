import renderFilter from "./renderFilter.js";
import filterByType from './filterByType.js';
import filterBySearch from './filterBySearch.js';
import { byRatingFilterBtns } from './filterByRating.js';
import renderfilterTagsInMeny from './renderFilterTags.js';



// Function to enable the filter-section. It will get rendered into the DOM.
export default function enableFilters() {

    const filterBtn = document.getElementById('open-filter-btn');

    filterBtn.addEventListener('click', () => {

        renderFilter() //renderFilter.js
        disableFilters()

        // When the filter-section has been rendered, call additional functions for the filter.
        if (document.querySelector("#filter-section")) {
            filterBySearch();
            filterByType();
            byRatingFilterBtns();
            renderfilterTagsInMeny();
        }
    })
}


// Function gets called to be able to disable the filter-section. It gets removed from the DOM.
function disableFilters() {
    
    const closeFilterBtn = document.getElementById('close-filter-btn');

    closeFilterBtn.addEventListener('click', () => {

        const filterContainer = document.querySelector('.filter-container');
        filterContainer.remove();

        const filterBtn = document.getElementById('open-filter-btn');
        filterBtn.style.display = ""; //Only temporary fix to show filter button.
    })
}
