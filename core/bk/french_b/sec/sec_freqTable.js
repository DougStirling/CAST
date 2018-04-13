var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Tables de fr&eacute;quences</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('freqTable1')\">1. Tables de fréquences</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un tableau de fr&eacute;quences d&eacute;tient toutes les informations sur la distribution d'une variable cat&eacute;gorique.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('freqTable_b2')\">2. Proportions and percentages</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les proportions ou des pourcentages de valeurs sont g&eacute;n&eacute;ralement plus faciles &agrave; interpr&eacute;ter que les fr&eacute;quences brutes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('freqTable3')\">3. Reconnaissant les tableaux de fréquence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans un tableau de fr&eacute;quences, chaque &laquo;individu&raquo; contribue un d&eacute;compte (fr&eacute;quence) de 1 &agrave; exactement une entr&eacute;e de table. Beaucoup de tableaux publi&eacute;s des effectifs et les pourcentages ne sont pas des tableaux de fr&eacute;quence appropri&eacute;e.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('freqTable4')\">4. Modifications aux catégories</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les informations contenues dans un tableau de fr&eacute;quence peut &ecirc;tre plus clair si les cat&eacute;gories sont re-command&eacute;, les cat&eacute;gories associ&eacute;es sont combin&eacute;es, ou si le tableau d&eacute;crit qu'un sous-ensemble des cat&eacute;gories.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
