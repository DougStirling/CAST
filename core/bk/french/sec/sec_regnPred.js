var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Prédire la réponse</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnPred1')\">1. Estimated response distn at X</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>De estimations des 3 paramètres du modèle linéaire, nous pouvons obtenir une distribution de réponse estimé à tout x-valeur.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnPred2')\">2. Variability of estimate at X</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'> La réponse prédite à tout X varie d'un échantillon à. La prédiction est plus variable à valeurs x loin de la moyenne des données de «formation».</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnPred3')\">3. Estimating the mean vs prediction</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une distinction est faite entre l'estimation de la réponse moyenne à X et à prédire la réponse d'un nouvel individu à X. Les erreurs sont plus grandes (en moyenne) au moment de prédire la réponse d'un nouvel individu.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnPred4')\">4. Confidence and prediction intervals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'> Un intervalle de confiance de 95% est utilisée pour estimer la réponse moyenne à X. Un intervalle de prédiction de 95% est similaire, mais donne une plage de valeurs possibles pour une nouvelle valeur de réponse. L'intervalle de prédiction est plus large que l'intervalle de confiance.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
