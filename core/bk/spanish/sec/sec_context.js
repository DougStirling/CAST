var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Contexto</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p><span style='color:red;'>(Chasque encendido cualquier título para exhibir la página.)</span></p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('context1')\">1. Importancia del contexto</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>El foco de estadísticas es contestar a las preguntas que se expresan en la lengua de una cierta área de aplicación. Los métodos estadísticos para el análisis de datos son una pieza de la base de estadísticas, pero el contexto de los datos es el más importante.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('context2')\">2. Estadísticas</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>El análisis estadístico es un proceso que implica el identificar de las cuestiones del interés, de la colección de datos y del análisis y de producir un informe. En problemas de la vida real, los pasos de la colección de datos y del análisis se pueden repetir más de una vez.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('context3')\">3. El proceso estadístico</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>En muchos usos, el ciclo de la colección de datos y el análisis es una parte central de la búsqueda para la mejora a los sistemas y a los procesos.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
