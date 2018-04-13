var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Langzeit-Trends</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('trend1')\">1. Lineare Trends</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Viele Zeitreihen steigen bzw. fallen stetig und können durch ein lineares Modell beschrieben werden. Dies lässt sich durch die Methode der kleinsten Quadrate bestimmen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('trend2')\">2. Quadratische Trends</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ist der Trend nicht linear, kann ein quadratisches Modell den Trend möglicherweise besser beschreiben, als ein einfaches lineares Modell.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('trend3')\">3. Vorhersagen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Zukünftige Werte können mit den Modellen vorhergesagt werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('trend4')\">4. Polynomiale Trends</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Beschreibt ein quadratisches Modell die nichtlinearen Trends nicht in adequater Weise, so sind auch Polynome höherer Ordnung möglich. Polynomiale Modelle sollten nicht für Vorhersagen verwendet werden, geben jedoch eine geglättete Anpassung an die beobachteten Werte.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('trend5')\">5. Trends aus Zeitreihen herausrechnen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Zur Beschreibung von Langzeittrends sind poynomiale Modelle hilfreich. Kurzzeittrends werden durch Darstellung der Residuen (beobachteter Wert minus Trend) anschaulich hervorgehoben.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
