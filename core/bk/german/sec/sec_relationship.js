var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Zusammenhänge verstehen</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('relationship1')\">1. St&auml;rke des Zusammenhangs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Das Hauptinteresse liegt beim Streudiagramm auf dem Zusammenhang zwischen zwei Variablen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('relationship2')\">2. Ausreisser</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ein extremer Wert in einer oder beiden Variablen ist ein Ausreisser. Ungewöhnlich Kombinationen zweier Werte werden auch als Ausreisser angesehen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('relationship3')\">3. Cluster</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bilden die Kreuzchen im Streudiagramm verschiedene Punktwolken, so hat man es wahrscheinlich mit verschiedenen Gruppen von Individuen zu tun.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('relationship4')\">4. Gefahr der &Uuml;berinterpretation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Kleine Datensätze können leicht einige Variabilität aufweisen. Die Muster sollten klar zu erkennen sein um sie zu interpretieren.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('relationship5')\">5. Einflussvariable und Zielvariable</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Eine der Variablen kann oft als &quot;erklärende Variable&quot; angesehen werden, die einen kausalen Effekt auf die Zielvariable hat oder zumindest geeignet ist, um die Zielvariable zu prognostizieren.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
