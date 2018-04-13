var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Normalverteilungen</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn1')\">1. Bedeutung der Normalverteilung</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Teilweise sind Normalverteilungen nützlich als Modell. Wichtig sind sie jedoch vor allem deshalb, weil Stichprobenmittelwerte und andere Maßzahlen annähernd normalverteilt sind.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn2')\">2. Die Form von Normalverteilungen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Alle Normalverteilungen sehen gleich aus, wenn auf der x-Achse der Abstand (in Standardabweichungen) vom Mittelwert angezeigt wird.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn_b3')\">3. Sketching a normal distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Normalverteilungen sind auf ihren Mittelwert µ zentriert. Jenseits von 3σ gibt es fast auf beiden Seiten fast keine Flächen. Eine kleine Fläche (circa 5%) liegt mehr als zwei Standardabweichungen vom Mittelwert entfernt..</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn4')\">4. Einige wichtige Wahrscheinlichkeiten</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Wahrscheinlichkeit innerhalb der Grenzen von σ, 2σ bzw. 3σ um den Mittelwert zu liegen sind 68%, 95% und 99,7% in jeder Normalverteilung. Diese Werte liegen sehr nah an der 70-95-100-Faustregel für metrische Daten.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn5')\">5. Z-Werte</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Jeder Wert kann in einen z-Wert umgewandelt werden. Dieser z-Wert besagt, wie viele Standardabweichungen der Wert über dem Mittelwert liegt.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn_b6')\">6. Finding normal probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>z-Werte folgen der Standardnormalverteilung (µ = 0 and σ = 1). Die Wahrschinlichkeit für einen Wert kleiner x kann, durch die Wahrscheinlichkeit für einen Wert kleiner z übersetzt werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn_b7')\">7. Other probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Wahrscheinlichkeit, dass x größer als ein bestimmter Wert ist oder dass x zwischen zwei bestimmten Werten liegt, kann auch über den z-Wert ermittelt werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn8')\">8. z-Tabellen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ist kein Computer verfügbar, werden Tabellen mit Wahrscheinlichkeiten für verschiedene z-Werte verwendet.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn9')\">9. Quantile der Normalverteilung</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Auch die umgekehrte Fragestellung, welcher Wert zu einer bestimmten Wahrscheinlichkeit gehört kann durch die z-Werte ermittelt werden. Benutzt man die z-Tabellen, dann muss diese in umgekehrter Richtung abgelesen werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn10')\">10. QQ-plots</a>&nbsp;&nbsp;&nbsp;<span class='note'>(fortgeschritten)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ein QQ-Plot ist eine grafische Methode, mit der man abschätzen kann, ob ein Datensatz aus einer Normalverteilung stammt. Eine Krümmung der Punktwolke deutet darauf hin, dass die Daten nicht aus einer Normalverteilung stammen.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
