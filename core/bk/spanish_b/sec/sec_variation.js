var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Variación</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p><span style='color:red;'>(Chasque encendido cualquier título para exhibir la página.)</span></p> <p>Cuando se recogen los datos, todos los valores son raramente iguales. Un papel importante de estadísticas es describir y analizar esta variación.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation1')\">1. Señal y ruido</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>En muchas situaciones, la información (señal) se puede obscurecer por la variación al azar (ruido).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation2')\">2. Variabilidad natural</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Cuando los datos se recogen de “individuos”, varían a menudo considerablemente.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation3')\">3. Variabilidad causada por experimentos</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Las diferencias intencionales a las condiciones experimentales pueden también causar diferencias sistemáticas en variables. La variabilidad natural hace más duro interpretar resultados experimentales.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation4')\">4. Variabilidad en datos del examen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La variabilidad natural de individuos también hace más duro interpretar la información de exámenes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation_b5')\">5. Explained and unexplained variation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Una cierta variación en una variable se puede explicar en términos de otras variables registradas. La otra variación es un resultado de la variabilidad natural en los individuos.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation6')\">6. Valores futuros que predicen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La variación en un conjunto de datos puede ayudarnos a predecir los valores que pudieron ocurrir si otros datos de la misma clase se recogen en el futuro.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
