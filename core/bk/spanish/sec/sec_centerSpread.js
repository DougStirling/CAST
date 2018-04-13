var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Descripción del centro y de la extensión</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread1')\">1. Centro y extensión</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>El centro de una distribución es un “valor típico”. La extensión describe hasta dónde los valores son del centro.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread2')\">2. Punto medio, gama e IQR</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>El punto medio es un resumen del centro de una distribución. La gama y la gama intercuartil ambas describen la extensión.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread3')\">3. Resúmenes del centro</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>El punto medio y el medio son medidas alternativas del centro de una distribución.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread4')\">4. Características del punto medio y del medio</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Cuando un conjunto de datos no es simétrico, el malo y el punto medio pueden diferenciar substancialmente.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread5')\">5. Desviación estándar</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La desviación estándar es el resumen numérico más de uso general de la extensión de valores en un conjunto de datos.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread6')\">6. Reglas de pulgar para la desviación estándar</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La regla empírica 70-95-100 es útil para entender el valor numérico de la desviación estándar.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread7')\">7. Comprensión de medios y st devns</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Es posible conjeturar áspero la desviación mala y estándar de un histograma y bosquejar áspero un histograma simétrico que empareja cualquier desviación mala y estándar dada.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread8')\">8. Advertencias sobre devn malo y estándar</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La desviación mala y estándar no puede dar ninguna indicación de la existencia de afloramientos, de la oblicuidad o de racimos. Un diagrama o un histograma del punto debe ser examinado antes de divulgar estos resúmenes numéricos.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
