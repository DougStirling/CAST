var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Diagrammes à barres et camemberts</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat1')\">1. Diagrammes à barres</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un graphique à barres affiche les fréquences dans un tableau de fréquence graphiquement.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat2')\">2. Diagrammes de Pareto</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Pour diagrammes à barres de données catégorielles dont les catégories ont aucun ordre naturel, il est souvent utile pour trier les catégories en fréquences décroissantes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat3')\">3. Chartjunk et graphiques à barres trompeuse</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La tentation d'embellir Barcharts simples devrait être résisté. Certains de ces embellissements «artistique» sont trompeuses.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat4')\">4. Graphiques à barres empilées et camemberts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ce sont des solutions de rechange à un diagramme à barres pour les données catégorielles.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat5')\">5. Comparaison des diagrammes à barres et camemberts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les diagrammes à barres mieux distinguer les proportions dans les catégories simples. Les diagrammes circulaires sont mieux pour montrer la proportion d'un groupe de catégories.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat6')\">6. Chartjunk pour les camemberts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Camemberts en trois dimensions sont souvent attirés. Si un camembert détient peu d'informations, il est préférable de le dessiner petite que de l'améliorer de cette manière.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat7')\">7. Diagrammes à barres et camemberts pour des quantités</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les diagrammes à barres et des graphiques circulaires peuvent être utilisés pour afficher toutes les données, où une quantité totale est divisé en plusieurs parties.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
