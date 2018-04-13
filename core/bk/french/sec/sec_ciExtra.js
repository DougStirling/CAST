var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>En savoir plus sur l'estimation</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciExtra1')\">1. Marge d'erreur</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La marge d'erreur pour un sondage est liée à un intervalle de confiance. Il est proche d'un IC à 95% lorsque p est de 0,5, mais sous-estime l'exactitude des proportions petits ou grands échantillons.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciExtra2')\">2. Taille de l'échantillon pour l'estimation signifie</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Compte tenu de la largeur de la cible pendant un intervalle de confiance de 95%, il est possible de déterminer la taille de l'échantillon nécessaire pour obtenir cette précision.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciExtra3')\">3. Taille de l'échantillon pour estimer la proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>De la même façon, étant donnée une largeur de cible pendant un intervalle de confiance de 95% pour une proportion, il est possible de déterminer la taille de l'échantillon nécessaire.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciExtra4')\">4. Autres niveaux de confiance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Tous les intervalles de confiance antérieures avaient un niveau de confiance de 95%. Remplacement de 1,96 (ou 2) avec d'autres valeurs donne des estimations par intervalle avec différents niveaux de confiance.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
