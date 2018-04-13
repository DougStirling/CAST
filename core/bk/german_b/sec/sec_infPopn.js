var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Stichproben von Verteilungen</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('infPopn_b1')\">1. Was Daten darstellen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Oft haben wir nur geringes Interesse an den einzelnen Beobachtungseinheiten, aus denen sich der Datensatz zusammensetzt. Die Daten sollen vielmehr repräsentativ für einen breiteren Blickwinkel sein. Wir möchten die Erkenntnisse aus dem Datensatz auf eine allgemeinere Situation übertragen und damit die Erkenntnisse generalisieren.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('infPopn_b2')\">2. Zufälligkeit von Daten</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Wird eine Stichprobennahme erneut durchgeführt, möglicherweise mit anderen Beobachtungseinheiten, würden wir andere Werte erhalten. Jeder solche Datensatz sollte ähnliche aber nicht die gleichen Informationen darstellen. Die Interpretation der Daten sollte diese Zufälligkeit berücksichtigen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('infPopn_b3')\">3. Model zur Erklärung der Zufälligkeit</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Viele Datensätze werden nicht als Zufallsstichproben aus endlichen Grundgesamtheiten gewonnen. Oft ist es sinnvoller die Daten als Zufallstichproben aus einer abstakten Grundgesamtheit zu betrachten.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('infPopn4')\">4. Unendliche Populationen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Grundgesamtheiten, die einem Datensatz zugrundeligen beinhalten oft eine unendliche Anzahl an Beobachtungseinheiten. Diese Grundgesamtheiten werden auch als Verteilungen bezeichnet.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('infPopn5')\">5. Information aus einer einzelnen Stichprobe</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Der Mechanismus der Stichprobennahme erklärt die Zufälligkeit eines Datensatzes. Obwohl die eigentliche Grundgesamtheit unbekannt ist und nur eine einzelne Stichprobe vorhanden ist, bietet die Stichprobe einige Informationen über die Grundgesamtheit.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
