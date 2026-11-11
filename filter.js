"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const search = document.querySelector("#input");
    const cards = document.querySelectorAll(".x-card");
    if (search) {
        search.addEventListener("input", () => {
            const searchText = search.value.toLowerCase().trim();
            cards.forEach((card) => {
                const cardText = card.textContent?.toLowerCase() || "";
                if (cardText.includes(searchText)) {
                    card.style.removeProperty("display");
                }
                else {
                    card.style.setProperty("display", "none", "important");
                }
            });
        });
    }
});
