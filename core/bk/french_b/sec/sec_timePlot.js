var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Graphiques chronologiques</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('timePlot_b1')\">1. Graphiques chronologiques</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une parcelle de s&eacute;ries chronologiques est semblable &agrave; un nuage de points avec les &laquo;temps&raquo; que la variable sur l'axe horizontal. Valeurs successives sont g&eacute;n&eacute;ralement reli&eacute;s par des lignes de souligner les mouvements syst&eacute;matiques de la s&eacute;rie.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('timePlot_b2')\">2. Patterns in time series</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Quelques exemples montrent les s&eacute;ries chronologiques avec la tendance, saisonnalit&eacute; et d'autres oscillations.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('timePlot3')\">3. Plusieurs séries chronologiques</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un exemple montre quatre s&eacute;ries diff&eacute;rentes sur le m&ecirc;me graphique.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
