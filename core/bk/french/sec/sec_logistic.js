var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Régression logistique</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Des moindres carrés est utilisée pour prédire une réponse numérique à partir d'une variable explicative numérique. Lorsque la variable de réponse est catégorique, mais le but est de prédire la <span style='font-weight:bold;'>proportion</span> de chaque catégorie de réponse, et une analyse différente est nécessaire.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('logistic1')\">1. Réponses catégoriques</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Avec une réponse catégorique et variable explicative numérique, graphiques à barres empilées à chaque X sont un affichage efficace.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('logistic2')\">2. Valeurs ajustées et prédictions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Utilisation d'une ligne droite de décrire comment la proportion dans une catégorie dépend de X ne convient pas. Une courbe est nécessaire.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('logistic3')\">3. Courbe logistique</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une courbe «logistique» peut être utilisé pour modéliser la façon dont une proportion dépend de X.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('logistic4')\">4. Obtention d'un bon ajustement</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une courbe logistique est équipé d'un ensemble de données par exemple.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
