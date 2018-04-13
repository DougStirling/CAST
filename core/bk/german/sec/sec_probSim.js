var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Simulation (optional)</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probSim1')\">1. Wahrscheinlichkeitsmodelle und Simulationen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Wahrscheinlichkeiten können genutzt werden um komplexe Phänomene zu modellieren. Eine Modellsimulation verwendet die Wahrscheinlichkeiten des Modells, um ein mögliches Fallbeispiel zu generieren. Wiederholt man diese Situation ergibt sich unter Umständen ein klareres Bild über das Verhalten des Systems.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probSim2')\">2. Gewinnt das beste Team?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Eine Simulation zeigt hier, dass das beste Team, mit den höchsten Gewinnchancen für die jeweiligen Spiele, oft nicht die Meisterschaft gewinnt.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probSim3')\">3. Spielqualit&auml;t in der Fussballliga</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Eine Simulation einer Fussballliga zeigt hier, dass Teams mit gleicher Stärke nicht die gleiche Streuung der Resultate aufweisen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probSim4')\">4. Assessing unusual features in data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Variabilität 'normaler' Grundgesamtheiten, kann benutzt werden um Eigenschaften eines einzelnen Datensatzes, wie Ausreisser, Cluster oder Schiefe besser zu bewerten.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probSim5')\">5. Zufallswerte</a>&nbsp;&nbsp;&nbsp;<span class='note'>(fortgeschritten)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Simulationen basieren auf zufällig erzeugten Werten. Meist werden sie durch Zufallszahlen zwischen 0 und 1 erzeugt, von denen jede Ausprägung gleich wahrscheinlich ist.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probSim6')\">6. Kategorielle Werte erzeugen</a>&nbsp;&nbsp;&nbsp;<span class='note'>(fortgeschritten)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Eine kategorieller Zufallswert kann sehr leicht mit Zufallszahlen zwischen 0 und 1 erzeugt werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probSim7')\">7. Numerische Werte erzeugen</a>&nbsp;&nbsp;&nbsp;<span class='note'>(fortgeschritten)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Zufallswerte zu erzeugen, die einer bestimmten Verteilung folgen ist deutlich schwerer, eine solche Methode wird hier dargestellt.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
