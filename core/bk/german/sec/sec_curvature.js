var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Nichtlineare Zusammenhänge</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('curvature1')\">1. Transformationen und Korrelation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Der Korrelationskoeffizient kann die Stärke eines nichtlinearen Zusammenhangs nicht adäquat beschreiben. Das Linearisieren der Variable durch Transformation kann hier Abhilfe schaffen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('curvature2')\">2. Transformationen und Modelle</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ist der Zusammenhang nicht linear kann ein lineares Modell oft trotzdem angewendet werden, indem entweder die Zielvariable oder die Einflussvariable transformiert werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('curvature3')\">3. Quadratische Modelle</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Eine weitere Möglichkeit, um mit Nichtlinearität umzugehen ist die Verwendung quadratischer Kurven unter Verwendung der Methode der kleinsten Quadrate.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('curvature4')\">4. Gefahren bei der Extrapolation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Außerhalb des beobachteten Bereichs der x-Werte ist die Art des Zusammenhanges unbekannt. Eine Extrapolation ist daher sehr riskant.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
