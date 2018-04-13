var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Parcelles dot</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Dot parcelles montrent chaque valeur dans un ensemble comme un croisement des données.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_b1')\">1. Analysing variation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'information utile peut être obtenue à partir de la variation des valeurs d'une variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_b2')\">2. Basic dot plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un tracé de points affiche chaque valeur comme une croix le long d'un axe numérique</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_m3')\">3. Jittered dot plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Jittering est une modification du tracé de points de base qui évite certains problèmes liés à la croix qui se chevauchent</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_m4')\">4. Stacked dot plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Empilement des croix est une alternative à sautillement qui met en valeur des gammes de haute ou basse densité.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
