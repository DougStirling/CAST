var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Les donn&eacute;es discr&egrave;tes (chiffres)</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('counts_b1')\">1. Discrete and continuous data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Discret ensembles de donn&eacute;es contiennent des comptes alors que les ensembles de donn&eacute;es en continu pourraient contenir des valeurs dans un intervalle. Stacked parcelles point sont bonnes affiche de petits ensembles de donn&eacute;es discr&egrave;tes contenant de petits chiffres.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('counts_b2')\">2. Histograms for counts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Lorsque la plage de comptages possibles est mod&eacute;r&eacute;e ou grande, un histogramme est un affichage efficace de la distribution. Largeur de classe doit &ecirc;tre un nombre entier et les limites de classes doivent se termine par &laquo;0.5&raquo;.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('counts3')\">3. Les diagrammes à barres</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Lorsque la plage de comptages possibles est petit, un graphique &agrave; barres est une meilleure repr&eacute;sentation des donn&eacute;es d'un histogramme.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('counts_b4')\">4. Mean and st devn</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avanc&eacute;)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un tableau de fr&eacute;quences est souvent utilis&eacute; pour r&eacute;sumer des donn&eacute;es discr&egrave;tes. La moyenne et l'&eacute;cart type peut &ecirc;tre &eacute;valu&eacute; facilement &agrave; partir du tableau de fr&eacute;quences.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
