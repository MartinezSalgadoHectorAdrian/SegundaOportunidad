// Fetch data and render
const API_URL = "https://hp-api.onrender.com/api/characters";

const characterList = document.getElementById("character-list");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.querySelector(".close");

// Fetch and render character cards
fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderCharacters(data));

function renderCharacters(characters) {
  characters.forEach((character) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${character.image || 'https://placehold.co/600x400'}" alt="${character.name}">
      <h3>${character.name}</h3>
    `;

    card.addEventListener("click", () => openModal(character));
    characterList.appendChild(card);
  });
}

// Open modal and display character details
function openModal(character) {
  modalImg.src = character.image || "https://placehold.co/600x400";
  modalImg.style.width = "150px"; // Ajusta el tamaño de la imagen
  modalName.textContent = character.name;

  modalDescription.innerHTML = `
    <p><strong>Casa:</strong> ${character.house || 'Desconocida'}</p>
    <p><strong>Actor:</strong> ${character.actor || 'Desconocido'}</p>
    <p><strong>Ascendencia:</strong> ${character.ancestry || 'Desconocida'}</p>
    <p><strong>Fecha de Nacimiento:</strong> ${character.dateOfBirth || 'Desconocida'}</p>
    <p><strong>Patronus:</strong> ${character.patronus || 'Desconocido'}</p>
    <p><strong>Género:</strong> ${character.gender || 'Desconocido'}</p>
    <p><strong>Color de Ojos:</strong> ${character.eyeColour || 'Desconocido'}</p>
    <p><strong>Color de Cabello:</strong> ${character.hairColour || 'Desconocido'}</p>
  `;

  modal.classList.remove("hidden");
}

// Close modal
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});
