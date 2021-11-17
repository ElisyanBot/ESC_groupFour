import { fetchData } from "./fetchData.js";
// [x] hämta labels från fetch.
export default async function renderTagsToFilterSection(){
    console.log('test')
    const data = await fetchData();
    filterToMaxOneTagPerName(getLabelsFromApi(data));
}
// [x] kolla igenom alla labels och spara dem i en ny array
function getLabelsFromApi(dataApi){
    let newLabelsAarry = []
    for (const challenge of dataApi) {
        newLabelsAarry.push(...challenge.labels);
    }
    return newLabelsAarry;
}
// [ ] filterara alla labels och om namnet är samma spara bara en av dem i ny arr
function filterToMaxOneTagPerName(array){
    let oldArray = array
    console.log(oldArray)

    // return newArray;
}
// [ ] använd nya arrayen och skriv ut till filter sektionen alla existerande typer av taggarna.
