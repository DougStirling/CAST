var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Die kleinsten Quadrate</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs1')\">1. Die Vorhersage von Y durch X</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Eine Gerade oder Kurve ist n&uuml;tzlich zur Vorhersage eines Wertes Y aus einem Wert X.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs2')\">2. Lineare modelle</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Eine Gerade kann oft benutzt werden, um eine Variable mithilfe einer anderen Variable vorherzusagen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs3')\">3. Berechnete Werte und Residuen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Differenz zwischen dem tats&auml;chlichen Wert von Y und dem durch eine Gerade vorhergesagten Wert wird Residuum genannt. M&ouml;glichst kleine Residuen sind nat&uuml;rlich erw&uuml;nscht.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs4')\">4. Methode der kleinsten Quadrate</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Summe der quadrierten Residuen beschreibt die Genauigkeit der Vorhersage durch eine Gerade. Die Methode der kleinsten Quadrate positioniert die Gerade so, dass die Summe der quadrierten Residuen minimiert wird.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs5')\">5. Nichtlinearität und Ausreißer</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ein lineares Modell ist nicht geeignet, falls im Scatterplot der Daten entweder ein nicht linearer Zusammenhang oder Ausrei&szlig;er zu erkennen sind. Ausrei&szlig;er sollten sorgf&auml;ltig untersucht werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs6')\">6. Residuendiagramm</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ausrei&szlig;er und Nichtlinearit&auml;t eines Zusammenhangs werden oft besser durch Residuenplots dargestellt.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs7')\">7. Vorhersage von Y und X</a>&nbsp;&nbsp;&nbsp;<span class='note'>(fortgeschritten)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Methode der kleinsten Quadrate behandelt Y und X nicht symetrisch. Die beste Gerade zur Vorhersage von Y durch X unterscheidet sich von der besten Gerade zur Vorhersage von X durch Y.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
