var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Les tableaux de fréquence</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('freqTable1')\">1. Tables de fréquences</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un tableau de fréquences détient toutes les informations sur la distribution d'une variable catégorielle.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('freqTable_a2')\">2. Proportions and percentages</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les proportions ou les pourcentages de valeurs sont généralement plus faciles à interpréter que les fréquences premières.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tableDisplay_a1')\">3. Gridlines and white space</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'information significative dans la plupart des tableaux de fréquence est contenue dans les 2 ou 3 premiers chiffres significatifs des comtes et des proportions. Lorsque y compris les tableaux de fréquence dans les rapports, ne montrer que les chiffres les plus significatifs.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tableDisplay3')\">4. Chiffres significatifs et le bruit des données</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Lorsque y compris les tableaux de fréquence des rapports, jamais tracer des lignes de la grille cette boîte toute valeur. Utilisez l'espace blanc pour séparer les différentes parties de la table, de préférence à des lignes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('freqTable3')\">5. Reconnaissant les tableaux de fréquence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans un tableau de fréquences, chaque «individu» contribue 1 à exactement une entrée de table. Beaucoup de tableaux publiés ne sont pas des tableaux de fréquence.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('freqTable4')\">6. Modifications aux catégories</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les informations contenues dans un tableau de fréquences peut être plus claire si les catégories sont réorganisés, catégories associées sont combinés, ou si le tableau ne décrit un sous-ensemble des catégories.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
