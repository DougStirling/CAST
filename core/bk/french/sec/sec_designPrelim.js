var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Questions pratiques en matière de conception</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designPrelim1')\">1. Purpose</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Pourquoi est l'expérience menée et comment les résultats seront utilisés?</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designPrelim2')\">2. Experimental units and measurements</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans une expérience, quelles sont les unités expérimentales seront utilisés? Quelle variable réponse doit être enregistrée? Quelles sont les variables seront contrôlés?</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designPrelim3')\">3. Experiments with human subjects</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Autres questions pratiques sont impliqués lors de la conduite des expériences sur des sujets humains.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
