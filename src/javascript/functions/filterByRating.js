// [] när man klickar på en stjäna ska man få ett värede från 1 - 5
// [x] lyckas få stjärnorna att fyllas i till och med värdet som är valt
// [] skapa ett objekt som kommer ihåg värdet som är valt


export function byRatingFilterBtns(){
    const biggerThan = document.querySelector('#rating-biggerThan');
    const biggerThanStars = document.querySelectorAll('#rating-biggerThan > li');
    const lessThanStars = document.querySelectorAll('#rating-lessThan > li');
    let number = 0;
   
    biggerThan.addEventListener('click', (e) =>{
        let arr = Array.prototype.slice.call(biggerThanStars);

        for (let index = 0; index < arr.length; index++) {
            biggerThanStars[index].classList.remove('checked')    
          }

        if(e.target !== biggerThan){
            arr.forEach(Element =>{
                if(e.target === Element){
                    number = arr.indexOf(Element) + 1;
                }  
            })   
        }

        for (let index = 0; index < number; index++) {
            biggerThanStars[index].classList.add('checked')    
          }
        }
    )
 
    return number //?
}



   