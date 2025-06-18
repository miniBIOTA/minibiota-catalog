document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("species-catalog");

  speciesData.forEach((species) => {
    const card = document.createElement("a");
    card.className = "organism-card";
    card.href = "/organisms/" + species.slug;

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
