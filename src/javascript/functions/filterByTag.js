import {showOnlineCards, showOnsiteCards} from "./filterByType.js";
const testArry = []

function tags(tagName){
    return{
        tagName: tagName,
        aktive: false,
        setToActive: function(){
            this.aktive === false ? 
            this.aktive = true : 
            this.aktive = false;
        }
    }
}

/*
 [x] koppla ihop så att varje knapp kopplas till rätt objekt...
*/

function getObj(tagBtnText){
    let indexValue = 0;
    console.log(tagBtnText)
    for (const tagObj of testArry) {
        if (tagBtnText === tagObj.tagName){
            indexValue = testArry.indexOf(tagObj)
        }
    }
    return indexValue;
}
/*
  [x]  en function som kollar om felara knappar är aktiva
*/
function checkTotalAtkiveTags(){
    let totalAktiveTags = 0
    for (const tagObj of testArry){
        if(tagObj.aktive == true) {
            totalAktiveTags++;
        }
    }
    console.log(totalAktiveTags)
    return totalAktiveTags;
}
/*
    [x] skapar en array med aktiva länkar
*/
function aktiveTagsToArray(){
    let totalAktiveTags = checkTotalAtkiveTags();
    const aktivTagsArray = [];
    if(totalAktiveTags > 0){
        for (const tagObj of testArry){
            if(tagObj.aktive == true) {
                aktivTagsArray.push(tagObj.tagName)
            }
        }
    }
    return aktivTagsArray;
}

/*
  [x] funktion som: värderar om alla aktiva länkar efter aktiva länkar.
*/

function mulitTagChecked(){
    const aktiveTags = aktiveTagsToArray();
    aktiveTags.forEach(index =>{
        console.log('aktiveTags: ', index)
        findByCardTagName(index)
    })
}

export default function filterByTag(){
    console.log('hello world')
    //creates dynamic addEventListener on TagBtn, if we want to create more tags
    const byTagBtns = document.querySelectorAll('.filter-byTag-container button');
    byTagBtns.forEach(Element =>{
        testArry.push(tags(Element.innerText))
        Element.addEventListener('click', () => {
            displayCardWithTag(Element, getObj(Element.innerText))
            mulitTagChecked()
            console.log(testArry)
        })
    })
};

//on click funtion
function displayCardWithTag(element, testArryIndx){
    if(element.style.backgroundColor !== 'lightgray') {
        element.style.backgroundColor = 'lightgray'
    } else {
        element.style.backgroundColor = 'white'
        CardTagNameRemove(element)
    }
    testArry[testArryIndx].setToActive();
}


function findByCardTagName(tag){
    const cards = document.querySelectorAll('.card');
    cards.forEach( card => {
        if(card.style.display !== 'none'){
            let newRegEx = new RegExp(`${tag}`); //kollar på classlist.value som är en sträng av alla klasser.
            if(!newRegEx.test(card.classList.value)){
                card.style.backgroundColor = 'red';
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
        card.style.backgroundColor = 'white';
    })

    if(cbOnline.checked == false){
        showOnlineCards();
    }
    if(cbOnsite.checked == false){
        showOnsiteCards();
    }
}
