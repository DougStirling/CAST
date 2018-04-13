var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Variation et les groupes</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation2')\">1. L'écart type des données groupées</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans les ensembles de données qui se composent de différents groupes, l'écart-type global est souvent beaucoup plus élevé que les écarts-types au sein des groupes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation3')\">2. Variation expliquée et les prédictions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Variation globale est en partie expliquée par les différences entre les groupes, mais certaines variations (au sein des groupes) demeure inexpliquée. Parce que une certaine variation est expliquée par les groupes (et variation inexpliquée est réduite), le regroupement vous permet de prédire une nouvelle valeur avec plus de précision.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup_a4')\">3. Variation between and within groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La taille relative de variation intra- et inter-groupe indiquant si vraiment les groupes diffèrent.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup5')\">4. Sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La variabilité au sein des groupes et entre les groupes sont décrits par des sommes de carrés.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup_a6')\">5. Coefficient of determination</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le coefficient de détermination (R²) est le rapport entre les groupes et les sommes totales des carrés. Il est de la proportion de variation qui peut être expliqué par des différences entre les groupes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup_a7')\">6. Analysis of variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les sommes totales et au sein des groupes moyennes de carrés sont étroitement liées à l'écart-type global et les écarts-types au sein des groupes. Ils sont souvent disposés dans un tableau d'analyse de variance.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
