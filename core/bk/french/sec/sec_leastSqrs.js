var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Moindres carrés</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs1')\">1. Prédire Y de X</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une ligne ou une courbe est utile pour prédire la valeur de Y à partir d'une valeur connue de X.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs2')\">2. Les modèles linéaires</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une ligne droite peut souvent être utilisée pour prédire une variable d'un autre.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs3')\">3. Valeurs ajustées et des résidus</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La différence entre la valeur réelle et la valeur de Y prédit par une ligne est appelée un résiduel. Les petits résidus sont clairement souhaitable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs4')\">4. Moindres carrés</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La somme des carrés des résidus décrit la précision des prédictions d'une ligne. La méthode des moindres carrés positionne la ligne afin de minimiser la somme des carrés des résidus.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs5')\">5. La courbure et les valeurs aberrantes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un modèle linéaire ne convient pas si il ya soit courbure ou aberrantes dans un diagramme de dispersion des données. Les valeurs aberrantes devraient être soigneusement examinées.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs6')\">6. Parcelles résiduelles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les valeurs aberrantes et la courbure de la relation sont souvent affichés plus clairement dans une parcelle de résidus.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs7')\">7. Prédire X Y et la prédiction</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avancé)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Moindres carrés ne traitent pas Y et X symétriquement. La meilleure ligne pour prédire Y de X est différente de la meilleure ligne pour prédire à partir de X Y.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
