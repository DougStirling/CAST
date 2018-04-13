var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Distribuciones de comprensión</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp1')\">1. Afloramientos</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Hace los datos contienen cualquier afloramiento — ¿valores que son anormalmente grandes o pequeños? Los valores extremos en una distribución oblicua se confunden a menudo desde afloramientos.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp2')\">2. Racimos</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Hace la fractura de los datos en racimos separados — ¿las gamas de valores con alta densidad se separaron por las gamas con baja densidad? Los racimos pueden corresponder a diversos grupos de individuos.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp3')\">3. Distribución de valores</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La distribución da la información sobre un valor típico redondo que los datos se separen (la localización o el centro de la distribución) y la variabilidad de los valores (la extensión de la distribución).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp4')\">4. Nombres de individuos</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La información adicional sobre los artículos de los cuales se han hecho las medidas puede ayudarnos a entender la distribución de valores en los datos.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp5')\">5. Distinción de grupos conocidos</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si sabemos que los valores vienen a partir de 2 o más grupos de individuos, los diagramas del punto se pueden modificar para demostrar esta información adicional.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp6')\">6. Peligros de la interpretación recargada</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Hay un riesgo de sobre-interpretar patrones en pequeños conjuntos de datos.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
