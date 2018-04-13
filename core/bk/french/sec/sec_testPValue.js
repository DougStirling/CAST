var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Propriétés des valeurs p</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Comprendre les propriétés des valeurs-p vous permet d'interpréter les résultats d'une vaste gamme de tests d'hypothèses, même si vous ne connaissez pas les détails de la façon dont les p-valeurs ont été obtenues.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPValue1')\">1. Null and alternative hypotheses</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Tests d'hypothèses demandent si les exemples de données sont conformes à une déclaration sur les paramètres appelés l'hypothèse nulle.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPValue2')\">2. P-value and consistency with null hypothesis</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une valeur de p est une mesure numérique de savoir si les données de l'échantillon sont compatibles avec l'hypothèse nulle.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPValue3')\">3. Distribution of p-values</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Lorsque l'hypothèse nulle est vraie, tout p-valeur entre 0 et 1 est également probable. Lorsque l'hypothèse alternative est vraie, les valeurs p sont proches de 0 plus probable. Un p-valeur proche de 0 donne donc la preuve que l'hypothèse alternative est titulaire.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPValue4')\">4. Interpretation of a p-value</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une valeur de p est la probabilité d'obtenir de telles données «extrême» lorsque l'hypothèse nulle est titulaire.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPValue5')\">5. P-values for other tests</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les valeurs de p ont les mêmes propriétés et interprétation pour tous les tests. Un test pour savoir si une population a une distribution normale est utilisée comme exemple.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
