var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Données discrètes (chiffres)</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('counts_b1')\">1. Discrete and continuous data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ensembles de données discrètes contiennent compte que des ensembles de données continues pourraient potentiellement contenir toutes les valeurs dans un intervalle. Tracés de points empilés sont de bons écrans de petits ensembles de données discrètes contenant de petits chiffres.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('counts_b2')\">2. Histograms for counts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Lorsque la gamme de titres possibles est modérée ou grande, un histogramme est un affichage efficace de la distribution. Largeur de classe doit être un nombre entier et de classe frontières devraient se termine par «0,5».</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('counts3')\">3. Les diagrammes à barres</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Lorsque la gamme de titres possibles est petite, un graphique à barres est une meilleure représentation des données que d'un histogramme.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
