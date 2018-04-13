var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Nuage de points</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterplot1')\">1. Plus d'une variable</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Nombreux ensembles de données contiennent deux ou plusieurs mesures de chaque individu. Même lorsque le principal intérêt réside dans une variable, les autres peuvent aider à comprendre sa distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterplot2')\">2. Nuage de points</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'affichage principal qui montre la relation entre deux variables est un nuage de points.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterplot3')\">3. Limitations des écrans univariée</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Affiche univariée ne montrent pas les relations entre les variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterplot4')\">4. Distributions marginales</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un diagramme de dispersion de deux variables peut être améliorée avec des boîtes à moustaches ou des histogrammes sur les marges d'un nuage de points.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterplot5')\">5. Des séries chronologiques</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Quand une seule mesure est faite à des intervalles réguliers, les données sont appelées d'une série chronologique. Les données chronologiques peuvent être traitées comme deux variables, avec le temps étant la deuxième variable.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
