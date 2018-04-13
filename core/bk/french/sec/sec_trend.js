var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Tendance à long terme</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('trend1')\">1. Tendance linéaire</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Beaucoup de séries de temps régulièrement augmenter ou diminuer au fil du temps et un modèle linéaire peut décrire la tendance. Ce type de modèle peut être équipé par les moindres carrés.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('trend2')\">2. Tendance quadratique</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si la tendance est non linéaire, un modèle quadratique pourrait décrire la tendance mieux et peut également être équipé par les moindres carrés.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('trend3')\">3. Prévision</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les modèles linéaires et quadratiques peuvent être utilisés pour prévoir les valeurs futures.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('trend4')\">4. Tendance polynomiale</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si un modèle quadratique ne décrit pas convenablement une tendance non linéaire, il est possible d'ajouter des puissances supérieures de temps pour le modèle. Ces modèles polynomiaux peuvent donner une image lisse de la tendance passé, mais ne devraient pas être utilisés pour prévoir l'avenir.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('trend5')\">5. Élimination de la tendance d'une série chronologique</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Modèles polynomiaux ne sont utiles pour décrire une tendance douce à long terme dans une série chronologique. Une parcelle de séries chronologiques de résidus des moindres carrés (valeurs réelles de tendance négatif) met en évidence les mouvements à court terme de la série.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
