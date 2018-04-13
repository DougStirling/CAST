var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Gruppen und Regression</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnGroups1')\">1. Zus&auml;tzliche Variablen in der Regression</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Korrelation und die Methode der kleinsten Quadrate werden benutzt um den Zusammenhang zweier metrischer Variablen zu beschreiben. Weitere Variablen, sofern sie für alle Beobachtungseinheiten vorliegen, können uns helfen die Zusammenhänge besser zu verstehen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnGroups2')\">2. Gruppen darstellen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Eine dritte Variable kann in einem Streudiagramm durch unterschiedliche Farben oder Symbole dargestellt werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnGroups3')\">3. Regression mit gruppierten Daten</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Der Zusammenhang zwischen Y und X kann für jede Gruppe einzeln beschreiben werden. Eine Regressionsgerade für jede einzelne Gruppe sollte eine Verbesserung der Vorhersage bewirken, falls die Zusammenhänge innerhalb der Gruppen jeweils unterschiedlich ist.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnGroups4')\">4. Parallele Regressionsgeraden</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Sind die Regressionsgeraden der einzelnen Gruppen parallel, lässt sich der Unterschied zwischen den Gruppen leicht beschreiben.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnGroups5')\">5. Transformierte Variablen und Gruppen</a>&nbsp;&nbsp;&nbsp;<span class='note'>(fortgeschritten)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Transformationen können den Zusammenhang zwischen Zielgröße und Einflussgröße linearisieren und teilweise auch parallele Regressionsgeraden für die einzelnen Gruppen bewirken.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnGroups6')\">6. Gruppierung mit numerischen Variablen</a>&nbsp;&nbsp;&nbsp;<span class='note'>(optional)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Eine numerische Variable kann verwendet werden, um Beobachtungseinheiten in Gruppen einzuteilen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnGroups7')\">7. Streudiagrammmatrix mit Gruppen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Gruppen können auch in einer Streudiagrammmatrix durch Farben und Symbole kenntlich gemacht werden. Somit können Zusammenhänge von 3 oder mehr Variablen dargestellt werden.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
