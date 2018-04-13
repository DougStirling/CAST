var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Modèles de régression linéaires</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Un modèle linéaire normale explique comment la distribution d'une variable de réponse, Y, dépend d'une variable explicative X.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnModel1')\">1. Interest in generalising from data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Certains ensembles de données bivariées décrivent populations complètes. D'autres sont «représentant» d'une population ou d'un processus sous-jacent.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnModel2')\">2. Distribution of Y for each X</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les données à deux variables peuvent être modélisés par une distribution de spécifier pour chaque réponse possible X.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnModel3')\">3. Normal linear model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La réponse est souvent modélisée avec une distribution normale dont la moyenne est une fonction linéaire de X et dont l'écart type est constante.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnModel4')\">4. Errors and 95% band on scatterplot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un modèle linéaire normale peut être décrite en termes de «erreurs». Dans les échantillons à partir du modèle, environ 95% des erreurs sont dans un rayon de 2 écarts-types de zéro, de sorte que près de 95% des points dans un diagramme de dispersion sont à l'intérieur de cette distance de la ligne de régression.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnModel5')\">5. Model parameters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le modèle linéaire normale dispose de 3 paramètres inconnus. Pour de nombreux ensembles de données, ces paramètres ont des interprétations significatives.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
