var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Graphiques chronologiques parcelles</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('timePlot1')\">1. S&eacute;ries Chronologiques</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une parcelle de série chronologique est semblable à un nuage de points avec le «temps» que la variable sur l'axe horizontal. Valeurs successives sont généralement joints par des lignes de souligner mouvements systématiques dans la série.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('timePlot2')\">2. Patterns dans les séries chronologiques</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Quelques exemples montrent séries chronologiques avec la tendance, tendance saisonnière et d'autres oscillations.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('timePlot3')\">3. Plusieurs séries chronologiques</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un exemple montre quatre séries temporelles sur le même graphique.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
