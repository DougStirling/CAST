var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Décrivant la propagation</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread5')\">1. L'écart-type</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'écart type est le résumé numérique la plus couramment utilisée de la propagation de valeurs dans un ensemble de données.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread6')\">2. Règles d'or pour l'écart-type</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La règle empirique-70-95-100 est utile pour comprendre la valeur numérique de l'écart type.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread7')\">3. Signifie comprendre et devns er</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Il est possible de deviner à peu près la moyenne et l'écart par rapport à un histogramme et environ esquisser un histogramme symétrique correspondant à toute moyenne donnée et l'écart type.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread8')\">4. Avertissements sur devn moyenne et standard</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'écart moyen et l'écart ne peut donner aucune indication de l'existence de valeurs aberrantes, l'asymétrie ou clusters. Un graphique ou un histogramme points devraient être examinés avant de rapporter ces résumés numériques.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation1')\">5. Effet des valeurs aberrantes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si un ensemble de données contient une valeur aberrante, la moyenne et surtout l'écart-type peuvent être durement touchés. Les valeurs peuvent être évidemment faux lorsque la règle 70-95-100 est appliquée dans le contexte des données, mais d'un graphique ou une boîte en points est la meilleure.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('counts_b4')\">6. Mean & sd for discrete data</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Pour les données discrètes, la moyenne et la déviation standard peuvent être facilement évalués à partir d'un tableau de fréquences.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
