var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Transformaciones</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transform_b1')\">1. Linear transformations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Las transformaciones lineares de datos afectan a la escala en el eje de exhibiciones gráficas, pero no cambian de otra manera la forma de la distribución de valores.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transform_b2')\">2. Log transformations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Las transformaciones no lineares cambian la forma de la distribución de valores más profundo. Una transformación logarítmica puede ayudar a detectar patrones en conjuntos de datos muy oblicuos.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transform3')\">3. ¿Cuándo utilizar logarítmico transforme?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Las transformaciones logarítmicas son las más útiles para los datos de la “cantidad” que cubren varias órdenes de la magnitud.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transform4')\">4. Transformación de poderes</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avanzado)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Las transformaciones de la energía son una familia más flexible de transformaciones no lineares que sean útiles en la exploración de los datos.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transform5')\">5. Efecto de transformaciones sobre exhibiciones</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>El efecto de las transformaciones de la energía sobre la oblicuidad de datos es evidente en una amplia gama de exhibiciones gráficas.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
