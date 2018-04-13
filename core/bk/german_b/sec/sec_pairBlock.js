var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Paarbildung und Blöcke</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('pairBlock1')\">1. &Auml;hnliche Versuchseinheiten</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Der Effekt eines Faktors wird in einem Experiment am genauesten festgestellt, wenn alle Versuchseinheiten sich sehr ähnlich sind. Je mehr Variabilität in den Versuchseinheiten vorliegt, desto weniger akkurat sind die Schätzungen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('pairBlock2')\">2. Experimente mit Paarbildung</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Hat ein Faktor genau zwei Stufen, ist es manchmal möglich die Versuchseinheiten in Paaren zu gruppieren, die sich besonders ähnlich sind. Verteilt man die beiden Faktorstufen jeweils auf die Paare, dann kann der Effekt genauer geschätzt werden, als in einem vollkommen randomisierten Experiment.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('pairBlock3')\">3. Randomisation in Experimenten mit Paarbildung</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Es ist sehr wichtig, dass die beiden Faktorstufen zufällig auf die beiden Versuchseinheiten eines Paares verteilt werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('pairBlock4')\">4. Einheitliche Gruppen mit 3 oder mehr Versuchseinheiten</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Grundidee passende Paare aus den Versuchseinheiten zu bilden, kann verallgemeinert werden indem Gruppen mit 3 oder mehr ähnlichen Versuchseinheiten gebildet werden, falls der Faktor 3 oder mehr Faktorstufen aufweist. Die Faktorstufen werden zufällig innerhalb der einheitlichen Gruppen verteilt. Dadurch werden genauere Schätzungen des Effekts, als in vollkommen randomisierten Experimenten möglich.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('pairBlock_b5')\">5. Randomisierte Blockexperimente</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In vielen Experimenten erscheinen die Versuchseinheiten natürlicherweise in Gruppen ähnlicher Versuchseinheiten (sogenannter Blocks). Die Blockgröße ist dabei ein Vielfaches der Anzahl an Faktorstufen. Ein randomisiertes Blockexperiment weist jeweils der gleichen Anzahl an Versuchseinheiten innerhalb eines Blocks zufällig eine Faktorstufe zu.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
