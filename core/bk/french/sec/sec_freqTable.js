var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Tables de fréquences</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('freqTable1')\">1. Tables de fréquences</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un tableau de fréquences détient toutes les informations sur la distribution d'une variable catégorielle.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('freqTable2')\">2. Proportions et pourcentages</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les proportions ou les pourcentages de valeurs sont généralement plus faciles à interpréter que les fréquences premières.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('freqTable3')\">3. Reconnaissant les tableaux de fréquence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans un tableau de fréquences, chaque «individu» contribue un compte (fréquence) de 1 à exactement une entrée de table. Beaucoup de tableaux publiés des chiffres et les pourcentages ne sont pas des tableaux de fréquences appropriées.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('freqTable4')\">4. Modifications aux catégories</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les informations contenues dans un tableau de fréquences peut être plus claire si les catégories sont réorganisés, catégories associées sont combinés, ou si le tableau ne décrit un sous-ensemble des catégories.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
