var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Verteilungen verstehen</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp1')\">1. Outliers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Gibt es Ausreisser im Datensatz - Werte die extrem hoch oder niedrig sind? Die extremen Werte in schiefen Verteilungen werden oft für Ausreisser gehalten.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp2')\">2. Clusters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Teilt sich der Datensatz in Cluster auf - mehrere Bereiche mit hoher Dichte, die durch Bereiche mit geringer Dichte getrennt sind? Solche Cluster können durch verschiedene Gruppen von Individuen entstehen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp3')\">3. Verteilung der Werte</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Verteilung wird unter anderem durch einen für die Verteilung typischen bestimmten Punkt (Lage bzw. Zentrum) und die Variabilität der Werte (Streuung der Verteilung) gekennzeichnet.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp4')\">4. Names of individuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Zusätzliche Informationen über die Versuchseinheiten kann bei der Interpretation der Verteilung hilfreich sein.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp5')\">5. Bekannte Gruppen unterscheiden</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ist bekannt, dass die Daten von 2 oder mehr unterschiedlichen Gruppen stammen, können diese Gruppen in Dotplots dargestellt werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp6')\">6. Gefahr der Überinterpretation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Muster in kleinen Datensätzen werden leicht überinterpretiert.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
