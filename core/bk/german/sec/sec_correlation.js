var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Korrelation</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Dieser Abschnitt beschreibt, wie der Zusammenhang zweier metrischer Variablen X und Y beschrieben werden kann.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation1')\">1. Relationship strength and units of X and Y</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Eine numerische Beschreibung der Stärke des Zusammenhangs sollte nicht von der Skalierung der Variablen abhängen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation2')\">2. Variablen ohne Einheiten (z-Werte)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Durch das Standardisieren einer Variable erhält man z-Werte, die nicht von den Einheiten der Originalvariable abhängen. Der Korrelationskoeffizient wird auf Basis der z-Werte von X und Y ermittelt.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation3')\">3. Der Korrelationskoeffizient und seine Eigenschaften</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Der Korrelationskoeffizient fasst die Stärke des Zusammenhangs in einem Wert zwischen -1 und 1 zusammen. Liegen alle Punkte auf einer geraden mit positiver (negativer) Steigung ist der Korrelationskoeffizient gleich +1 (-1). Der Korrelationskoeffizient ist gleich 0, wenn die Variablen keinen Zusammenhang aufweisen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation4')\">4. Streudiagramme und die Maßzahl r</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Aus einem Streudiagramm lässt sich aufgrund der Lage der Kreuzchen bereits der Korrelationskoeffizient abschätzen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation5')\">5. Nichtlineare Zusammenhänge</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Nur wenn die Werte im Streudiagramm um eine gerade Linie herum streuen handelt es sich um einen linearen Zusammenhang. Streuen die Werte um eine Kurve, dann liegt ein nichtlinearer Zusammenhang vor.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation6')\">6. R beschreibt nicht das ganze Bild</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Der Korrelationskoeffizient kann aufgrund von Ausreissern, Clustern oder Nichtlinearität irreführend sein. Ein Streudiagramm sollte grundsätzlich zusätzlich analysiert werden.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
