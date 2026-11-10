export {}

const search = document.getElementById("input") as HTMLInputElement;

const cards = document.querySelectorAll("x-card") as NodeListOf<HTMLElement>;

search.addEventListener("input", (event) => {
    const searchText = (event.target as HTMLInputElement).value.toLowerCase();
    cards.forEach((card) => {
        const userText = card.textContent?.toLowerCase() ||"" ;

        if(userText.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none"
        }
    })
    
})
 