var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Transformations</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transform1')\">1. Transformations linéaires</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Transformations linéaires de données affectent l'échelle sur l'axe d'affichages graphiques, mais ne changent pas autrement la forme de la distribution des valeurs.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transform2')\">2. Transformations logarithmique</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Transformations non linéaires changer la forme de la distribution des valeurs plus profondément. Une transformation logarithmique peut aider à détecter les tendances dans des ensembles de données très obliques.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transform3')\">3. Quand utiliser une transformation logarithmique?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'> Transformations logarithmiques sont les plus utiles pour des données représentant des «quantité» qui couvrent plusieurs ordres de grandeur.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transform4')\">4. Puissance transformations</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avancé)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Transformations de puissance sont une famille plus souple des transformations non linéaires qui sont utiles dans l'exploration de données.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transform5')\">5. Effet de transformations sur les écrans</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'effet des transformations de puissance sur l'asymétrie de données est évidente dans une large gamme de représentations graphiques.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
