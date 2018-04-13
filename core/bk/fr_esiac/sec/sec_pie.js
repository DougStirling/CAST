var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Camemberts</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat_b4')\">1. Stacked bar charts and pie charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ce sont des solutions de rechange à un diagramme à barres pour les données catégorielles.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat_b5')\">2. Comparison of bar and pie charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les diagrammes à barres mieux distinguer les proportions dans les catégories simples. Les diagrammes circulaires sont mieux pour montrer la proportion dans un des groupes de catégories.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat_b6')\">3. Chartjunk for pie charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Camemberts en trois dimensions sont souvent attirés. Si un camembert détient peu d'informations, il est préférable de le dessiner petite que de l'améliorer de cette manière.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat_b7')\">4. Bar and pie charts for quantities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bar et camemberts peuvent être utilisés pour afficher toutes les données, où une quantité totale est divisé en plusieurs parties.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
