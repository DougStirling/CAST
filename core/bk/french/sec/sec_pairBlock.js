var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Jumelage et blocs</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('pairBlock1')\">1. Aim of similar experimental units</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'effet d'un facteur est estimé plus précisément dans une expérience dans laquelle toutes les unités expérimentales sont très similaires. La plus grande variabilité dans les unités expérimentales, moins précises les estimations.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('pairBlock2')\">2. Experiment with matched pairs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si le facteur est à deux niveaux, il est parfois possible de regrouper les unités expérimentales en paires qui sont similaires les uns aux autres. En attribuant une unité expérimentale de chaque paire à chaque niveau de facteur, l'effet des facteurs est estimée plus précise que dans une expérience complètement aléatoire.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('pairBlock3')\">3. Randomisation in paired experiments</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Il est extrêmement important que les deux niveaux de traitement sont répartis au hasard en deux unités expérimentales de chaque paire.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('pairBlock4')\">4. Matched groups of 3 or more units</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'idée de paires d'unités expérimentales peut être généralisée en Groupes appariés de 3 ou plus si le facteur dispose de 3 niveaux ou plus. Attribution aléatoire des niveaux de facteurs au sein de chaque groupe de résultats assortis des estimations plus précises que dans un dispositif complètement aléatoire.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('pairBlock5')\">5. Randomised block experiments</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans de nombreuses expériences, les unités expérimentales sont naturellement présents dans des groupes d'unités similaires (appelés blocs) où la taille de bloc est un multiple du nombre de niveaux de facteur. Une expérience en blocs aléatoires attribue au hasard un nombre égal d'unités à chaque niveau de facteur à l'intérieur de chaque bloc.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
