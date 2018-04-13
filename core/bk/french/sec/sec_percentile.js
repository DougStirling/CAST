var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Les proportions et les centiles</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile1')\">1. Ensemble de données illustratives</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un ensemble de données contenant des précipitations annuelles dans Samaru, le Nigeria, sera utilisé à des fins d'illustration.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile2')\">2. Proportions cumulatives</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'> La moitié des données sont inférieurs à la médiane. Un quart et les trois quarts sont plus faibles que les quartiles inférieurs et supérieurs. À une autre valeur, x, la proportion de valeurs de données qui sont inférieurs ou x est appelée sa proportion cumulative.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile3')\">3. Graphique des proportions cumulatives</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un graphique de la proportion cumulée dessous contre x x est une fonction en escalier qui augmente à partir de zéro (à petite x) à une (à haute x).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile4')\">4. Centiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Compte tenu de toutes proportions cible, p, il est possible de trouver une valeur correspondante, x, pour lesquels cette proportion environ de valeurs est inférieur ou x. Par exemple, le percentile pour p = 50% est la valeur médiane.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile5')\">5. Afficher les percentiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les 0, 25, 50, 75 et 100'th percentiles sont affichées comme une boîte à moustaches. Autres percentiles peuvent être affichés dans un rectangle ombragé similaire.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile6')\">6. En comparant des groupes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les boîtes à moustaches sont utiles pour comparer les groupes. Si les groupes sont dans l'ordre (par exemple, les mois de l'année), la médiane, quartiles et extrêmes peuvent être joints et ombragés que des bandes. Cette section décrit comment efficacement la distribution des valeurs est variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile7')\">7. En comparant des groupes d'autres percentiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans certaines applications, différents percentiles sont importants. Ils peuvent également être jointes et ombragés que des bandes à comparer des groupes ordonnés.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile8')\">8. Une meilleure définition des centiles</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avancé)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le graphique des probabilités cumulées est une fonction de l'étape. La plupart des rapports de logiciels percentiles qui sont équivalentes à la lecture des valeurs hors une version lissée de cette fonction en escalier.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
