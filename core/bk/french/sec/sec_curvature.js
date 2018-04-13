var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Relations non linéaires</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('curvature1')\">1. Transformations et la corrélation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le coefficient de corrélation ne décrit pas de manière adéquate la force d'une relation non linéaire. Transformer les variables à linéariser la relation aide.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('curvature2')\">2. Transformations et modèles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si une relation est non linéaire, un modèle linéaire peut souvent être adapté à la réponse transformée ou variables explicatives.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('curvature3')\">3. Modèles quadratiques</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une solution alternative à la non-linéarité consiste à ajuster une courbe quadratique des données, à nouveau en utilisant le principe des moindres carrés.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('curvature4')\">4. Les dangers de l'extrapolation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Puisque la forme d'une relation est inconnue au-delà de la gamme de valeurs x dans les données, il est toujours dangereux d'extrapoler.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
