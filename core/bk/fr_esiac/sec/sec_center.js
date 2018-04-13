var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Centre décrivant</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread_b1')\">1. Centre and spread</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le centre de distribution est une «valeur typique». La propagation décrit dans quelle mesure les valeurs sont du centre.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread_b2')\">2. Median, range and IQR</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La médiane est un résumé du centre de distribution. La gamme et interquartile décrivent tous deux se propager.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread_m3')\">3. Summaries of centre</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La médiane et la moyenne sont des mesures alternatives du centre de distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread4')\">4. Propriétés de la médiane et la moyenne</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Quand un ensemble de données est pas symétrique, la moyenne et la médiane peuvent différer sensiblement.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
