export default function bookChallenge(data) {


  setTimeout(() => {
    let bookBtn = document.querySelectorAll(".card .fourth-btn");

    for (let i = 0; i < bookBtn.length; i++) {
      bookBtn[i].addEventListener("click", () => {
        console.log(data[i].title);

        

        // STEP 1
        const modal = document.createElement('div');
        modal.className = 'modal-container';
        document.body.appendChild(modal);

        modal.innerHTML = `
              <h1>Book room "${data[i].title}" (step 1)</h1>
              <p>What date would you like to come?<p>
              <h3>Date</h3>
              <input type="text" id="date-input">
              <button class="fourth-btn" id="search-btn">Search available times</button>
              `;

        // STEP 2
        if (document.querySelector('#search-btn')) {

          const searchBtn = document.getElementById("search-btn");
          const DateInput = document.getElementById("date-input");

          searchBtn.addEventListener("click", () => {
            modal.innerHTML = `
              <h1>Book room "${data[i].title}" (step 2)</h1>
              <h3>Name</h3>
              <input type="text" id="name-input">

              <h3>Email</h3>
              <input type="text" id="email-input">

              <h3>What time?</h3>
              <select name="Time" id="available-time"></select>

              <h3>How many participants?</h3>
              <select name="Time" id="participants-count"></select>


              <button class="fourth-btn" id="submit-btn">Submit booking</button>
              `;

            // GET AVAILABLE TIME FROM API
            fetch("https://lernia-sjj-assignments.vercel.app/api/booking/available-times" + "?date=" + DateInput.value)
              .then(response => response.json())
              .then(time => {
                for (let i = 0; i < time.slots.length; i++) {

                  const optionTime = document.createElement("option");
                  optionTime.textContent = time.slots[i];
                  document.getElementById("available-time").appendChild(optionTime);

                }
              })

              // GET NUMBER OF PARTICIPANTS DEPENDING ON MIN/MAX OF THE CHALLENGE
              for (let people = data[i].minParticipants; people <= data[i].maxParticipants; people++) {
                
                const participantsCount = document.createElement("option");
                participantsCount.textContent = people + " Participants";
                document.getElementById("participants-count").appendChild(participantsCount);
              }



            // STEP 3
            if (document.querySelector('#submit-btn')) {
              const submitBtn = document.getElementById("submit-btn");

              submitBtn.addEventListener("click", () => {
                // HÄR SKA DE HÄNDA GREJORRRRR
              })
            }




          })
        }


        //bookingModal(data[i].title, data[i].minParticipants, data[i].maxParticipants);
      });
    }
  }, 200);



}