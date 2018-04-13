var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Histogramas y densidad</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Un histograma no exhibe por separado los valores individuales. En conjuntos de datos grandes exhibe las características principales de la distribución mejor que diagramas del punto o diagramas del vástago y de la hoja.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density1')\">1. Densidad de valores</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Las alturas de los apilados de cruces en un diagrama del punto describen la densidad de valores.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density2')\">2. Histograma con anchuras iguales de la clase</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>En un histograma simple, la altura del rectángulo sobre cada clase en el eje iguala el número de valores en la clase — la frecuencia de la clase.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density3')\">3. Opción de clases</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La anchura y el empezar-punto de la clase se deben elegir para hacer el histograma tan liso como sea posible — ni demasiado blocky ni demasiado dentado.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density4')\">4. Histogramas de los pequeños conjuntos de datos</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La forma de un histograma puede ser muy dependiente en la opción de clases si el conjunto de datos es pequeño; guárdese de sobre-interpretar su forma. Los diagramas apilados del punto son una mejor exhibición de los pequeños conjuntos de datos.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density5')\">5. Frecuencia relativa y área</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>En un histograma, la proporción de la superficie total que está sobre cualquier clase iguala la frecuencia relativa de la clase.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density6')\">6. Comparar a grupos</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>El eje vertical debe ser frecuencia relativa, no frecuencia, al comparar a dos grupos con los histogramas. Las pirámides de población son de uso frecuente comparar distribuciones de edad.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density7')\">7. Histogramas con anchuras diversas de la clase</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si un histograma tiene anchuras diversas de la clase, el eje vertical debe ser “densidad”. La forma del histograma sería engañosa si la frecuencia o la frecuencia relativa fue utilizada para el eje vertical.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density8')\">8. Histogramas de comprensión</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La proporción de valores en cualesquiera clases iguala siempre la proporción del área total del histograma que está sobre las clases.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density9')\">9. Polígonos de la frecuencia</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Los polígonos de la frecuencia son estrechamente vinculados a los histogramas pero dan una exhibición menos “blocky” de la densidad. Diversos grupos pueden ser comparados más fácilmente con ellos.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density10')\">10. Estimaciones de la densidad del núcleo</a>&nbsp;&nbsp;&nbsp;<span class='note'>(opcional)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Densidad de la demostración de las estimaciones de la densidad del núcleo en una exhibición inmóvil del pulidor.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density11')\">11. Histogramas del dibujo a mano</a>&nbsp;&nbsp;&nbsp;<span class='note'>(opcional)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Los histogramas se basan en las tablas de la frecuencia. Los límites de la clase deben evitar valores de datos posibles.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
