var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Endliche Grundgesamtheiten</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('popSamp_b1')\">1. Zensus oder Stichprobe?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Eine Stichprobe gibt uns Informationen über eine Grundgesamtheit, wenn es zu schwierig oder zu teuer ist alle Einheiten der Grundgesamtheit zu untersuchen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('popSamp2')\">2. Variabilit&auml;t einer Stichprobe</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Eine Stichprobe wird normalerweise gezogen, um Informationen über die zugrundeliegende Grundgesamtheit zu gewinnen. Eine bestimmte Variabilität zwischen den Stichproben muss dabei berücksichtigt werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('popSamp_b3')\">3. Stichprobenfehler</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Wird eine Stichprobe verwendet, um die charakteristischen Eigenschaften einer Grundgesamtheit zu schätzen, ist diese Schätzung normalerweise mit einem Fehler behaftet. Dieser Stichprobenfehler geht auf die zufällige Auswahl aus der Grundgesamtheit zurück.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('popSamp_b4')\">4. Stichprobenumfang und Stichprobenfehler</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Je größer der Stichprobenumfang, desto kleiner ist der Stichprobenfehler.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('popSamp_b5')\">5. Stichproben aus endlichen Grundgesamtheiten</a>&nbsp;&nbsp;&nbsp;<span class='note'>(optional)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Jede Beobachtungseinheit kommt gewöhnlich maximal einmal in der Stichprobe vor. Stichprobenverfahren, in denen eine Beobachtungseinheit auch mehrfach in eine Stichprobe gezogen werden kann finden in bestimmten Fällen ebenfalls ihre Anwendung.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('popSamp6')\">6. Eine Zufallsstichprobe ziehen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Zufällswerte können durch Würfeln, Tabellen mit Zufallswerten oder mit einem Computer erzeugt werden. Diese Werte können verwendet werden, um Beobachtungseinheiten zufällig aus einer Grundgesamtheit auszuwählen. Wiederholt man diesen Prozess mehrfach, erhält man eine Zufallsstichprobe.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
