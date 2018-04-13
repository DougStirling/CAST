var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Wahrscheinlichkeit und Dichte</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity1')\">1. Finite populations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Wählt man zufällig einen Wert aus einer Grundgesamtheit von N verschiedenen Werten, dann ist die Wahrscheinlichkeit einen bestimmten Wert zu ziehen gleich 1/N. Die Wahrscheinlichkeit einen Wert innerhalb eines bestimmten Intervalls zu ziehen, entspricht dem Anteil der Werte innerhalb des Intervalls in Bezug auf die gesamte Grundgesamtheit.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity2')\">2. Probabilities with infinite populations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Wahrscheinlichkeit eines Wertes entspricht der Proportion dieser Werte in der Grundgesamtheit. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity3')\">3. Balkendiagramm diskreter Wahrscheinlichkeiten</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Endliche kategorielle oder diskrete Grundgesamtheiten können durch Balkendiagramme der Wahrscheinlichkeiten dargestellt werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity4')\">4. Dichtefunktionen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Unendliche stetige Grundgesamtheiten werden mit einer Art von Histogramm namens Wahrscheinlichkeitsdichtefunktion beschrieben.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity5')\">5. Normalverteilungen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Normalverteilungen sind unendliche, stetige Grundgesamtheiten. Eine Normalverteilung ist symmetrisch und ihre beiden Parameter µ und σ können jede beliebige Lage und Streuung beschreiben.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity6')\">6. Die Fl&auml;che unter der Dichtefunktion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Wird ein Wert aus einer unendlichen, stetigen Grundgesamtheit als Stichprobe gezogen, ist die Wahrscheinlichkeit, dass dieser Wert zwischen a und b liegt, gleich der Fläche zwischen a und b unterhalb der Dichtefunktion.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity7')\">7. Eigenschaften von Wahrscheinlichkeiten</a>&nbsp;&nbsp;&nbsp;<span class='note'>(optional)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Hier werden einige Regeln erläutert, denen Wahrscheinlichkeiten gehorchen.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
