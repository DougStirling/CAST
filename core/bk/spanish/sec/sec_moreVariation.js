var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Más sobre la variación (opcional)</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation1')\">1. Efecto de afloramientos</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si un conjunto de datos contiene un afloramiento, el medio y especialmente la desviación estándar pueden ser gravemente afectados. Los valores pueden ser obviamente incorrectos cuando la regla 70-95-100 se aplica en el contexto de los datos pero el examen de un diagrama del punto o del diagrama de la caja es el mejor.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation2')\">2. Desviación estándar de datos agrupados</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La desviación estándar dentro de grupos es generalmente más baja que la desviación estándar total.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation3')\">3. Variación explicadas y predicciones</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Partir un conjunto de datos en grupos de valores “similares” da lugar a predicciones más exactas de los valores futuros si se sabe la calidad de miembro de grupo. El agrupar se dice para explicar algo de la variación total.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation4')\">4. Variación y grados de libertad</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avanzado)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>El cuadrado de la desviación estándar se llama la variación; su valor es más duro de entender pero es la base de métodos estadísticos avanzados importantes. Los grados de libertad son el número de fragmentos de información que contribuyen a la desviación estándar (o variación).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation5')\">5. Root mean squared error</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avanzado)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>El error medio cuadrático de la raíz resume cómo está cercano los valores en un conjunto de datos están a una blanco, K.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation6')\">6. Interpretación gráfica del sd</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avanzado)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La desviación estándar es similar al error medio cuadrático de la raíz, pero resume distancias al medio de los datos. Su valor se puede interpretar en términos de área media de cuadrados en un gráfico..</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
