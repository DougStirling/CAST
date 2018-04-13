var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Darstellung multivariater Daten</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Zusammenhänge zwischen drei oder mehr Variablen sind oft schwer zu begreifen. Grafiken können dabei hilfreich sein.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multivariate1')\">1. Representing a third variable</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Eine dritte Variable kann in einem Streudiagramm durch unterschiedliche Farben oder Symbole dargestellt werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multivariate2')\">2. Drehbare 3D-Streudiagramme</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Drei metrische Variablen können in einem 3-dimensionalen Streudiagramm dargestellt werden. Lässt dich das Streudiagramm drehen, dann können verschiedene Zusammenhänge in den Daten durch diese Darstellungsform gleichzeitig dargestellt und untersucht werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multivariate3')\">3. Streudiagrammmatrix und Einf&auml;rben</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Eine Darstellung der Streudiagramme mehrerer Variablenpaare kann sehr  informativ sein, insbesondere wenn die Streudiagramme verlinkt sind.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multivariate4')\">4. Einf&auml;rben</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Durch das Einfärben bestimmter Individuen können in dynamisch verlinkten Diagrammen Besonderheiten sehr anschaulich untersucht werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multivariate5')\">5. Aufteilen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Durch das Aufteilen können in verlinkten Grafiken bestimmte Teilmengen des Datensatzes dargestellt werden. Auch hier handelt es sich um eine dynamische Darstellungsmethode.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
