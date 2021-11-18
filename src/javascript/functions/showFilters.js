export default function showFilters() {
    

    const filterBtn = document.getElementById('open-filter-btn');
    const closeFilterBtn = document.getElementById('close-filter-btn');
    const filterContainer = document.querySelector('.filter-container');

    let showFilter = false;
    if(showFilter == false) {
        filterContainer.style.display = "none";
    }

    filterBtn.addEventListener('click', () => {
        if(showFilter == false) {
            filterContainer.style.display = "";
            filterBtn.style.display = "none";
            showFilter = true;
        } else if(showFilter == true) {
            filterContainer.style.display = "none";
            filterBtn.style.display = "";
            showFilter = false;
        }
    })

    closeFilterBtn.addEventListener('click', () => {
        showFilter = false;
        filterContainer.style.display = "none";
        filterBtn.style.display = "";
    })
}