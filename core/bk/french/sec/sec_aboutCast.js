var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>A propos de CAST</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p><span style='color:red;'>(Cliquez sur un titre pour afficher la page.)</span></p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('aboutCast1')\">1. Qu'est-ce que CAST?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>CAST est constitué d'une collection de manuels électroniques (e-books). Les principales caractéristiques de CAST sont brièvement décrites.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('aboutCast2')\">2. Structure et navigation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>CAST est structuré en chapitres, sections et pages d'une manière similaire à un manuel classique.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('aboutCast3')\">3. Droit d'auteur et de licence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les CAST e-books publics sont fournis sous réserve d'une licence Creative Commons qui permet la libre copie et l'utilisation. e-books personnalisés peuvent être créés, mais le droit d'auteur dans CAST est conservé par l'auteur.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('aboutCast4')\">4. Remerciements</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>De nombreuses personnes et organisations ont contribué à CAST avec des idées, le soutien et le financement.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('aboutCast5')\">5. A propos de l'auteur</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Cette page donne un peu de renseignements personnels sur l'auteur.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
