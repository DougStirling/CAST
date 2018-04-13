var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Proportions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile1')\">1. Ensemble de données illustratives</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un ensemble de données contenant des précipitations annuelles dans Samaru, le Nigeria, sera utilisé à des fins d'illustration.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile2')\">2. Proportions cumulatives</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La moitié des données sont inférieurs à la médiane. Un quart et les trois quarts sont plus faibles que les quartiles inférieurs et supérieurs. À une autre valeur, x, la proportion de valeurs de données qui sont inférieurs ou x est appelée sa proportion cumulative.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile3')\">3. Graphique des proportions cumulatives</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un graphique de la proportion cumulée dessous contre x x est une fonction en escalier qui augmente à partir de zéro (à petite x) à une (à haute x).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile_m9')\">4. Other ways to express proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Toute proportion cumulée, p, peut être exprimée de manière équivalente comme un taux par n valeurs, np, ou en pourcentage, 100p. Si la proportion de valeurs qui sont inférieures ou x est P, le nombre moyen de valeurs jusqu'à une telle valeur est obtenue est de 1 / p; ce qu'on appelle la «période de retour» pour des valeurs inférieures ou égale à x.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile_m10')\">5. Other data sets</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Cette page montre comment proportions cumulatives sont utilisés et interprétés pendant quelques différents ensembles de données.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_percentile_m4')\">6. Exercises based on real data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Certains exercices pratiques donnent à trouver différentes façons d'exprimer proportions, sur la base des données réelles.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
