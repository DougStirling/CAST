var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Steudiagramme</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterplot1')\">1. More than one variable</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Viele Datensätze enthalten zwei oder mehr Messwerte pro Individuum. Selbst wenn das Hauptinteresse nur einer dieser Variablen gilt, können die anderen Variablen helfen die Verteilung zu verstehen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterplot2')\">2. Streudiagramme</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die wichtigste Darstellungsform für zwei Variablen ist das Streudiagramm.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterplot3')\">3. Grenzen univariater Darstellungsformen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Univariate Darstellung können keine Zusammenhänge zwischen Variablen darstellen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterplot4')\">4. Randverteilungen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ein Streudiagramm zweier Variablen kann durch Boxplots oder Histogramme am Rand ergänzt werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterplot5')\">5. Zeitreihen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Wurden die Messungen in bestimmten regelm,äßigen Intervallen vorgenommen, spricht man von einer Zeitreihe. Zeitreihen können als bivariate Datensätze mit Zeit als zweiter Variable interpretiert werden.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
