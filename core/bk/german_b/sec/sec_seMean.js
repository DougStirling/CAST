var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Standardfehler des Mittelwertes</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean_b1')\">1. Fehlerverteilung des Mittelwerts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Verwendet man den Stichprobenmittelwert um den Mittelwert der Grundgesamtheit zu schätzen, hat der Stichprobenfehler einen Mittelwert von Null. Die Standardabwechung des Stichprobenfehlers (Standardfehler) ist die Standardabweichung der Stichprobenmittelwerte.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean_b2')\">2. Standardfehler bei bekanntem &sigma;</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ist die Standardabweichung der Grundgesamtheit bekannt, so kann der Standardfehler geschätzt werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean_b3')\">3. Interpretation des Standardfehlers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Der Schätzfehler liegt mit einer 95%-igen Wahrscheinlichkeit innerhalb ± 2 Standardfehlern um Null und liegt fast sicher innerhalb ±3 Standardfehlern um Null.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean_b4')\">4. Standardfehler bei unbekanntem &sigma;</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In praktischen Anwendungen ist die Standardabweichung der Grundgesamtheit unbekannt. Eine Annäherung an den Standardfehler kann dadurch abgeleitet werden, dass der Mittelwert der Grundgesamtheit in der Formel durch den Stichprobenmittelwert ersetzt wird.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean5')\">5. Standardfehler vs Standardabweichung</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Es ist sehr wichtig bei der Interpretation zwischen dem Standardfehler und der Standardabweichung zu unterscheiden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean_b6')\">6. Vergleich von Sch&auml;tzern</a>&nbsp;&nbsp;&nbsp;<span class='note'>(fortgeschritten)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Gibt es zwei alternative Schätzer für einen Parameter, dann ist jener mit dem kleineren Standardfehler meist besser. Der Stichprobenmittelwert ist meist ein besserer Schätzer für die Lage einer Normalverteilung, als der Stichprobenmedian.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean7')\">7. Weitere Informationen zum Bias</a>&nbsp;&nbsp;&nbsp;<span class='note'>(fortgeschritten)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Schätzer ohne Bias (unverzerrt) werden gewöhnlich bevorzugt. Der Stichprobenmedian ist hat als Schätzer für den Mittelwert in einer schiefenverteilung einen deutlichen Bias.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
