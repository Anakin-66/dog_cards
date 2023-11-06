// Je déclare une variable avec un querySelectorAll et le nom de la classe de mon HTML pour lier mon dom avec mon fichier JS
const cards = document.querySelectorAll(".card");
// Ensuite je déclare une boucle forEach pour séléctionner chaque éléments de la classe card
  cards.forEach((card) => {
    // Je déclare mon eventListener en click pour respécter la consigne
    card.addEventListener("click", () => {
        // Je répète la prodécure de la ligne 1 sauf que j'utilise un querySelector basique
      const availability = card.querySelector(".availability");
        // Je change le display de base qui est en "none" à "block" pour pouvoir l'afficher à mon clique, je déclare ensuite un boolean pour avoir un toggle on et off.
        // Je lui dis que si le style.display de ma variable availability est strictement égal à none alors il change mon display en block, sinon il me le remet en none
        if (availability.style.display === "none") {
            availability.style.display = "block";
          } else {
            availability.style.display = "none";
          }
    });
  });