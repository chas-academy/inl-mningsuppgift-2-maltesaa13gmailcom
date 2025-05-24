// Definera array av namn
let people = ["Bert", "Bengt", "Sven", "Arne", "Lisa"]


export function initSearch(people) { // rör ej denna rad

  // Hämta HTML-element
  let searchInput = document.getElementById("searchInput")
  let searchBtn = document.getElementById("searchBtn")
  let resultDisplay = document.getElementById("resultDisplay")
  
  // Lägg till en klickhändelse på "Sök"-knappen
  searchBtn.addEventListener("click",() => {
  
    // 1. Hämta texten i searchInput.value
    let searchText = searchInput.value
    // 2. Skapa en boolean för found
    let isFound = false
    // 3. Loopa igenom people-arrayen
    for (let person of people) {
      // 4. Jämför texten med varje namn i arrayen
      if (searchText === person) {
        // 5. Om du hittar en match, skriv ut "Namn hittades!" i resultDisplay, ändra found till true
        resultDisplay.innerHTML = `Namn hittades: ${person}`
        isFound = true
      } 
    }
    if (!isFound) {
        // 6. Om du efter loopen inte hittat något, skriv ut "Namn hittades inte." och gör found till false igen.
        resultDisplay.innerHTML = "Namn hittades inte."
        isFound = false
     }
    })
}



// rör ej dessa rader
document.addEventListener("DOMContentLoaded", () => {
  initSearch(people);
});