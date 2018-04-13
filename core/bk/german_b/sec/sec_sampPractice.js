var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Stichproben in der Praxis</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>In vielen praxisnahen Situationen gibt es bessere Methoden der Stichprobenerhebung, als die einfache zufällige Stichprobenziehung. Welche Methode man auch immer verwendet: Fehler, die nicht auf zufällige Schwankungen zurückzuführen sind, können einen extrem negativen Effekt auf das Ergebnis haben.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sampPractice_b1')\">1. Geschichtete Stichprobe</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Teilweise lassen sich bessere Schätzungen ermitteln, wenn die Zufallsstichproben innerhalb verschiedener Gruppen der Grundgesamtheit erhoben werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sampPractice2')\">2. Clusterstichprobe</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Sind die Versuchseinheiten in sogenannten Klumpen (englisch Clusters) angeordnet, ist es häufig günstiger die Klumpen komplett zu untersuchen. Die zufällige Auswahl bezieht sich dann darauf, welche Klumpen aus der Grundgesamtheit zufällig gewählt werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sampPractice3')\">3. Zweistufige Stichprobe</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ist die zu untersuchende Grundgesamtheit über ein weites Gebiet verteilt, dann kann es Sinn machen nur Stichproben in einigen Teilregionen zu erheben.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sampPractice4')\">4. Stichprobenfehler und systematische Fehler</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Stichproben werden normalerweise erhoben, um bestimmte Charakteristiken einer Grundgesamtheit zu schätzen. Die Variation, die aus der Stichprobenziehung resultiert wird Stichprobenfehler genannt. Schwierigkeiten in der praktischen Umsetzung der Stichprobenerhebung können zu verzerrten Schätzungen führen (Bias).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sampPractice_b5')\">5. Erfassungsfehler und Antwortausfall</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bestimmte Arten von Fehlern bewirken, dass bestimmte Versuchobjekte nicht in die Stichprobe gelangen können.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sampPractice_b6')\">6. Interviewer- und Ger&auml;tefehler</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Interviewer-Fehler und Messfehler können zu falschen Messungen führen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sampPractice7')\">7. Survey design issues</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Zum Design von Fragebögen gibt es eine Vielzahl von Mechanismen und Methoden. Alle haben jeweils ganz bestimmte Vor- und Nachteile.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
