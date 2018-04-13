var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Stichprobenverteilung von Häufigkeiten</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Kategorielle Daten werden gewöhnlich durch Häufigkeiten zusammengefasst. Bei Stichproben sind diese Häufigkeiten Zufallsvariablen und unterliegen Wahrscheinlichkeitsverteilungen.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomPropn1')\">1. Proportionen und Wahrscheinlichkeiten</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Häufigkeit einer Kategorie in der Grundgesamtheit beschreibt ihre Wahrscheinlichkeit. Häufigkeiten und Wahrscheinlichkeiten können sowohl für metrische, als auch für kategorielle Variablen abgeleitet werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomPropn2')\">2. Eigenschaften von Z&auml;hlwerten und Proportionen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Häufigkeit einer Kategorie in einer Stichprobe ist eine Statistik, die von Stichprobe zu Stichprobe schwanken kann. Die absolute Häufigkeit einer Kategorie in einer Stichprobe ist, genau wie die relative Häufigkeit, eine Zufallsvariable. Die absolute Häufigkeit folgt dabei einer diskreten Häufigkeitsverteilung.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomPropn_b3')\">3. Binomialverteilung</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die absolute Häufigkeit einer Kategorie in einer Stichprobe folgt gewöhlich einer Binomialverteilung mit den Parametern n und p.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomPropn_b4')\">4. Binomiale Wahrscheinlichkeiten</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Binomialverteilung kann verwendet werden um Wahrscheinlichkeiten für absolute Häufigkeiten in einer Stichprobe zu ermitteln.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomPropn5')\">5. Anpassung der Normalverteilung an die Binomialverteilung</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ist der Stichprobenumfang groß, dann nähert sich die Binomialverteilung der Normalverteilung an.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomPropn_b6')\">6. Beispiele f&uuml;r die Ann&auml;herung an die Normalverteilung</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ist der Stichprobenumfang groß, dann kann die Normalverteilung verwendet werden, um binomiale Wahrscheinlichkieten zu ermitteln.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
