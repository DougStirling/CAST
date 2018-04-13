var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Bivariées distributions catégorielles</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat1')\">1. Les relations entre les variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si deux variables catégoriques peuvent être traités comme une réponse et variable explicative, la variable explicative peut être utilisé pour diviser les individus en groupes. Si aucune variable ne peut être traitée comme explicative, nous avons besoin d'autres façons de décrire leur association.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat2')\">2. Histogrammes en 3 dimensions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Distributions bivariées peuvent être affichés dans des diagrammes à barres 3 dimensions, mais il ya de meilleures façons de montrer les données.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat3')\">3. Graphiques à barres en cluster</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un graphique à barres 2 dimensions peut être utilisé pour afficher la distribution conjointe des deux variables catégorielles, avec les barres groupées par l'un ou l'autre des variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat4')\">4. Distributions marginales</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les deux distributions marginales sont trouvés en ajoutant les fréquences communes (ou proportions) ou vers le bas à travers les rangées de colonnes d'un tableau de contingence.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat5')\">5. Distributions conditionnelles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Distributions conditionnelles sont obtenues en escaladant les lignes (ou colonnes) d'un tableau de contingence pour les faire toute somme à 1,0.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat6')\">6. En savoir plus sur les distributions conditionnelles</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avancé)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Soyez prudent de faire la distinction entre la distribution conditionnelle de Y sachant X, et celle de Y, X donnée.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat7')\">7. Distns conditionnelle vs marginale</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagrammes de Venn proportionnels sont un moyen utile pour afficher les distributions conjointes et à comprendre les relations entre les distributions conditionnelles et marginales.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
