export default function filterByType() {
  const cbOnline = document.querySelector("#filter-checkbox-online");
  const cbOnsite = document.querySelector("#filter-checkbox-onsite");

  cbOnline.addEventListener("click", function () {
    const onlineCards = document.querySelectorAll(".online");

    if (cbOnline.checked == true) {
      for (let i = 0; i < onlineCards.length; i++) {
        onlineCards[i].style.display = "flex";
      }
    }
    else {
      for (let i = 0; i < onlineCards.length; i++) {
        onlineCards[i].style.display = "none";
      }
    }
  });

  cbOnsite.addEventListener("click", function () {
    const onsiteCards = document.querySelectorAll(".onsite");

    if (cbOnsite.checked == true) {
      for (let i = 0; i < onsiteCards.length; i++) {
        onsiteCards[i].style.display = "flex";
      }
    }
    else {
      for (let i = 0; i < onsiteCards.length; i++) {
        onsiteCards[i].style.display = "none";
      }
    }
  });
}