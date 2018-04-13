var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Prinzipien der Versuchsplanung</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designIntro_b1')\">1. Experimente und Behandlungen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Experimente werden durchgeführt, um den Effekt von kategoriellen oder numerischen Einflussvariablen auf eine Zielvariable zu untersuchen. Experimente sind dadurch gekennzeichnet, dass der Forscher die Werte einer Einflussvariable festlegen kann.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designIntro2')\">2. Variable experimentelle Einheiten</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bei vielen Experimenten sind die Versuchseinheiten nicht einheitlich. Die unterschiedlichen Eigenschaften dieser Versuchseinheiten können einen Einfluss auf die Zielvariable haben.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designIntro3')\">3. Schlecht designte Experimente</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Werden die Behandlungen schlecht auf die Versuchseinheiten verteilt, kann das Experiment ihren Effekt über- oder unterschätzen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designIntro4')\">4. Störungen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Sind die Versuchseinheiten, die eine bestimmte Behandlung erhalten, auch in anderer Weise von den anderen Versucheinheiten verschieden, dann lässt sich nicht sagen ob die Behandlung oder andere Unterschiede für einen Effekt verantwortlich sind.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designIntro_b5')\">5. Randomisation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die zufällige Verteilung der Behandlungen auf die Versuchseinheiten verhindert systematische Über- oder Unterschätzung des Behandlungseffekts.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designIntro6')\">6. Replikation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Wird jede Behandlung an mehr als eine Versuchseinheit vergeben, dann kann die Schwankung zwischen den Versuchseinheiten geschätzt werden. Dadurch erhält man die Information, ob die Unterschiede zwischen den Behandlungen mehr als nur zufällig bedingt sein könnten.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designIntro7')\">7. Blockbildung</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Gruppiert man ähnliche Versuchseinheiten zu sogenannten Blocks und verteilt die Behandlungen zufällig inerhalb der Blocks, kann der Effekt der Behandlung genauer geschätzt werden.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
