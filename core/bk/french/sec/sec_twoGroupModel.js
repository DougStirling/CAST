var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Modèles pour deux groupes</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>De nombreux ensembles de données impliquent mesures numériques provenant d'individus qui sont classés en deux groupes. Les modèles sont décrits par les données avec cette structure.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupModel1')\">1. Interest in underlying population</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Comme pour les données mono-groupe, les populations sous-jacentes des ensembles de données à deux groupes sont généralement plus d'intérêt que les exemples de données spécifiques.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupModel2')\">2. Model for two groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Des ensembles de données de deux groupes sont souvent modélisés comme des échantillons aléatoires distincts de deux populations normales.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupModel3')\">3. Parameters of the normal model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'> Le modèle normal a quatre paramètres - les moyens et les écarts-types dans les deux groupes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupModel4')\">4. Parameter estimates</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les paramètres du modèle normal peuvent être estimés par les moyens d'échantillonnage et les écarts-types des deux groupes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupModel5')\">5. Difference between means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La différence entre le moyen de la population est d'un intérêt particulier. La différence entre les moyennes de l'échantillon fournit une estimation. Il varie d'un échantillon à et a une distribution.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
