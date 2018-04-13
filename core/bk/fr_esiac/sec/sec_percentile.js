var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Percentiles</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile4')\">1. Centiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Compte tenu de toutes proportions cible, p, il est possible de trouver une valeur correspondante, x, pour lesquels cette proportion environ de valeurs est inférieur ou x. Par exemple, le percentile pour p = 50% est la valeur médiane.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile5')\">2. Afficher les percentiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les 0, 25, 50, 75 et 100'th percentiles sont affichées comme une boîte à moustaches. Autres percentiles peuvent être affichés dans un rectangle ombragé similaire.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_percentile6')\">3. Percentiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Certains exercices pratiques donnent à trouver des percentiles pour un ensemble de données.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile6')\">4. En comparant des groupes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Box parcelles sont utiles pour comparer les groupes. Si les groupes sont dans l'ordre (par exemple, les mois de l'année), la médiane, quartiles et extrêmes peuvent être joints et ombragés que des bandes. Cette décrire comment efficacement la distribution des valeurs est variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile7')\">5. En comparant des groupes d'autres percentiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans certaines applications, différents percentiles sont importants. Ils peuvent également être jointes et ombragés que des bandes à comparer des groupes ordonnés.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile8')\">6. Une meilleure définition des centiles</a>&nbsp;&nbsp;&nbsp;<span class='note'>Advanced</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le graphique des probabilités cumulées est une fonction de l'étape. La plupart des rapports de logiciels percentiles qui sont équivalentes à la lecture des valeurs hors une version lissée de cette fonction en escalier.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
