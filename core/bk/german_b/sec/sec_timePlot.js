var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Grafische Darstellung von Zeitreihen</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('timePlot_b1')\">1. Grafische Darstellung von Zeitreihen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Zeireihen werden üblicherweise durch Streudiagramme dargestellt, bei denen die Zeit als Variable auf der x-Achse abgetragen ist. Die Werte können durch Linien verbunden werden, um die Veränderungen deutlicher darzustellen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('timePlot_b2')\">2. Muster in Zeitreihen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Einige Beispiele von Zeitreihen mit Trend, saisonalen Mustern und anderen Schwankungen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('timePlot3')\">3. Multiple Zeitreihen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Beispiel mit vier verschiedenen Zeitreihen in einem Graf.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
