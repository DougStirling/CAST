var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Einführung in statistische Schätzverfahren</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estIntro_b1')\">1. Das Interesse an Grundgesamtheiten</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Werden Daten erhoben, dann sind wir normalerweise an der unbekannten Grundgesamtheit interessiert, aus der die Daten erhoben wurden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estIntro_b2')\">2. Das Interesse an Parametern</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Mit einigen wenigen zusammenfassenden Maßzahlen (Parametern) zur Verteilung der Grundgesamtheit können oft die wichtigsten Eigenschaften beschrieben werden. Die entsprechenden Maßzahlen der Stichprobe (Statistiken) dienen uns dafür als Schätzungen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estIntro3')\">3. Anwendung von Schätzungen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Auf dieser Seite werden einige Beispiel gezeigt, bei den Stichprobenstatistiken zur Schätzung wichtiger Populationsparameter genutzt werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estIntro4')\">4. Schätzfehler</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Der Unterschied zwischen einem Parameter der Grundgesamtheit und einer Stichprobenstatistik wird als Stichprobenfehler bezeichnet.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estIntro_b5')\">5. Fehlerverteilung</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Stichprobenfehler variieren von Stichprobe zu Stichprobe und folgen einer Verteilung.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estIntro6')\">6. Standardfehler und Bias</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ein guter Schätzer hat einen Fehler, der nah an Null liegt. Im besten Fall ist die Fehlerverteilung auf Null zentriert (kein Bias) und hat eine kleine Standardabweichung (Standardfehler). Der Standardfehler ist die Standardabweichung sowohl des Schätzers, als auch des Stichprobenfehlers.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estIntro7')\">7. Intervallschätzungen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ein Intervallschätzer ist eine Spannbreite an Werten, bei der wir zuversichtlich sind, dass innerhalb deren Schranken der unbekannte Parameter der Grundgesamtheit liegt.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
