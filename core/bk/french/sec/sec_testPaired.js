var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Test t apparié</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPaired1')\">1. Paired data examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Paires de données sont un type de données à deux variables dans lesquelles deux mesures similaires sont fabriqués à partir de chaque individu. Nous sommes généralement intéressés à tester si les moyens des deux mesures sont les mêmes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPaired2')\">2. Analysis of differences</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Pour les données appariées, les différences entre les deux mesures détiennent toutes les informations sur les moyens de savoir si les deux variables sont les mêmes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPaired3')\">3. Paired t-test</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un test d'hypothèse pour une différence entre les moyennes des mesures se fait avec un t-test ordinaire pour que la différence moyenne est nulle.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPaired4')\">4. Pairing and experimental design</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Pour estimer ou tester la différence entre deux moyens, il est parfois possible de collecter des données à partir de deux échantillons indépendants ou des unités appariées. Si les unités appariées sont similaires, une paire de données donne des résultats plus précis.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
