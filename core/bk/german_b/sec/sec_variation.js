var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Variation</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p><span style='color:red;'>(Klicke auf die Überschriften, um zu der jeweiligen Seite zu gelangen.)</span></p> <p>Wenn Daten erhoben werden, sind selten mehrere Messwerte genau gleich. Eine wichtige Funktion der Statistik ist es diese Variation zu beschreiben.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation1')\">1. Signal und Rauschen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In vielen Situationen wird die Information (Signal) durch zufällige Variation (Rauschen) überlagert.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation2')\">2. Nat&uuml;rliche Variabilit&auml;t</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Daten, die von Individuen erhoben werden variieren oft stark.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation3')\">3. Durch Experimente verursachte Variabilit&auml;t</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Auch geplante Unterschiede, die Teil des Experiments sind können Unterschiede zwischen Messwerten bewirken. Natürliche Variabilität erschwert die Interpretation experimenteller Daten.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation4')\">4. Variabilit&auml;t in Daten aus Frageb&ouml;gen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die natürliche Variabilität von Individuen erschwert auch die Analyse von Fragebögen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation_b5')\">5. Erkl&auml;rte und unerkl&auml;rte Variation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ein Teil der Variation in einer Variablen kann durch andere erhobene Variablen erklärt werden. Ein anderer Teil der Variation kann durch individuelle Variabilität erklärt werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation6')\">6. Vorhersage zuk&uuml;nftiger Werte</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Variabilität in einem Datensatz kann verwendet werden um Vorhersagen über zukünftige Messwerte zu machen, die unter den gleichen Bedingungen erhoben werden.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
