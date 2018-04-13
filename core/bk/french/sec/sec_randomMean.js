var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Distribution des moyenne de l'échantillon</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean1')\">1. Parameters and statistics</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une valeur de synthèse décrivant une population est appelée un paramètre et la valeur correspondante dans un échantillon est appelé une statistique. Les statistiques de l'échantillon varie d'un échantillon à.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean2')\">2. Variability of sample mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une moyenne de l'échantillon a une distribution qui est centrée autour de la moyenne de la population, mais a petit écart de la population.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean3')\">3. Standard devn of sample mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La propagation de la moyenne de l'échantillon diminue à mesure que la taille de l'échantillon augmente. Une formule est donnée pour l'écart type de la moyenne de l'échantillon en fonction de la taille de l'échantillon et de type de la population.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean4')\">4. Means from normal populations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Moyenne de l'échantillon de populations normales ont aussi des distributions normales.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean5')\">5. Large-sample normality of means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La forme de la distribution de la moyenne de l'échantillon est généralement proche de la normale, même si la distribution de la population est de biais ou multimodal. Plus la taille de l'échantillon, plus la distribution normale.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean6')\">6. Distribution of mean from a sample</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Il est possible d'estimer la distribution d'une moyenne d'échantillon à partir d'un seul échantillon.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean7')\">7. Requirement of independence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si les valeurs des échantillons sont corrélés positivement, l'écart type de la moyenne sera sous-estimée.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean8')\">8. Sampling from finite populations</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avancé)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si un échantillon est sélectionné au hasard sans remplacement, la formule de l'écart type de la moyenne d'échantillon doit être modifié.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
