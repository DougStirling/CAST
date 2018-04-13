var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Contexte</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p><span style='color:red;'>(Cliquez sur une rubrique pour afficher la page.)</span></p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('context_b1')\">1. Importance of context</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'accent de la statistique est de r&eacute;pondre aux questions qui sont exprim&eacute;s dans la langue de certains domaines d'application. M&eacute;thodes statistiques pour l'analyse des donn&eacute;es sont un &eacute;l&eacute;ment central de statistiques, mais le contexte des donn&eacute;es est plus important.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('context2')\">2. Statistiques</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'analyse statistique est un processus qui consiste &agrave; identifier les questions d'int&eacute;r&ecirc;t, la collecte des donn&eacute;es et des analyses et produire un rapport. Dans la vie r&eacute;elle des probl&egrave;mes, les &eacute;tapes de collecte de donn&eacute;es et d'analyse peut &ecirc;tre r&eacute;p&eacute;t&eacute;e plusieurs fois.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('context_b3')\">3. The statistical process</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans de nombreuses applications, le cycle de collecte de donn&eacute;es et d'analyse est un &eacute;l&eacute;ment central de la qu&ecirc;te de l'am&eacute;lioration des syst&egrave;mes et des processus.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
