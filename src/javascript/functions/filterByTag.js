export default function filterByTag(){
    console.log('hello world')

    //creates dynamic addEventListener on TagBtn, if we want to create more tags
    const byTagBtns = document.querySelectorAll('.filter-byTag-container button');
    byTagBtns.forEach(Element =>{
        Element.addEventListener('click', () => displayCardWithTag(Element) )
    })

};

//on click funtion
function displayCardWithTag(tag){
    console.clear();

    tag.style.backgroundColor !== 'lightgray'? 
        tag.style.backgroundColor = 'lightgray' : 
        tag.style.backgroundColor = 'white';

        const cards = document.querySelectorAll('.card');
        cards.forEach( card => {
        if(card.style.display !== 'none'){
            let newRegEx = new RegExp(`${tag.innerText}`); //kollar på classlist.value som är en sträng av alla klasser.
            if(!newRegEx.test(card.classList.value)){
                card.style.display = 'none';
                console.log(tag.innerText)
            }
        }
    })
}