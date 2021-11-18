// [] när man klickar på en stjäna ska man få ett värede från 1 - 5
// [x] lyckas få stjärnorna att fyllas i till och med värdet som är valt
// [] skapa ett objekt som kommer ihåg värdet som är valt


export function byRatingFilterBtns(){
    const biggerThanList = document.querySelector('#rating-biggerThan');
    const biggerThanItem = document.querySelectorAll('#rating-biggerThan > li');
    const lessThanList = document.querySelector('#rating-lessThan');
    const lessThanItem = document.querySelectorAll('#rating-lessThan > li');
    
    let lessThanNumber = setRatingFilter(lessThanList, lessThanItem, 0);
    let biggerThanNumber = setRatingFilter(biggerThanList, biggerThanItem, 5);

    console.log(biggerThanNumber,  lessThanNumber)
}

function setRatingFilter(starRatingListId, starRatingItemArr, startingValue){
    let number = startingValue;
    
    starRatingListId.addEventListener('click', (e) =>{
        let arr = Array.prototype.slice.call(starRatingItemArr);

        //clears all stars
        for (let index = 0; index < arr.length; index++) {
            starRatingItemArr[index].classList.remove('checked')    
          }

        //geting the set value
        //funkar det att skapa en function av detta?
        if(e.target !== starRatingListId){
            arr.forEach(Element =>{
                if(e.target === Element){
                    number = arr.indexOf(Element) + 1;
                }  
            })   
        }

        //sets new number of stars
        for (let index = 0; index < number; index++) {
            starRatingItemArr[index].classList.add('checked')    
          }
        }
    )
 
    return number
}

//[] vad händer om man clickar i att minsta vädet ska vara större än högsta?
//  -- om lessthan is greater than biggerThan byt ordningen?
