var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Histogramme und Dichte</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Ein Histogramm zeigt die einzelnen Werte nicht separat. Bei großen Datensätzen zeigt es die wichtigen Eigenschaften des Datensatzes besser als Ast-Blatt-Diagramme und Dotplots.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density1')\">1. Dichte der Werte</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Höhe der Kreuzchenstapel in gestapelten Dotplots beschreibt die Dichte der Werte.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density2')\">2. Histogrammemit einheitlichen Klassenbreiten</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ein einfaches Histogramm stellt durch die Höhe der einzelnen Rechtecke über jeder Klasse auf der x-Achse die Anzahl der Werte in der Klasse dar - die Klassenhäufigkeit.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density3')\">3. Wahl der Klassenbreite</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Klassenbreite und der Startpunkt eines Histogramms sollten so gewählt werden, dass das Histogramm einen möglichst  runden Verlauf hat.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density4')\">4. Histograms of small data sets</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Form eines Histogramms ist sehr stark von den gewählten Klassen abhängig. Zum Darstellen kleiner Datensätze eignen sich gestapelte Dotplots oft besser.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density5')\">5. Relative Häufigkeit und Fläche</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Fläche der einzelnen Rechtecke beschreibt in einem Histogramm grundsätzlich die relative Häufigkeit der Klasse.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density6')\">6. Comparing groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Vergleicht man zwei Gruppen mithilfe von Histogrammen, sollte die y-Achse die relative Häufigkeit anzeigen. Altersverteilungen verschiedener Populationen werden oft mit Alterspyramiden verglichen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density7')\">7. Histograms with varying class widths</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Variieren die Klasssenbreiten, muss die vertikale Achse die Dichte anzeigen. Würde die absolute oder die relative Häufigkeit verwendet, würde das zu Fehlinterpretationen führen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density8')\">8. Histogramme verstehen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Der Anteil der Werte in einer Klasse entspricht entspricht der Proportion der Rechtecksfläche einer Klasse zur Gesamtfläche aller Rechtecke..</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density9')\">9. Summenpolygone</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Polygone sind Histogrammen sehr ähnlich, jedoch weniger stufig. Gruppen können damit einfacher verglichen werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density10')\">10. Kerndichteschätzungen</a>&nbsp;&nbsp;&nbsp;<span class='note'>(optional)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Eine noch abgerundetere Darstellung ermöglichen Kerndichteschätzungen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density11')\">11. Histogramme von Hand zeichnen</a>&nbsp;&nbsp;&nbsp;<span class='note'>(optional)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Histogramme basieren auf Häufigkeitstabellen.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
