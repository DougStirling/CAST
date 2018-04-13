var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Mínimos cuadrados</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs_b1')\">1. Predicting Y from X</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Una línea o una curva es útil para predecir el valor de Y de un valor conocido del X.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs2')\">2. Modelos lineares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Una línea recta se puede utilizar a menudo para predecir una variable de otra.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs3')\">3. Valores y residuales cabidos</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La diferencia entre el valor real de Y y el valor predijo por una línea se llama una residual. Las pequeñas residuales son claramente deseables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs4')\">4. Mínimos cuadrados</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La suma de residuales ajustadas describe la exactitud de predicciones de una línea. El método de m3inimos cuadr3aticos coloca la línea para reducir al mínimo la suma de residuales ajustadas.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs5')\">5. Curvatura y afloramientos</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un modelo linear no es apropiado si hay curvatura o afloramientos en un scatterplot de los datos. Los afloramientos deben ser examinados cuidadosamente.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs6')\">6. Diagramas residuales</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Los afloramientos y la curvatura en la relación se exhiben a menudo más claramente en un diagrama de residuales.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs7')\">7. Y que predice y X que predice</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avanzado)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Los mínimos cuadraticos no tratan Y y X simétricamente. La mejor línea para predecir Y de X esi diferente de la mejor línea para predecir X del Y.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
