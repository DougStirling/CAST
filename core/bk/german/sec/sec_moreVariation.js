var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Mehr über Variation (optional)</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation1')\">1. Effekte von Ausreissern</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Enthält ein Datensatz Ausreisser, so kann der Mittelwert und vor allem die Standardabweichung dadurch stark beeinflusst werden. Die Analyse von Dotplots oder Boxplots bietet sich in diesen Fällen an. Die 70-95-100-Regel kann aufgrund der Ausreisser leicht in die Irre führen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation2')\">2. Standardabweichung gruppierter Daten</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Standardabweichung innerhalb der Gruppen ist normalerweise kleiner als die Standardabweichung des gesamten Datensatzes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation3')\">3. Erklärte Variation und Vorhersagen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Teilt man einen Datensatz in Gruppen auf, so sind genauere Vorhersagen möglich, sofern die Gruppenzugehörigkeit der Werte bekannt ist. Die Gruppen können einen Teil der Gesamtvariation erklären.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation4')\">4. Varianz und Freiheitsgrad</a>&nbsp;&nbsp;&nbsp;<span class='note'>(fortgeschritten)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Das Quadrat der Standardabweichung heisst Varianz; dieser Wert ist schwerer zu begreifen, die Varianz bildet aber die Basis vieler wichtiger statistischer Methoden. Der Freiheitsgrad entspricht der Anzahl der Informationsteile, die zur Standardabweichung (bzw. Varianz) beitragen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation5')\">5. Mittlerer quadratischer Fehler</a>&nbsp;&nbsp;&nbsp;<span class='note'>(fortgeschritten)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Der Fehler bezeichnet die Differenz zwischen einem Wert und seinem Zielwert.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation6')\">6. Graphische Interpretation der Standardabweichung</a>&nbsp;&nbsp;&nbsp;<span class='note'>(fortgeschritten)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Standardabweichung ist dem Fehler sehr ähnlich. Bei der Standardabweichung geht es aber um die Differenz zum Mittelwert.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
