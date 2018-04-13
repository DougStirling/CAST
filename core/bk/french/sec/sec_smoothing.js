var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Lissage</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('smoothing1')\">1. Moyennes mobiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les moyennes mobiles sont un moyen simple pour lisser les irrégularités dans une série chronologique.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('smoothing2')\">2. En savoir plus sur les moyennes mobiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Quand un nombre pair de valeurs est utilisé pour les moyennes mobiles, les valeurs lissées sont parfois à mi-chemin entre celles des données brutes. La méthode peut être modifiée pour donner des valeurs lissées au temps des valeurs d'origine.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('smoothing3')\">3. Lissage robuste</a>&nbsp;&nbsp;&nbsp;<span class='note'>(facultatif)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Utilisation médianes exécutant place de moyens évite l'effet des valeurs aberrantes, mais le résultat est souvent «intensifié». L'utilisation des médianes de course, suivie par la course, est un bon compromis.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('smoothing4')\">4. Lissage exponentiel</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Lissage exponentiel remplace chaque valeur avec une moyenne pondérée de celui-ci et les valeurs précédentes. A la différence des moyennes mobiles, il peut être utilisé jusqu'à la fin de la série.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('smoothing5')\">5. Lissage Lowess des séries chronologiques</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avancé)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Procédé de lissage alternative qui fournit des valeurs lissées pour les deux extrémités d'une série temporelle consiste à obtenir la valeur lissée à partir d'une ligne des moindres carrés à des valeurs équipée adjacentes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('smoothing6')\">6. Lissage Lowess de diagrammes de dispersion</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avancé)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une méthode similaire peut être utilisé pour dessiner une courbe «lisse» pour représenter une relation non linéaire sur un nuage.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
