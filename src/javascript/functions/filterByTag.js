import {showOnlineCards, showOnsiteCards} from "./filterByType.js";

let totalOfActiveTags = 0;
export default function filterByTag(){
    console.log('hello world')
    //creates dynamic addEventListener on TagBtn, if we want to create more tags
    const byTagBtns = document.querySelectorAll('.filter-byTag-container button');
    byTagBtns.forEach(Element =>{
        Element.addEventListener('click', () => {
            let isActive = false;
            displayCardWithTag(Element)
            console.log(totalOfActiveTags)
        })
    })

};

//on click funtion
function displayCardWithTag(tag){
    if(tag.style.backgroundColor !== 'lightgray'){
        tag.style.backgroundColor = 'lightgray'
        findByCardTagName(tag)
        totalOfActiveTags++;
    }  else {
        tag.style.backgroundColor = 'white'
        CardTagNameRemove(tag)
        totalOfActiveTags--;
      
    }
}


function findByCardTagName(tag){
    const cards = document.querySelectorAll('.card');
        cards.forEach( card => {
        if(card.style.display !== 'none'){
            let newRegEx = new RegExp(`${tag.innerText}`); //kollar på classlist.value som är en sträng av alla klasser.
            if(!newRegEx.test(card.classList.value)){
                card.style.display = 'none';
            }
        }
    })
}

function CardTagNameRemove(tag){
    const cards = document.querySelectorAll('.card');
    const cbOnline = document.querySelector("#filter-checkbox-online");
    const cbOnsite = document.querySelector("#filter-checkbox-onsite");
   
    cards.forEach( card => {
        card.style.display = 'flex';
    })

    if(cbOnline.checked == false){
        showOnlineCards();
    }
    if(cbOnsite.checked == false){
        showOnsiteCards();
    }
}
