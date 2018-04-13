var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Estimation des proportions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn1')\">1. General framework for estimation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La méthodologie pour décrire la précision d'un échantillon signifie en utilisant les erreurs standard et les intervalles de confiance peut également être utilisé pour d'autres estimations des paramètres.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn2')\">2. Estimating a proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une proportion de l'échantillon estime la proportion de la population correspondante, π. Il est susceptible d'être une erreur de cette estimation et ces erreurs ont une distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn3')\">3. Error distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les erreurs d'estimation ont un type de distribution binomiale qui est mis à l'échelle pour avoir une moyenne de zéro. Son écart type est l'erreur-type de la proportion.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn4')\">4. Normal approximation to error distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si la taille de l'échantillon est suffisamment élevée, la distribution d'erreur est à peu près normale. Cette page donne quelques exemples pour lesquels la distribution d'erreur se trouve.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn5')\">5. Confidence interval for proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un intervalle de confiance de 95% pour une proportion de la population est la proportion d'échantillon ± deux fois son écart-type. Son niveau de confiance est seulement d'environ 95% et les lignes directrices sont données à la taille minimale de l'échantillon.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn6')\">6. Properties of 95% CI for proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'> Si les échantillons sont prélevés à plusieurs reprises, environ 95% d'entre eux résultent en des intervalles de confiance à 95% qui incluent la proportion de la population. Les directives sont données pour la taille minimale de l'échantillon de rendre le niveau de confiance de près de 95%.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn7')\">7. Confidence interval examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les intervalles de confiance à 95% pour les proportions sont détectés et interprétés de plusieurs ensembles de données.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
