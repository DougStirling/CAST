var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Probabilités et applications</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Les relations entre les variables catégorielles (ou d'autres événements) sont décrits par des probabilités.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('prob1')\">1. Joint probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bivariées données catégoriques sont modélisés comme un échantillon d'une population qui se compose de paires de valeurs catégorielles. La probabilité conjointe pour toute paire de catégories est leur proportion dans la population.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('prob2')\">2. Marginal probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les probabilités marginales pour une variable sont les proportions de la population pour ses valeurs possibles. Ils peuvent être trouvés en additionnant probabilités conjointes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('prob3')\">3. Conditional probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Probabilités conditionnelles pour une variable sont les proportions dans une sous-population contenant une valeur spécifique pour l'autre variable. Ils se trouvent en escaladant les probabilités conjointes dans cette sous-population.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('prob4')\">4. Graphical display of probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Probabilités conjointes, marginales et conditionnelles peuvent être affichées graphiquement.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('prob5')\">5. Calculations with probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le modèle peut être décrit de manière équivalente par (a) probabilités conjointes, (b) probabilités marginales pour X et probabilités conditionnelles pour Y, ou (c) des probabilités marginales pour Y et les probabilités conditionnelles pour X. Tous ces ensembles de probabilités peuvent être trouvés tout autre ensemble.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
