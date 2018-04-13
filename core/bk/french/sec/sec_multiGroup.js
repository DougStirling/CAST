var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>En comparant plusieurs moyensmeans</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup1')\">1. Model with common standard deviation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Pour comparer les moyens de plusieurs groupes, un modèle de distributions normales dans tous les groupes est utilisé, mais tous les écarts-types de groupe doit être supposé être le même.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup2')\">2. Estimate of common standard deviation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les écarts-types de l'échantillon dans les groupes distincts peuvent être combinés pour donner une estimation globale de l'écart-type commun, σ.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup3')\">3. Inference about two groups</a>&nbsp;&nbsp;&nbsp;<span class='note'>(optional)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Intervalles de confiance et des tests d'hypothèses antérieures pour l'égalité des deux moyens de groupe peuvent être améliorées lorsque les écarts-types de groupe sont connus pour être les mêmes. Cependant ce raffinement est pas recommandé pour une utilisation générale.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup4')\">4. Assessing differences between groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La variabilité entre les moyennes de groupe et de la variabilité au sein des groupes doit être utilisé pour évaluer si les groupes diffèrent.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup5')\">5. Sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La variabilité au sein des groupes et entre les groupes sont décrits par des sommes de carrés.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup6')\">6. Coefficient of determination</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le coefficient de détermination (R²) est le rapport entre les groupes et les sommes totales des carrés. Il est de la proportion de variation qui peut être expliqué par des différences entre les groupes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup7')\">7. Test for differences between groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le F-ratio est une statistique de test qui est basé sur l'inter- et intra-groupes des sommes de carrés. Les tests p-valeur associées si tous les groupes ont la même moyenne.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup8')\">8. Examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le test F est appliqué à un petit nombre d'ensembles de données.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
