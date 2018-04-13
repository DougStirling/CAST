var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Médiane, quartiles et boîtes à moustaches</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Box parcelles très résument la distribution des valeurs dans un ensemble de données. Ils sont utiles pour comparer différents lots de valeurs.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot1')\">1. La nécessité de résumer</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dot parcelles, la tige et les parcelles des feuilles et des histogrammes contiennent des informations détaillées qui est distrait lorsque deux ou plusieurs ensembles de données sont comparées.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot2')\">2. Médian, quartiles et boîte à moustaches</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La médiane et les quartiles répartissent un lot de valeurs en quatre ensembles de taille égale de valeurs. Une boîte à moustaches est un affichage graphique de la médiane, quartiles et extrêmes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot3')\">3. Interpréter une forme de boîte parcelles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une boîte à moustaches montre clairement le centre, la propagation et l'asymétrie d'un ensemble de données. Il divise l'histogramme correspondant en 4 zones approximativement égales.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot4')\">4. Afficher les valeurs aberrantes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'intrigue de la boîte de base est souvent modifié pour afficher les valeurs aberrantes que des croix séparés.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot5')\">5. Clusters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Box parcelles ne peuvent pas montrer des grappes, de sorte ne doivent jamais être utilisé pour les données avec des clusters.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot6')\">6. Comparaison des groupes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Box parcelles sont particulièrement efficaces pour l'affichage des différences entre plusieurs groupes de valeurs.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
