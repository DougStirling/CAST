var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Multiple Regression</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegn1')\">1. Mehr als eine Einflussvariable</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In vielen Datensätzen haben zwei oder mehr Variablen einen potentiellen Einfluss auf die Zielgröße. Benutzt man diese Variablen als Einflussgrößen in der Analyse erhält man unter Umständen genauere Vorhersagen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegn2')\">2. Multiple Regressionsgleichung</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Das einfache lineare Modell mit einer einzigen Einflussgröße kann durch zusätzliche Effekte anderer Einflussgrößen ergänzt werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegn3')\">3. Koeffizienten interpretieren</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Steigung einer Einflussgröße beschreibt ihren Effekt, wenn alle anderen Variablen konstant gehalten werden. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegn4')\">4. Streudiagramm zweier Variablen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Der Zusammenhang zwischen einer Zielgröße und zwei Einflussgrößen kann effizient in einem dreidimensionalen Streudiagramm dargestellt werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegn5')\">5. Die lineare Gleichung für Y mit den Einflussvariablen X und Z</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die lineare Gleichung für Y in Abhängigkeit von X und Z kann als eine Fläche in einem dreidimensionalen Raum dargestellt werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegn6')\">6. Modelwerte und Residuen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Residuen sind die vertikalen Abstände der Kreuzchen in einem dreidimensionalen Streudiagramm von der Fläche, die das Modell repräsentiert.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegn7')\">7. Schätzung der kleinsten Quadrate</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Eine objektive Schätzmethode ist die Minimierung der Abweichungsquadrate nach der Methode der kleinsten Quadrate.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
