var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Estructuras de datos estándar</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p><span style='color:red;'>(Chasque encendido cualquier título para exhibir la página.)</span></p> 	<p>La misma caja de herramientas de métodos estadísticos se puede aplicar a los datos de una amplia gama de contextos.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures1')\">1. Variables e individuos</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La mayoría de los conjuntos de datos contienen una o más medidas de cada uno de una colección de “individuos” (también llamados los “casos” o las “unidades”).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures2')\">2. Tipos de variable</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Las variables se clasifican en variables numéricas y categóricas. Una clasificación más fina también se bosqueja.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures3')\">3. Variables categóricos y grupos</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Una variable categórica se puede utilizar para partir a los “individuos” en grupos. Equivalente, los datos agrupados se pueden representar en una matriz de los datos con una variable categórica.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures4')\">4. Definición de nuevas variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A veces un cociente o una diferencia de dos variables en una matriz de los datos es más fácil de interpretar que las variables originales.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures5')\">5. Datos tiempo-pedidos</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>En matrices de un ciertos datos, tiempo-se piden las filas.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures6')\">6. Datos de niveles múltiples</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avanzado)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La información está a veces disponible en el grupo y el nivel individual — datos de niveles múltiples. Estos datos se almacenan lo más naturalmente posible en dos matrices de los datos.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures7')\">7. Estructura de datos al método estadístico</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>El análisis estadístico es específico a la estructura de los datos (es decir los tipos de variable en la matriz de los datos). El CAST comienza con métodos descriptivos a explorar datos; entonces se mueve encendido a los métodos deductivos que toman cuenta de aleatoriedad en los datos.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
