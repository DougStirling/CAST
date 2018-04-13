var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Proportionen und Perzentile</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile1')\">1. Illustrative data set</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ein Datensatz über die Jahresniederschläge in Samaru, Nigeria wird im Folgenden zur Illustration verwendet.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile2')\">2. Cumulative proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Hälfte der Daten ist kleiner als der Median. Ein Viertel sind kleiner als das untere Quartil, und drei Viertel der Werte sind kleiner als das obere Quartil. Für alle anderen Werte x  wird der Anteil der Werte die kleiner oder gleich x sind als kummulative Häufigkeit bezeichnet.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile3')\">3. Graph of cumulative proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Eine mögliche grafische Darstellung der relativen kummulativen Häufigkeit ist die Stufenfunktion, die y-Werte zwischen 0 (kleines x) und 1 (großes x) annimmt.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile4')\">4. Percentiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Für jede Proportion p lässt sich ein zugehöriger Wert x finden, unterhalb dessen sich ungefähr der Anteil p an Werten im Datensatz befinden. Das 50%-Perzentil ist beispielsweise der Median.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile5')\">5. Displaying percentiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Das 0te, 25ste, 50ste, 75ste und das 100ste Perzentil sind in einem Boxplot dargestellt. Andere Perzentile lassen sich ähnlich in einem schraffierten Rechteck darstellen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile6')\">6. Comparing groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Boxplots eignen sich besonders gut zum Vergleich von Gruppen. Befinden sich diese Gruppen in einer vorgegebenen Reihenfolge, so können die Quartile, Extrem und der Median jeweils zu Bändern verbunden werden.Dadurch lässt sich die Verteilung sehr effektiv darstellen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile7')\">7. Comparing groups with other percentiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bei bestimmten Anwendungen sind andere Perzentile wichtig. Auch diese können als Bänder dargestellt werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile8')\">8. Better definition of percentiles</a>&nbsp;&nbsp;&nbsp;<span class='note'>(advanced)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die meisten Softwareprogramme liefern geglättete Kurven der Stufenfunktion.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
