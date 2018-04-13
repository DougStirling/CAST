var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Transformationen</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transform1')\">1. Linear transformations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Lineare Transformationen der Daten beeinflussen die Skala der Achsen in grafischen Darstellungen. Darüber hinaus ändern sie nicht die Form einer Verteilung.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transform2')\">2. Log transformations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Nichtlineare Transformationen ändern die Form einer Verteilung schwerwiegender. Eine logarithmische Transformation kann bei der Suche nach Mustern in schiefen Verteilungen hilfreich sein.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transform3')\">3. Wann benutzt man die log-Transformation?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Logarithmische Transformationen sind sinnvoll, wenn die Daten mehrere Potenzstufen abdecken.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transform4')\">4. Potenz-Transformationen</a>&nbsp;&nbsp;&nbsp;<span class='note'>(fortgeschritten)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Potenz-transformationen sind nichtlineare Transformationen, die flexibel bei der Datenexploration einsetzbar sind.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transform5')\">5. Effekt von Transformationen auf die Darstellung</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Potenz-transformationen haben einen offensichtlichen Effekt auf die Schiefe eines Datensatzes.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
