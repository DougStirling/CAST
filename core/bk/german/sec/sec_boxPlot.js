var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Median, Quartile &amp; Boxplots</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Boxplots fassen die Verteilung eines Datensatzes stark zusammen. Sie sind sehr nützlich beim Vergleich mehrerer Stichproben.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot1')\">1. Warum ist das Zusammenfassen von Daten wichtig?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dotplots, Ast-Blatt-Diagramme und Histogramme beinhalten detaillierte Informationen, die ablenkend wirken können, wenn 2 oder mehr Datensätze verglichen werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot2')\">2. Median, Quartile und Boxplot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Der Median und die Quartile teilen einen Datensatz in gleichgroße Gruppen auf. Ein Boxplot zeigt den Median, die Quartile und Extremwerte.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot3')\">3. Interpretieren der Form eines Boxplots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ein Boxplot zeigt deutlich die Lage, Streuung und Schiefe von Datensätzen. Es teilt das Histogramm in 4 ungefähr gleichgroße Teile.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot4')\">4. Ausreisser darstellen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bei einer gebräuchlichen Modifikation des einfachen Boxplots werden die Ausreisser separat dargestellt.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot5')\">5. Cluster</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Boxplots können keine Cluster darstellen. Datensätze, denen Cluster zugrundeliegen sollten nicht mit Boxplots dargestellt werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot6')\">6. Vergleich von Gruppen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Boxplots sind besonders dafür geeignet, verschiedene Gruppen zu vergleichen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot7')\">7. Die Gefahr der Überinterpretation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Boxplots sind relativ stabil und beinhalten weniger 'Rauschen' als andere Diagramme. Auch kleine Datensätze können sinnvoll mit Boxplots verglichen werden.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
