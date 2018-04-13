var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Proporciones y porcentajes</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile1')\">1. Conjunto de datos ilustrativo</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un conjunto de datos que contiene precipitaciones anuales en Samaru, Nigeria, será utilizado para los propósitos ilustrativos.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile2')\">2. Proporciones acumulativas</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un gráfico de la proporción acumulativa debajo de x contra x es una función de paso que aumenta a partir de la cero (en pequeña x) a una (en alta x).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile3')\">3. Gráfico de proporciones acumulativas</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un gráfico de la proporción acumulativa debajo de x contra x es una función de paso que aumenta a partir de la cero (en pequeña x) a una (en alta x).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile4')\">4. Porcentajes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dado cualquier proporción de la blanco, p, es posible encontrar un valor correspondiente, x, para el cual esta proporción de valores es aproximadamente x o más baja. Por ejemplo, el porcentaje para p el = 50% es el punto medio.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile5')\">5. Exhibición de porcentajes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Se exhiben los 0, 25, 50, 75 y 100 ' porcentajes del th como un diagrama de la caja. Otros porcentajes se pueden exhibir en un rectángulo sombreado similar.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile6')\">6. Comparar a grupos</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Los diagramas de la caja son útiles para comparar a grupos. Si los grupos están en la orden (e.g. los meses de un año), el punto medio, las cuartilas y los extremos se pueden ensamblar y sombrear como vendas. Esto describe con eficacia cómo la distribución de valores varía.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile7')\">7. Comparar a grupos con otros porcentajes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>En algunos usos, diversos porcentajes son importantes. Pueden también ser ensamblados y ser sombreados como vendas para comparar a grupos pedidos.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile8')\">8. Una mejor definición de porcentajes</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avanzado)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>El gráfico de probabilidades acumulativas es una función de paso. La mayoría del software divulga los porcentajes que son equivalentes a los valores de la lectura de una versión alisada de esta función de paso.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
