var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Comparaison de deux proportions</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Si les données catégoriques sont recueillies à partir de deux groupes d'individus, nous sommes généralement intéressés à comparer les proportions dans les catégories.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupPropn1')\">1. Modelling two proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Deux groupes de données catégoriques peuvent être modélisés comme des échantillons provenant de deux populations catégoriques avec des probabilités différentes de «succès».</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupPropn2')\">2. Distribution of difference in proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La différence entre deux proportions de l'échantillon a une distribution qui est à peu près normale et dont les paramètres peuvent être estimés à partir des résultats antérieurs sur la moyenne et l'écart type des différences.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupPropn3')\">3. CI for difference in proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'écart-type de la différence entre deux proportions de l'échantillon peut être estimé. De là, un intervalle de confiance de 95% a été développé pour la différence entre les deux probabilités.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupPropn4')\">4. Testing for difference in probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un test d'hypothèse est conçu pour déterminer si deux probabilités de population sont identiques.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
