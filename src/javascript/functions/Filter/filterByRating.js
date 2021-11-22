
import activeFilters from "./activeFilterCheck.js";


const RatingStorage = { 
    lessThanValue: 0, 
    biggerThanValue: 5
};

export function byRatingFilterBtns(){
    const biggerThanList = document.querySelector('#rating-biggerThan');
    const lessThanList = document.querySelector('#rating-lessThan');
    const biggerThanItem = document.querySelectorAll('#rating-biggerThan > li');
    const lessThanItem = document.querySelectorAll('#rating-lessThan > li');
    
 
    
    lessThanList.addEventListener('click', (e) => {
        RatingStorage.lessThanValue = setRatingFilter(e, lessThanItem, lessThanItem);
        activeFilters(RatingStorage.lessThanValue, RatingStorage.biggerThanValue);
    });
    biggerThanList.addEventListener('click', (e) => {
        RatingStorage.biggerThanValue = setRatingFilter(e, biggerThanItem, biggerThanItem);
        activeFilters(RatingStorage.lessThanValue, RatingStorage.biggerThanValue);
     });
}

//filter-meny stars functionality
function setRatingFilter(e, starRatingItemArr, starRatingListId){  
        let arr = Array.prototype.slice.call(starRatingItemArr);
        let ratingNumber = 0;
        //clears all stars
        for (let index = 0; index < arr.length; index++)
            starRatingItemArr[index].classList.remove('checked');    
        //geting the set value
        if(e.target !== starRatingListId){
            arr.forEach(liStar =>{
                if(e.target !== liStar) return;
                ratingNumber = arr.indexOf(liStar) + 1; 
            });   
        }
        //sets new number of stars
        for (let index = 0; index < ratingNumber; index++)
             starRatingItemArr[index].classList.add('checked');
        return ratingNumber
}

//counts every checkd ratingStar on card.
function getRatingFromCard(card){
    let cardRating = 0;
    card.querySelectorAll('ul > li').forEach(star => {
        if(card.style.display !== "none")
        if(star.classList.value == 'checked') cardRating++;
    });
    return cardRating;
}

   export function displayCardsByRating(){
        document.querySelectorAll('.card').forEach( card => {
        let checkOrderOfInput = RatingStorage.lessThanValue < RatingStorage.biggerThanValue ? 
        getRatingFromCard(card) < RatingStorage.lessThanValue || getRatingFromCard(card) > RatingStorage.biggerThanValue :
        getRatingFromCard(card) > RatingStorage.lessThanValue || getRatingFromCard(card) < RatingStorage.biggerThanValue ;
            
            if(checkOrderOfInput){
                if(card.style.display == "none") return;
                card.style.display = "none";
            };
        })
    }