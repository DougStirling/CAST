var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Lage und Streuung beschreiben</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread1')\">1. Centre and spread</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Das Zentrum einer Verteilung ist ein 'typischer Wert'. Die Streuung beschreibt, wie stark die Werte um das Zentrum streuen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread2')\">2. Median, range and IQR</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Der Median ist ein Lagemaß. Variationsbreite und Interquartilsbreite sind Streuungsmaße.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread3')\">3. Summaries of centre</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Der Median und das arithmetische Mittel sind beide Lagemaße.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread4')\">4. Eigenschaften von Mittelwert und Median</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Sind Datensätze unsymmetrisch können sich der Median und das arithmetische Mittel deutlich unterscheiden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread5')\">5. Standardabweichung</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Streuung wird am häufigsten durch die Standardabweichung ausgedrückt.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread6')\">6. Faustregel für die Standardabweichung</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die 70-95-100 Faustregel ist nützlich um die Standardabweichung interpretieren zu können.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread7')\">7. Standardabweichungen und Mittelwerte verstehen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Aus einem Histogramm kann man grob das arithmetische Mittel und die Standardabweichung schätzen. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread8')\">8. Warnung für den Gebrauch der Standardabweichung und des Mittelwerts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ein Dotplot oder Histogramm sollte erstellt werden, um Ausreisser, Schiefe und Cluster zu erkennen, da Standardabweichung und Mittelwert darüber keine Aussagen zulassen.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
