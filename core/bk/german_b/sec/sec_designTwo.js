var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Zwei oder mehr Faktoren</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designTwo_b1')\">1. Experimente mit 2 Faktoren</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ein zweiter Faktor kann in einem randomisierten Experiment variiert werden ohne die Genauigkeit der Effektschätzung des ersten Faktors zu mindern.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designTwo_b2')\">2. Faktorielles Design</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In einem faktoriellen Experiment wird jede Faktorstufenkombination der zwei oder mehr Faktoren auf jeweils die gleiche Anzahl an Versuchseinheiten verteilt.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designTwo3')\">3. Einfaches Model mit zwei Faktoren</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Das einfachste Modell für den Effekt zweier Faktoren ist, dass die Effekte der Faktoren jeweils gleich bleiben, unabhängig von der Stufe des anderen Faktors. Der Mittelwert der Zielvariable kann als Summe der Effekte der beiden Faktoren formuliert werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designTwo4')\">4. Interaction zwischen Faktoren</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ist der Effekt eines Faktors von der Stufe des anderen Faktors abhängig, spricht man von einer Interaktion bzw. Wechselwirkung. Interaktionen können in einem faktoriellen Experiment untersucht werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designTwo5')\">5. Beispiel für Interaktionen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Interaktionen bzw. Wechselwirkungen anhand eines Beispiels.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designTwo_b6')\">6. Model für drei Faktoren ohne Interaktion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The simplest model for three or more factors assumes that the effect of each does not depend on the levels of the others. The mean response is modelled as the sum of terms for the individual factors.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designTwo7')\">7. Interaktion in 3-faktoriellen Designs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In factorial experiments with 3 or more factors, there may be interactions between two or more of the factors.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
