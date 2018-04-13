var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Zusammenhang &amp; kausale Beziehungen</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('causal_b1')\">1. Das Interesse an Zusammenhängen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bei den meisten Datensätzen sind wir an den Beziehungen zwischen Variablen interessiert. Die Interpretation dieser Zusammenhänge erfordert jedoch einige Vorsicht.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('causal2')\">2. Kausale und nonkausale Zusammenhänge</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ist die Beziehung zwischen X und Y kausal, dann ist es möglich den Effekt vorherzusagen, den eine Veränderung von X bewirkt.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('causal_b3')\">3. Kausale Zusammenhänge feststellen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Kausalität kann nur daraus geschlossen werden, wie die Datenerhoben wurden. Daten selbst enthalten keine Information über Kausalität.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('causal_b4')\">4. Beobachtungen und experimentelle Daten</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In einer beobachtenden Studie, werden Werte zu Individuen passiv erhoben. Experimente sind dadurch definiert, dass der Experimentierende einen oder mehrere Variablen kontrolliert.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('causal5')\">5. Daten sammeln und Kausalität</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Kausale Beziehungen können nur aus gut geplanten Experimenten erschlossen werden.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
