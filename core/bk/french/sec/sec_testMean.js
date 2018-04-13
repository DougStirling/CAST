var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Tests d'hypothèses sur les moyens</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testMean1')\">1. Introduction</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Pour les populations numériques, les hypothèses nulle et alternative précisent généralement les valeurs de la moyenne de la population. Les essais sont basés sur l'échantillon moyen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testMean2')\">2. Test for mean (known σ)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si l'écart type de population est connu, la répartition de la moyenne de l'échantillon peut être trouvée lorsque l'hypothèse nulle est vraie. La p-valeur pour le test est une zone de queue de cette distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testMean3')\">3. P-value from statistical distance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La p-valeur est plus facile à trouver à partir de la «distance statistique» entre l'échantillon et des moyens hypothétiques. La p-valeur peut être trouvée en tant que zone de queue de la distribution normale standard et est à peu près correcte, même si la répartition de la population est pas normal.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testMean4')\">4. The t distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Lorsque l'écart type de population est inconnu, une statistique de test différent doit être utilisé. Il a une distribution standard connu sous le nom à la distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testMean5')\">5. The t test for a mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La distribution t est utilisé pour obtenir une p-valeur pour les essais environ une moyenne de population lorsque l'écart type est inconnu.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
