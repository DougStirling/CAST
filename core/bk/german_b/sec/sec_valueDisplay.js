var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Grafische Darstellung der Werte</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Dotplots und Ast-Blatt-Diagramme stellen alle Einzelwerte grafisch dar.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_b1')\">1. Analyse der Variation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bedeutsame Information kann oft aus der Variabilität von Einzelwerten abgeleitet werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_b2')\">2. Einfache Dotplots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ein Dotplot stellt jeden einzelnen Messwert als Kreuzchen entlang einer numerischen Achse dar.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_b3')\">3. Jittered Dotplots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Um das Überlappen mehrerer Kreuzchen zu vermeiden, können diese zufällig vertikal verschoben werden (Jittering).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_b4')\">4. Gestapelte Dotplots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Das Stapeln der Kreuzchen ist eine Alternative zum Jittering, dass die Bereiche hoher und geringer Dichte hervorhebt.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_b5')\">5. Ast-Blatt-Diagramm</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ast-Blatt-Diagramme ähneln gestapelten Dotplots, statt eines Kreuzchens wird jedoch eine Ziffer verwendet.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay6')\">6. Die St&auml;mme aufteilen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Um die Darstellungsmöglichkeiten flexibler gestalten zu können, werden die Stämme bei Bedarf in 2 oder 5 Stämme aufgeteilt. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay7')\">7. Zeichnen von Ast-Blatt-Diagrammen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ast-Blatt-Diagramme lassen sich sehr leicht von Hand zeichnen. Sie haben nur einen geringen zusätzlichen Informationsvorteil gegenüber den gestapelten Dotplots.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
