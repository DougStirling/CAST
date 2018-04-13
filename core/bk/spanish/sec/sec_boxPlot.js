var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Punto medio, cuartilas y diagramas de la caja</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Los diagramas de la caja resumen altamente la distribución de valores en un conjunto de datos. Son útiles para comparar diversas hornadas de valores.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot1')\">1. La necesidad de resumir</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Los diagramas de la caja resumen altamente la distribución de valores en un conjunto de datos. Son útiles para comparar diversas hornadas de valores.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot2')\">2. Punto medio, cuartilas y diagrama de la caja</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>El punto medio y las cuartilas partieron una hornada de valores en cuatro sistemas equal-sized de valores. Un diagrama de la caja es una exhibición gráfica del punto medio, de las cuartilas y de los extremos.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot3')\">3. La interpretación de una caja traza forma</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un diagrama de la caja demuestra claramente el centro, la extensión y la oblicuidad de un conjunto de datos. Parte el histograma correspondiente en 4 áreas aproximadamente iguales.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot4')\">4. Exhibición de afloramientos</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>El diagrama básico de la caja se modifica a menudo de exhibir afloramientos como cruces separadas.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot5')\">5. Racimos</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Los diagramas de la caja no pueden demostrar racimos, así que se deben nunca utilizar para los datos con los racimos.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot6')\">6. Comparación de grupos</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Los diagramas de la caja son particularmente eficaces para exhibir diferencias entre varios grupos de valores.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot7')\">7. Peligros de la interpretación recargada</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Los diagramas de la caja son relativamente estables, y contienen menos “ruido” que otras exhibiciones. Pueden describir sucinto diferencias entre incluso los pequeños grupos.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
