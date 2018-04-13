var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Corrélation</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Cette section décrit un résumé numérique de la force de la relation entre deux variables, X et Y.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation1')\">1. Les unités de X et Y</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une description numérique de la force d'une relation ne doit pas être affectée par mise à l'échelle variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation2')\">2. Variables sans unités (z-scores)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La normalisation d'une variable donne z-scores qui ne dépendent pas sur les unités de la variable d'origine. (Le coefficient de corrélation sera définie en termes de z-scores pour X et Y.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation3')\">3. Le coefficient de corrélation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le coefficient de corrélation résume la force de la relation entre X et Y. Il est une croix lorsque les nuages ​​de points sont sur la ligne droite avec une pente positive, -1 lorsque sur une ligne avec une pente négative et zéro lorsque X et Y ne sont pas liés.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation4')\">4. Les diagrammes de dispersion et de la valeur de r</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Vous devriez être en mesure d'estimer la valeur de r de regarder un nuage de points et d'imaginer une dispersion des croix correspondant à une valeur de r.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation5')\">5. Relations non linéaires</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le coefficient de corrélation est seulement une bonne mesure de la force d'une relation si les points dans un nuage de points sont dispersés autour d'une ligne droite, pas une courbe.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation6')\">6. R n'a pas raconter toute l'histoire</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le coefficient de corrélation ne peut pas identifier la courbure, les valeurs aberrantes ou des clusters et peut être trompeuse si ces caractéristiques sont présents. Un diagramme de dispersion doit toujours être examiné aussi.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
