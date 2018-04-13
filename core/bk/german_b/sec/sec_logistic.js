var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Logistische Regression</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Die Methode der kleinsten Quadrate wird verwendet, um eine metrische Zielgröße durch eine metrische Einflussgröße vorherzusagen. Ist die Zielgröße kategorial, dann ist das Ziel, die <span style='font-weight:bold;'>prozentuale Verteilung jeder Faktorstufe</span> der Zielgröße vorherzusagen und eine andere Analyse wird benötigt.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('logistic_b1')\">1. Kategoriale Zielgrößen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Beide kategoriellen Zielgrößen und metrischen Einflussvariablen sind gestapelte Balkendiagramme mit Balken für jeden Wert der Einflussgröße eine effektive Darstellungsmöglichkeit.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('logistic_b2')\">2. Vorhersagen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Eine Gerade ist zur Beschreibung der Proportionen ungeeignet. Eine Kurve wird benötigt.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('logistic3')\">3. Logistische Kurve</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Eine logistische Kurve kann verwendet werden, um zu modellieren, wie die Proportion der Zielgröße von der Einflussgröße beeinflusst wird.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('logistic_b4')\">4. Obtaining a good fit</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In diesem Beispiel wird eine logistische Kurve an einen Datensatz angepasst.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
