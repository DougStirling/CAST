var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Bivari&eacute;es distributions cat&eacute;gorielles</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat_b1')\">1. Relationships between variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si deux variables cat&eacute;gorielles peuvent &ecirc;tre trait&eacute;es comme une r&eacute;ponse et des variables explicatives, la variable explicative peut &ecirc;tre utilis&eacute; pour diviser les individus en groupes. Si aucune variable ne peut &ecirc;tre trait&eacute;e comme explicatives, nous avons besoin d'autres fa&ccedil;ons de d&eacute;crire leur association.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat2')\">2. Histogrammes en 3 dimensions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Distributions bivari&eacute;es peuvent &ecirc;tre affich&eacute;s dans des diagrammes &agrave; barres en 3 dimensions, mais il ya de meilleures fa&ccedil;ons d'afficher les donn&eacute;es.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat3')\">3. Graphiques à barres en cluster</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un graphique &agrave; barres &agrave; 2 dimensions peut &ecirc;tre utilis&eacute; pour afficher la distribution conjointe de deux variables cat&eacute;goriques, avec les barres en cluster en une ou l'autre des variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat4')\">4. Distributions marginales</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les deux distributions marginales sont trouv&eacute;s en ajoutant des fr&eacute;quences communes (ou proportions) sur les lignes ou colonnes bas d'un tableau de contingence.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat5')\">5. Distributions conditionnelles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Distributions conditionnelles sont obtenues en escaladant les lignes (ou colonnes) d'un tableau de contingence afin de les rendre tous les somme de 1.0.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat6')\">6. En savoir plus sur les distributions conditionnelles</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avanc&eacute;)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Soyez prudent de faire la distinction entre la distribution conditionnelle de Y sachant X, et que de X sachant Y.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat7')\">7. Distns conditionnelle vs marginale</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les diagrammes de Venn proportionnelle sont un moyen utile d'afficher distributions conjointes et de comprendre les relations entre les distributions conditionnelles et marginales.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
