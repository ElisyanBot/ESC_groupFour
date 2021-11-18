import { fetchData } from "./fetchData.js";

export default async function filterBySearch() {
    await fetchData();

    const cards = document.querySelectorAll('article');
    const input = document.querySelector('#filter-search-input');
    input.addEventListener('keyup', ()=> {
        
        const inputValue = input.value.toUpperCase();
        for(let i = 0; i < cards.length; i++) {
            let title = cards[i].querySelector('article h2');
            let p = cards[i].querySelector('article p');
        
        if(title.textContent.toUpperCase().indexOf(inputValue) > -1 || p.textContent.toLocaleUpperCase().indexOf(inputValue) > -1) {
                cards[i].style.display = "flex";
            } else {
                cards[i].style.display = "none";
            }
        }
    })     
}


