document.addEventListener("DOMContentLoaded", () => {
    const search = document.querySelector<HTMLInputElement>("#input");
    const cards = document.querySelectorAll<HTMLElement>(".x-card");

    if (search) {
        search.addEventListener("input", () => {
            const searchText = search.value.toLowerCase().trim();

            cards.forEach((card) => {
                const cardText = card.textContent?.toLowerCase() || "";

                if (cardText.includes(searchText)) {
                    card.style.removeProperty("display");
                } else {
                    card.style.setProperty("display", "none", "important");
                }
            });
        });
    }
});