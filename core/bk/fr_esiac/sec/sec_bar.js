var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Diagramme à barres</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>La distribution des valeurs d'une variable catégorique peut être décrite de diverses manières.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat_a1')\">1. Bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un graphique à barres affiche les valeurs dans un tableau de fréquence graphiquement.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat2')\">2. Diagrammes de Pareto</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Pour Barcharts de données catégoriques dont les catégories ont aucun ordre naturel, il est souvent utile pour trier les catégories en fréquences décroissantes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat_a3')\">3. Chartjunk and misleading bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La tentation d'embellir Barcharts simples devrait être résisté. Certains de ces embellissements «artistique» sont trompeuses.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
