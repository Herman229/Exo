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