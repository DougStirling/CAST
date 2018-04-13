var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Diagrammes &agrave; barres et camemberts</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat_b1')\">1. Bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un graphique &agrave; barres affiche les fr&eacute;quences dans un tableau de fr&eacute;quences graphiquement.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat2')\">2. Diagrammes de Pareto</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Pour diagrammes &agrave; barres de donn&eacute;es cat&eacute;gorielles dont les cat&eacute;gories n'ont pas un ordre naturel, il est souvent utile de trier les cat&eacute;gories en fr&eacute;quences d&eacute;croissantes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat_b3')\">3. Chartjunk and misleading bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La tentation d'embellir diagrammes &agrave; barres simple devrait &ecirc;tre r&eacute;sist&eacute;. Certains tels &laquo;artistique&raquo; embellissements sont trompeuses.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat_b4')\">4. Stacked bar charts and pie charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ce sont des alternatives &agrave; un graphique &agrave; barres pour les donn&eacute;es cat&eacute;gorielles.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat_b5')\">5. Comparison of bar and pie charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les diagrammes &agrave; barres de mieux distinguer les proportions dans une seule cat&eacute;gorie. Les graphiques circulaires sont mieux pour montrer la proportion d'un groupe de cat&eacute;gories.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat_b6')\">6. Chartjunk for pie charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Camemberts en trois dimensions sont souvent attir&eacute;s. Si un camembert d&eacute;tient peu d'information, il est pr&eacute;f&eacute;rable de dessiner de petits que de l'am&eacute;liorer de cette mani&egrave;re.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat_b7')\">7. Bar and pie charts for quantities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les diagrammes &agrave; barres et la tarte peut &ecirc;tre utilis&eacute; pour afficher des donn&eacute;es, o&ugrave; une quantit&eacute; totale est divis&eacute;e en plusieurs parties.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
