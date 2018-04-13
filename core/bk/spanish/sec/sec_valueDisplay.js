var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Exhibición gráfica de valores</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>El punto traza y los diagramas del vástago y de la hoja demuestran a cada uno valor en un conjunto de datos gráficamente.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay1')\">1. Analizar la variación</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La información significativa se puede obtener de la variación en los valores de una variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay2')\">2. Diagrama básico del punto</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un diagrama del punto exhibe cada valor como cruz a lo largo de un eje numérico.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay3')\">3. Diagrama inquieto del punto</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>El estar inquieto es una modificación al diagrama básico del punto que evita algunos problemas asociados a las cruces traslapadas.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay4')\">4. Diagramas apilados del punto</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>El amontonamiento de las cruces es una alternativa a estar inquieto ese las gamas de los puntos culminantes de alta o baja densidad.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay5')\">5. Diagramas del vástago y de la hoja</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Los diagramas del vástago y de la hoja son similares a los diagramas apilados del punto, pero un dígito se utiliza en vez de una cruz para conservar la información adicional.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay6')\">6. Partir los vástagos</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Para aumentar la flexibilidad de la exhibición, cada vástago se puede repetir 2 o 5 veces, aumentando el número de clases en el diagrama básico del vástago y de la hoja en un factor de 2 o 5.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay7')\">7. Diagramas del vástago y de la hoja del dibujo</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Para el análisis de datos, los diagramas del vástago y de la hoja son raramente más informativos que diagramas apilados del punto, pero son fáciles de dibujar a mano.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
