var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Glätten</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('smoothing1')\">1. Gleitender Durchschnitt</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Der einfachste Weg eine Zeitreihe zu glätten ist der gleitende Durchschnitt.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('smoothing2')\">2. Gleitender Durchschnitt (Fortsetzung)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bei einer geraden Anzahl an Werten befinden sich die Werte, die durch den gleitenden Durchschnitt geglättet wurden, zwischen den Originalwerten. Die Methode kann so modifiziert werden, dass die geglätteten Werte an der Position der Originaldaten erscheinen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('smoothing3')\">3. Robuste Gl&auml;ttung</a>&nbsp;&nbsp;&nbsp;<span class='note'>(optional)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Effekte von Ausreissern können durch Verwendung des gleitenden Medians verhindert werden. Diese Zeitreihen wirken oft jedoch etwas stufig. Ein guter Kompromiss ist die Verwendung des gleitenden Medians und anschließend des gleitenden Durchschnitts.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('smoothing4')\">4. Exponentiale Gl&auml;ttung</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Exponentiale Glättung verwendet gewichtete gleitende Durchschnitte.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('smoothing5')\">5. Lowess Gl&auml;ttung von Zeitreihen</a>&nbsp;&nbsp;&nbsp;<span class='note'>(fortgeschritten)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Auch die Glättung der Kurve durch Verwendung der Methode der kleinsten Quadrate ist möglich.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('smoothing6')\">6. Lowess Gl&auml;ttung von Streudiagrammen</a>&nbsp;&nbsp;&nbsp;<span class='note'>(fortgeschritten)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bei nichtlinearen Zusammenhängen kann eine ähnliche Methode zur Glättung verwendet werden.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
