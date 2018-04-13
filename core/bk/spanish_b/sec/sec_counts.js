var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Datos discretos (cuentas)</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('counts_b1')\">1. Discrete and continuous data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Los conjuntos de datos discretos contienen cuentas mientras que los conjuntos de datos continuos podrían potencialmente contener cualquier valor dentro de un intervalo. Los diagramas apilados del punto son buenas exhibiciones de los pequeños conjuntos de datos discretos que contienen pequeñas cuentas.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('counts_b2')\">2. Histograms for counts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Cuando la gama de cuentas posibles es moderada o grande, un histograma es una exhibición eficaz de la distribución. La anchura de la clase debe ser un número entero y los límites de la clase deben terminar en “.5”.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('counts3')\">3. Cartas de barra</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Cuando la gama de cuentas posibles es pequeña, una carta de barra es una mejor representación de los datos que un histograma.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('counts_b4')\">4. Mean and st devn</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avanzado)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Una tabla de la frecuencia es de uso frecuente resumir datos discretos. La desviación mala y estándar se puede evaluar fácilmente de la tabla de la frecuencia.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
