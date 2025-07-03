// import-menu.js

document.addEventListener('DOMContentLoaded', chargerMenu);

async function chargerMenu() {
  try {
    const header = document.getElementById('header');
    const reponse = await fetch('/composants/header.html');

    if (!reponse.ok) {
      throw new Error('Erreur lors du chargement du menu');
    }

    const html = await reponse.text();
    header.innerHTML = html;

  } catch (erreur) {
    console.error('Erreur :', erreur);
  }
  // menu
  // je déclare la variable menu bouton = l'id "menu-btn" dans mon html
  let menutoggle = document.getElementById('menu-toggle');
  // je déclare la variable menuMobile liste déroulant = l'id "menu-list" dans mon html
  let menuMobile = document.getElementById('menu-list');
  // j'ajoute un écouteur d'événement "click" sur le bouton menuBtn et j'utilise une fonction anonyme pour gérer l'événement
  menutoggle.addEventListener('click', function () {
    // je bascule la classe "hidden" sur l'élément menuMobile, ce qui permet de l'afficher ou de le masquer
    menuMobile.classList.toggle('active');
    // je bascule la classe "expanded" sur le bouton menuBtn, ce qui permet de changer son apparence
    menutoggle.classList.toggle('expanded');

  });

}

// Sélectionne l'élément où insérer le menu
const footer = document.getElementById('footer');

// Charge le fichier menu.html
fetch('/composants/footer.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur lors du chargement du menu');
    }
    return response.text();
  })
  .then(data => {
    footer.innerHTML = data;
  })
  .catch(error => {
    console.error('Erreur :', error);
  });




