// NavBar Link Active
let links = document.querySelectorAll('.nav-link');
        for(let i=0; i<links.length; i++){
        links[i].addEventListener('click', function() {
            for(let j=0; j<links.length; j++)
            links[j].classList.remove('active');
            this.classList.add('active');
        });
        }


// Jobs
const words = ["Data Scientist", "Data Engineer", "Data Analyst", "IA Engineer"];
let i = 0; // Position dans le mot actuel
let j = 0; // Index du mot dans la liste
let isDeleting = false; // Détermine si on supprime du texte

function typeAnimation() {
  const element = document.getElementById("animated-text");

  // Mot en cours d'écriture ou de suppression
  const currentWord = words[j];
  const displayedText = isDeleting
    ? currentWord.slice(0, i--) // Supprimer un caractère
    : currentWord.slice(0, ++i); // Ajouter un caractère

  element.textContent = displayedText;

  // Ajuster le timing pour écrire/supprimer
  const speed = isDeleting ? 50 : 100;

  // Si le mot est complètement écrit
  if (!isDeleting && i === currentWord.length) {
    isDeleting = true; // Passer en mode suppression
    setTimeout(typeAnimation, 1000); // Pause avant de supprimer
    return;
  }

  // Si le mot est complètement supprimé
  if (isDeleting && i === 0) {
    isDeleting = false; // Passer au mot suivant
    j = (j + 1) % words.length; // Passer au mot suivant dans le tableau
  }

  setTimeout(typeAnimation, speed);
}

// Lancer l'animation après le chargement de la page
document.addEventListener("DOMContentLoaded", typeAnimation);