// [x] när man klickar på en stjäna ska man få ett värede från 1 - 5
// [x] lyckas få stjärnorna att fyllas i till och med värdet som är valt
// [x] skapa ett objekt som kommer ihåg värdet som är valt

export const storage = { 
    lessThanValue: 0, 
    biggerThanValue: 5
};

export function byRatingFilterBtns(){
    const biggerThanList = document.querySelector('#rating-biggerThan');
    const lessThanList = document.querySelector('#rating-lessThan');
    const biggerThanItem = document.querySelectorAll('#rating-biggerThan > li');
    const lessThanItem = document.querySelectorAll('#rating-lessThan > li');
    
 
    
    lessThanList.addEventListener('click', (e) => {
        storage.lessThanValue = setRatingFilter(e, lessThanItem, lessThanItem);
        displayCards(storage.lessThanValue, storage.biggerThanValue);
    });
    biggerThanList.addEventListener('click', (e) => {
        storage.biggerThanValue = setRatingFilter(e, biggerThanItem, biggerThanItem);
        displayCards(storage.lessThanValue, storage.biggerThanValue);
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
// [x] funktion som gömmer kortet om stjärnona är mer eller mindre
// - om ena är större än det andra, dölj de som inte stämmer
// -
//[x] vad händer om man clickar i att minsta vädet ska vara större än högsta?
//  -- om lessthan is greater than biggerThan byt ordningen?

    function displayCards(lessThan, biggerThan){
        document.querySelectorAll('.card').forEach( card => {
        let checkOrderOfInput = lessThan < biggerThan ? 
        getRatingFromCard(card) < lessThan || getRatingFromCard(card) > biggerThan :
        getRatingFromCard(card) > lessThan || getRatingFromCard(card) < biggerThan ;
        
            if(checkOrderOfInput){
                if(card.style.display == "none") return;
                card.style.display = "none";
            };
        })
    }