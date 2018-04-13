var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Diskrete Daten (Zähldaten)</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('counts1')\">1. Discrete and continuous data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diskrete Daten beinhalten Zähldaten, wohingegen kontinuierliche Daten Werte enthalten, die jeden Wert inerhalb eines bestimmten Intervalls annehmen können. Gestapelte Dotplots sind geeignete Darstellungsformen für kleine Datensätze mit diskreten Werten.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('counts2')\">2. Histograms for counts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Wird die Bandbreite der möglichen Werte zu groß, eignet sich eher ein Histogramm zur Darstellung von Zähldaten. Die Klassenbreiten sollten ganzzahlig sein und die Klassengrenzen jeweils auf &quot;,5&quot; enden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('counts3')\">3. Balkendiagramme</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ist die Bandbreite der möglichen Werte bei Zähldaten klein, dann ist ein Balkendiagramm besser geeignet als ein Histogramm.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('counts4')\">4. Mean and st devn</a>&nbsp;&nbsp;&nbsp;<span class='note'>(fortgeschritten)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Eine Häufigkeitstabelle wird oft zur Darstellung von Zähldaten verwendet. Aus der Häufigkeitstabelle lassen sich Mittelwert und Standardabwichung leicht bestimmen.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
