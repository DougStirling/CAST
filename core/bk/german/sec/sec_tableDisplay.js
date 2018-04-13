var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Daten in Tabellen präsentieren</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Dieses Kapitel beschreibt die Prinzipien zur effektiven Präsentation von Häufigkeitstabellen, Kontingenztabellen und danderen tabellarischen Darstellungen.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tableDisplay1')\">1. Rasterlinien und Leerzeichen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Fasse nicht alle Zellen einer Tabelle mit Rasterlinien ein. Es ist leichter eine Zeile von links nach rechts zu lesen, wenn nur wenige dünne Linien oder Leerzeichen verwendet werden. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tableDisplay2')\">2. Layout und Erl&auml;uterungen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Benutze Leerzeichen, um Gruppen von Zeilen oder Spalten darzustellen. Durch das Neuarrangieren der Tabelle fällt der Vergleich möglicherweise leichter. Die Zusammenfassung sollte nicht einfach nur die Werte wiederholen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tableDisplay3')\">3. Datenrauschen und Dezimalstellen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die bedeutungsvolle Information ist das &quot;Signal&quot;. Information, die nicht zum Verständnis der Daten beiträgt, wird als Rauschen bezeichnet. Rauschen kann Teil der Daten sein oder auch unnütze Verzierungen der Tabelle beschreiben. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tableDisplay4')\">4. Bedeutsame Variablen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Durch Darstellung der Proportionen, statt absoluter Werte, lassen sich Gruppen leichter vergleichen. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tableDisplay5')\">5. Spalten und Zeilen vertauschen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Es ist leichter Werte von oben nach unten (innerhalb einer Spalte) zu vergleichen, als von links nach rechts (zwischen den Spalten). Aus diesem Grund kann es Sinn machen Spalten und Zeilen zu vertauschen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tableDisplay6')\">6. Zeilen neu ordnen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bestimmte Informationen lassen sich besser veranschaulichen, wenn Zeilen und Spalten in einer bestimmten Reihenfolge angeordnet werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tableDisplay7')\">7. Beispiel</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die dargestellte Tabelle kann in mehreren Punkten verbesert werden.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
