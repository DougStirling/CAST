var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Paramètres tests de régression</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnTest1')\">1. Importance of zero slope</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si la pente du modèle est égal à zéro, la distribution de la réponse ne dépend pas de la variable explicative. Ce cas particulier est particulièrement significatif dans de nombreuses études.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnTest2')\">2. Testing whether slope is zero</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La valeur p pour tester si la pente d'un modèle linéaire est nulle est la probabilité que son estimation des moindres carrés est aussi loin de zéro la valeur enregistrée.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnTest3')\">3. Strength of evidence and relationship</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Il est important de distinguer la force d'une relation (résumées par le coefficient de corrélation) et la force de la preuve de l'existence d'une relation (résumée par la valeur p).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnTest4')\">4. Properties of p-values</a>&nbsp;&nbsp;&nbsp;<span class='note'>(advanced)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Comme avec d'autres tests, toutes les valeurs p entre 0 et 1 sont également probables si l'hypothèse nulle est titulaire (modèle pente est nulle), mais les valeurs p proches de 0 sont plus probables si l'hypothèse alternative est titulaire (modèle pente est non nulle).</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
