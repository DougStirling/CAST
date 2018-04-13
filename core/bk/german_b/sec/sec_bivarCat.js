var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Bivariate kategorielle Verteilungen</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat_b1')\">1. Zusammenhang zwischen Variablen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Falls zwei kategorielle Variablen in eine Einflussvariable und eine Zielvariable aufgeteilt werden können, dann kann man die Zielvariable mit der Einflussvariable in Gruppen aufteilen. Falls keine der beiden Variablen als Einflussvariable gerechnet werden kann, dann müssen andere Methoden verwendet werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat2')\">2. 3-dimensionale Balkendiagramme</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bivariate Verteilungen können in dreidimensionalen Balkendiagrammen dargestellt werden, aber es gibt bessere Arten der Darstellung dafür.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat3')\">3. Gruppierte Balkendiagramme</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ein zweidimensionales Balkendiagramm kann verwendet werden, um die bivariate Verteilung zweier kategorieller Variablen zu beschreiben. Die Balken werden dabei entweder nach der einen oder der anderen Variable gruppiert.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat4')\">4. Randverteilungen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Randverteilungen werden durch dass Aufaddieren der realtiven Häufigkeiten in den Zeilen und den Spalten errechnet.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat5')\">5. Bedingte Verteilungen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bedingte Verteilungen werden durch Saklierung der Zeilen (Spalten) der Kontingenztabelle erreicht, so dass alle Zeilen (Spalten) sich jeweils zu 1 aufaddieren.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat6')\">6. Mehr über bedingte Verteilungen</a>&nbsp;&nbsp;&nbsp;<span class='note'>(fortgeschritten)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Be careful to distinguish between the conditional distribution of Y given X, and that of X given Y.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat7')\">7. Bedingte Verteilungen und Randverteilungen im Vergleich</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Proportional Venn diagrams are a useful way to display joint distributions and to understand the relationships between conditional and marginal distributions.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
