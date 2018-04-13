var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Estimation des paramètres</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnEst1')\">1. Point estimates of slope and intercept</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A droite des moindres carrés fournit des estimations de la pente et l'interception du modèle linéaire. Ces estimations sont des valeurs aléatoires - elles varient d'un échantillon à.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnEst2')\">2. Estimating the error standard devn</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'> Le troisième paramètre du modèle linéaire normale est la norme erreur type. Il peut être estimée en utilisant les résidus de la droite des moindres carrés.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnEst3')\">3. Distn of least squares estimates</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'estimation des moindres carrés de la pente du modèle a une distribution normale qui est centrée sur la valeur réelle.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnEst4')\">4. Standard error of least squares slope</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La distribution de la pente moins carrés peut être estimée à partir d'un ensemble de données unique.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnEst5')\">5. 95% confidence interval for slope</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un intervalle de confiance pour la pente de la modèle peut être obtenu à partir de son estimation des moindres carrés et son erreur standard.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnEst6')\">6. Properties of confidence interval</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les intervalles de confiance pour la pente de la modèle ont les mêmes propriétés que les intervalles de confiance pour les moyens ou proportion des populations.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnEst7')\">7. Influences on accuracy</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avancé)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'> L'erreur standard de la carrés pente moins dépend de la norme réponse écart autour de la ligne de modèle, la taille de l'échantillon et l'écart type des données X. Collecte avec une grande propagation des valeurs x donne des estimations plus précises, mais il ya des inconvénients.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
