
const ticketAvailability = {
  "Whiplash": 10,
  "Pulp Fiction": 10,
  "Parasite": 10,
  "The Wolf of Wall Street": 10,
  "The Social Network": 10,
  "Project X": 10
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const movieSelect = document.getElementById("movie");
  const availabilityText = document.getElementById("availability");

  movieSelect.addEventListener("change", () => {
    const selectedMovie = movieSelect.value;
    if (ticketAvailability[selectedMovie] !== undefined) {
      availabilityText.textContent = `Tickets left: ${ticketAvailability[selectedMovie]}`;
    } else {
      availabilityText.textContent = "";
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const movie = movieSelect.value;
    const time = document.getElementById("time").value;
    const tickets = parseInt(document.getElementById("tickets").value);

    const available = ticketAvailability[movie];

    if (tickets > available) {
      alert(`Only ${available} ticket(s) left for ${movie}. Please reduce your ticket count.`);
      return;
    }


    ticketAvailability[movie] -= tickets;


    console.log("✅ Booking Confirmed:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Movie:", movie);
    console.log("Show Time:", time);
    console.log("Tickets Booked:", tickets);
    console.log("Remaining Tickets:", ticketAvailability[movie]);

    // Update the availability text
    availabilityText.textContent = `Tickets left: ${ticketAvailability[movie]}`;

    alert("Booking Confirmed! Check the console for details.");
    form.reset();
    movieSelect.dispatchEvent(new Event("change"));
  });
});
