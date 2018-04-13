var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Kontext</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p><span style='color:red;'>(Klicke auf eine Überschrift, um zu der entsprechenden Seite zu gelangen.)</span></p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('context1')\">1. Importance of context</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Der Fokus der Statistik liegt darauf, Antworten auf Fragen zu finden, die aus einem bestimmten Anwendungsbereich heraus gestellt werden. Statistische Methoden der Datenanalyse sind ein Kerngebiet der Statistik, doch der Kontext der Daten ist am wichtigsten.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('context2')\">2. Statistik</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die statistische Analyse ist ein Prozess, der die Identifikation der interessierenden Fragestellung, die Sammlung der Daten, die Analyse der Daten und die Erstellung einer Übersicht der Ergebnisse umfasst. Die Sammlung der Daten und deren Analyse kann bei realen Problemstellungen auch mehrfach erfolgen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('context3')\">3. Der statistische Prozess</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bei vielen Anwendungen ist die wiederholte Sammlung und Analyse von Daten notwendig, um ein System zu verbessern.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
