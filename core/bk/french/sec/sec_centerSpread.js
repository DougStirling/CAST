var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Décrivant le centre et la propagation</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread1')\">1. Centre et la propagation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le centre de distribution est une «valeur typique». La propagation décrit dans quelle mesure les valeurs sont du centre.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread2')\">2. Médian, la gamme et IQR</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La médiane est un résumé du centre de distribution. La gamme et l'écart inter-quartile décrivent tous deux répartis.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread3')\">3. Résumés du centre</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La médiane et la moyenne sont des mesures alternatives du centre de distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread4')\">4. Propriétés de la médiane et la moyenne</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Quand un ensemble de données est pas symétrique, la moyenne et la médiane peuvent différer sensiblement.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread5')\">5. L'écart-type</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'écart type est le résumé numérique la plus couramment utilisée de la propagation de valeurs dans un ensemble de données.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread6')\">6. Règles d'or pour l'écart-type</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La règle empirique 70-95-100 est utile pour comprendre la valeur numérique de l'écart type.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread7')\">7. Signifie comprendre et devns er</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Il est possible de deviner à peu près la moyenne et l'écart par rapport à un histogramme et environ esquisser un histogramme symétrique correspondant à toute moyenne donnée et l'écart type.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread8')\">8. Avertissements sur devn moyenne et standard</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'écart moyen et l'écart ne peut donner aucune indication de l'existence de valeurs aberrantes, l'asymétrie ou clusters. Un graphique ou un histogramme points devraient être examinés avant de rapporter ces résumés numériques.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
