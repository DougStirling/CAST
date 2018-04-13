var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>En savoir plus sur la variation (en option)</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation1')\">1. Effet des valeurs aberrantes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si un ensemble de données contient une valeur aberrante, la moyenne et surtout l'écart-type peuvent être durement touchés. Les valeurs peuvent être évidemment faux lorsque la règle 70-95-100 est appliquée dans le contexte des données, mais d'un graphique ou une boîte en points est la meilleure.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation2')\">2. L'écart type des données groupées</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'écart-type au sein des groupes est généralement plus faible que l'écart type global.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation3')\">3. Variation expliquée et les prédictions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Fractionnement d'un mis en groupes de valeurs «similaires» les résultats des prédictions plus précises des valeurs futures si l'appartenance à un groupe est connu données. Le groupement est dit pour expliquer une partie de la variation globale.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation4')\">4. Variance et de degrés de liberté</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avancé)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le carré de l'écart-type est appelée la variance; sa valeur est plus difficile à comprendre, mais il est la base de méthodes statistiques avancées importantes. Les degrés de liberté sont le nombre d'éléments d'information qui contribuent à l'écart-type (ou la variance).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation5')\">5. Racine l'erreur quadratique moyenne</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avancé)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La racine erreur quadratique moyenne résume à quel point les valeurs dans un ensemble de données sont à une cible, k.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation6')\">6. Interprétation graphique de SD</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avancé)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'> L'écart-type est semblable à l'erreur quadratique moyenne, mais résume distances à la moyenne des données. Sa valeur peut être interprétée en termes de superficie moyenne de carrés sur un graphique.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
