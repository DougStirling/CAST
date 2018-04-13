var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>D&eacute;crivant le centre et la propagation</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread_b1')\">1. Centre and spread</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le centre de distribution est une &laquo;valeur typique&raquo;. La propagation d&eacute;crit dans quelle mesure les valeurs sont au centre.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread_b2')\">2. Median, range and IQR</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La m&eacute;diane est un r&eacute;sum&eacute; du centre de distribution. La gamme large et inter-quartile d&eacute;crivent tous deux se r&eacute;pandre.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread_b3')\">3. Summaries of centre</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La m&eacute;diane et la moyenne sont des mesures alternatives du centre de distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread4')\">4. Propriétés de la médiane et la moyenne</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Quand un ensemble de donn&eacute;es n'est pas sym&eacute;trique, la moyenne et la m&eacute;diane peuvent diff&eacute;rer consid&eacute;rablement.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread5')\">5. L'écart-type</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'&eacute;cart type est le r&eacute;sum&eacute; le plus couramment utilis&eacute; num&eacute;rique de la propagation des valeurs dans un ensemble de donn&eacute;es.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread6')\">6. Règles d'or pour l'écart-type</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La r&egrave;gle de 70-95-100-de-pouce est utile pour comprendre la valeur num&eacute;rique de l'&eacute;cart-type.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread7')\">7. Signifie comprendre et devns er</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Il est possible de deviner le gros &eacute;cart moyen et standard &agrave; partir d'un histogramme et grossi&egrave;rement esquisser un histogramme sym&eacute;trique correspondant toute d&eacute;viation moyenne et standard donn&eacute;e.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread8')\">8. Avertissements sur devn moyenne et standard</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La d&eacute;viation moyenne et standard ne peut donner aucune indication sur l'existence de valeurs aberrantes, l'asym&eacute;trie ou clusters. Un trac&eacute; de points ou l'histogramme devrait &ecirc;tre examin&eacute; avant de signaler ces r&eacute;sum&eacute;s num&eacute;riques.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
