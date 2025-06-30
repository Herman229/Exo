// --- JavaScript pour les interactions ---

// Script pour le bouton "En savoir plus" dans la section "À Propos"
const toggleAboutButton = document.getElementById('toggleAboutInfo');
const moreInfoParagraph = document.getElementById('moreInfo');

if (toggleAboutButton && moreInfoParagraph) { // Vérifie si les éléments existent avant d'ajouter l'écouteur
    toggleAboutButton.addEventListener('click', function() {
        if (moreInfoParagraph.style.display === 'none') {
            moreInfoParagraph.style.display = 'block';
            toggleAboutButton.textContent = 'Masquer les infos';
        } else {
            moreInfoParagraph.style.display = 'none';
            toggleAboutButton.textContent = 'En savoir plus';
        }
    });
}


// Script pour ajouter dynamiquement les compétences
const mesCompetences = ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design", "Git & GitHub"];
const ulCompetences = document.getElementById('competencesList');

if (ulCompetences) {
    for (let i = 0; i < mesCompetences.length; i++) {
        const competence = mesCompetences[i];
        const liElement = document.createElement('li');
        liElement.textContent = competence;
        ulCompetences.appendChild(liElement);
    }
}

// Script pour changer de thème (clair/sombre)
const themeToggleButton = document.getElementById('themeToggle');
const bodyElement = document.body;

if (themeToggleButton && bodyElement) {
    themeToggleButton.addEventListener('click', function() {
        // Toggle la classe 'dark-theme' sur l'élément body
        bodyElement.classList.toggle('dark-theme');

        // Met à jour le texte du bouton en fonction du thème actuel
        if (bodyElement.classList.contains('dark-theme')) {
            themeToggleButton.textContent = 'Thème clair';
        } else {
            themeToggleButton.textContent = 'Thème sombre';
        }
    });
}


console.log("Tous les scripts JavaScript sont chargés !");
// --- JavaScript avancé : Récupération de données (Fetch API) ---

const jokeTextElement = document.getElementById('jokeText');
const newJokeButton = document.getElementById('newJokeButton');

// Fonction pour récupérer une blague depuis l'API
async function fetchJoke() {
    if (!jokeTextElement) {
        console.error("L'élément 'jokeText' n'a pas été trouvé.");
        return;
    }
    if (!newJokeButton) {
        console.error("L'élément 'newJokeButton' n'a pas été trouvé.");
        return;
    }

    jokeTextElement.textContent = 'Chargement de la blague...'; // Message de chargement
    newJokeButton.disabled = true; // Désactive le bouton pendant le chargement

    try {
        // Utilise l'API 'icanhazdadjoke.com' qui fournit des blagues textuelles
        // L'en-tête 'Accept: application/json' demande une réponse au format JSON
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        });

        // Vérifie si la requête a réussi (statut HTTP 200 OK)
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const data = await response.json(); // Convertit la réponse en objet JavaScript (JSON)
        jokeTextElement.textContent = data.joke; // Affiche la blague sur la page
    } catch (error) {
        console.error('Erreur lors de la récupération de la blague:', error);
        jokeTextElement.textContent = 'Désolé, impossible de récupérer une blague pour l\'instant.';
    } finally {
        newJokeButton.disabled = false; // Réactive le bouton après le chargement (réussi ou non)
    }
}

// Appelle la fonction fetchJoke une première fois au chargement de la page
fetchJoke();

// Ajoute un écouteur d'événement au bouton pour charger une nouvelle blague au clic
if (newJokeButton) {
    newJokeButton.addEventListener('click', fetchJoke);
}

console.log("Script de blague chargé !");
