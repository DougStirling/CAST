var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Moindres carr&eacute;s</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs_b1')\">1. Predicting Y from X</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une ligne ou une courbe est utile pour pr&eacute;dire la valeur de Y d'une valeur connue de X.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs2')\">2. Les modèles linéaires</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une ligne droite peut souvent &ecirc;tre utilis&eacute;e pour pr&eacute;dire une variable &agrave; partir d'une autre.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs3')\">3. Valeurs ajustées et des résidus</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La somme des carr&eacute;s des r&eacute;sidus d&eacute;crit la pr&eacute;cision des pr&eacute;dictions &agrave; partir d'une ligne. La m&eacute;thode des moindres carr&eacute;s des positions de la ligne de minimiser la somme des carr&eacute;s des r&eacute;sidus.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs4')\">4. Moindres carrés</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un mod&egrave;le lin&eacute;aire n'est pas appropri&eacute; si il ya soit la courbure ou aberrantes dans un nuage de points de donn&eacute;es. Les valeurs aberrantes devraient &ecirc;tre soigneusement examin&eacute;es.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs5')\">5. La courbure et les valeurs aberrantes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les valeurs aberrantes et la courbure de la relation sont souvent affich&eacute;es plus clairement dans une parcelle de r&eacute;sidus.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs6')\">6. Parcelles résiduelles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Moindres carr&eacute;s ne traite pas les Y et X sym&eacute;trique. La meilleure ligne pour pr&eacute;dire Y &agrave; partir de X est diff&eacute;rent de la meilleure ligne pour pr&eacute;dire X de Y.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs7')\">7. Prédire X Y et la prédiction</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avanc&eacute;)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Least squares does not treat Y and X symmetrically. The best line for predicting Y from X is different from the best line for predicting X from Y.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
