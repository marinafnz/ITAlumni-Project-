"use strict";
const search = document.getElementById("input");
const cards = document.querySelectorAll("x-card");
search.addEventListener("input", (event) => {
    const searchText = event.target.value.toLowerCase();
    cards.forEach((card) => {
        const userText = card.textContent?.toLowerCase() || "";
        if (userText.includes(searchText)) {
            card.style.display = "block";
        }
        else {
            card.style.display = "none";
        }
    });
});
