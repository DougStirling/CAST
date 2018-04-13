var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Contexte et processus statistique</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p><span style='color:red;'>(Cliquez sur un titre pour afficher la page.)</span></p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('context_m1')\">1. Importance of context</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'objectif des statistiques est de répondre aux questions qui sont exprimés dans la langue de certains domaines d'application. Les méthodes statistiques d'analyse des données sont une partie essentielle de statistiques, mais le contexte des données est plus importante.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('context_m2')\">2. Statistics</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'analyse statistique est un processus qui consiste à identifier les questions d'intérêt, la collecte de données et l'analyse et la production d'un rapport. Dans les problèmes de la vie réelle, la collecte de données et étapes de l'analyse peuvent être répétés plus d'une fois.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('context_b3')\">3. The statistical process</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans de nombreuses applications, le cycle de la collecte et l'analyse des données est un élément central de la quête de l'amélioration des systèmes et des processus.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
