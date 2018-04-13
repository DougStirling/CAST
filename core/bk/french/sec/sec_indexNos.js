var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Indice de chiffres</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indexNos1')\">1. Introduction</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les indices sont largement utilisés dans les entreprises et l'industrie pour mesurer les changements de une ou de plusieurs quantités au fil du temps.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indexNos2')\">2. Simple indice des prix</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un indice des prix simples mesure le prix d'un article ou d'un seul produit comme un pourcentage de son prix à un temps de base.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indexNos3')\">3. Indice global des prix</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un indice des prix globaux combine les prix de plusieurs articles connexes dans un numéro d'index unique.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indexNos4')\">4. Indices Laspeyres et Paasche</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ces indices permettent indices de prix globaux pour donner différents poids pour les éléments qui composent l'indice.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indexNos5')\">5. Dégonflage une série temporelle</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'effet d'une quantité tels que l'inflation peut être retiré à partir d'une série de temps en dégonflant elle.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
