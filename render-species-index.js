/* render-species-index.js
 * Loops through speciesData (defined in species-data.js)
 * and injects a card for each species into #species-catalog
 */

document.addEventListener("DOMContentLoaded", () => {
  // Make sure the target container exists
  const container = document.getElementById("species-catalog");
  if (!container) {
    console.error("❌  #species-catalog element not found.");
    return;
  }

  // Clear the container (handy on live reloads)
  container.innerHTML = "";

  // Generate one card per species
  speciesData.forEach((species) => {
    const card = document.createElement("a");
    card.className = "organism-card";
    card.href = "/organisms/" + species.slug;     // detail-page link

    card.innerHTML = `
      <img src="${species.imageUrl}" alt="${species.commonName}" />
      <h2>${species.commonName}</h2>
      <p><em>${species.scientificName}</em></p>

      <div class="tags">
        <span class="tag">${species.realm}</span>
        <span class="tag">${species.trophicRole}</span>
        <span class="tag">${species.conservationStatus}</span>
      </div>
    `;

    container.appendChild(card);
  });
});
