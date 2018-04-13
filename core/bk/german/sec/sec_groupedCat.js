var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Gruppen vergleichen</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupedCat1')\">1. Kontingenztabellen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Kategorielle Daten, die von verschiedenen Gruppen stammen können in einer Kontingenztabelle dargestellt werden. Für jede Gruppe wird dabei eine Häufigkeitstabelle erstellt.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupedCat2')\">2. Contingency table examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In Eexperimenten werden häufig Daten erhoben, die in Kontingenztabellen dargestellt werden können. Daten, die durch Fragebögen erhoben wurden, werden oft in Kontingenztabellen dargestellt.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupedCat3')\">3. Bar charts using proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Gruppen lassen sich leichter anhand der relativen Häufigkeiten innerhalb der Gruppen, als durch absolute Häufigkeiten vergleichen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupedCat4')\">4. Stacked bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Werden die Balken innerhalb der Gruppen gestapelt, ist es leichter die Gruppen zu vergleichen. Besonders effektiv sind gestapelte Balkendiagramme bei ordinalen Daten.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupedCat5')\">5. Two special cases</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Hat die Variable nur zwei Kategorien, können die gestapelten Balkendiagramme vereinfacht werden. In einem Beispiel wird dargestellt, wie die Gruppen eine Zeitreihe darstellen können.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
