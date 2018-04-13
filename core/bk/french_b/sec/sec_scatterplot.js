var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Nuage de points</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterplot_b1')\">1. Bivariate data sets</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Beaucoup de jeux de donn&eacute;es contiennent deux ou plusieurs mesures de chaque individu. M&ecirc;me lorsque le principal int&eacute;r&ecirc;t r&eacute;side dans une variable, les autres peuvent aider &agrave; comprendre sa distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterplot2')\">2. Nuage de points</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'&eacute;cran principal qui montre la relation entre deux variables est un nuage de points.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterplot3')\">3. Limitations des écrans univariée</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Affiche univari&eacute;e ne montrent pas de relations entre les variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterplot4')\">4. Distributions marginales</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un nuage de points des deux variables peut &ecirc;tre am&eacute;lior&eacute;e avec des trac&eacute;s en bo&icirc;te ou d'histogrammes sur les marges d'un nuage de points.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterplot5')\">5. Des séries chronologiques</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Quand une seule mesure est faite &agrave; intervalles r&eacute;guliers, les donn&eacute;es sont appel&eacute;s une s&eacute;rie chronologique. Les s&eacute;ries chronologiques peuvent &ecirc;tre trait&eacute;s comme deux variables, avec le temps &eacute;tant la deuxi&egrave;me variable.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
