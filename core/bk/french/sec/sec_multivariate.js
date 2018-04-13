var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Affichage des données multivariées</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Les relations entre les trois variables ou plus sont souvent difficiles à comprendre, mais quelques techniques graphiques simples peuvent vous aider.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multivariate1')\">1. Representing a third variable</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une troisième variable numérique peut être représentée dans un diagramme de dispersion en utilisant des symboles ou des couleurs différentes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multivariate2')\">2. Rotating 3D scatterplots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Trois variables numériques peuvent être affichées dans un nuage de points en 3 dimensions; cela peut être tourné pour aider à comprendre les relations entre les données.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multivariate3')\">3. Scatterplot matrix and brushing</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un tableau de nuages de points de toutes les paires de variables est souvent instructif, surtout si les nuages de points sont liés dynamiquement.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multivariate4')\">4. Brushing example</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>«Brossage» se réfère à la mise en évidence dynamique des mêmes personnes à plusieurs écrans liés.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multivariate5')\">5. Slicing</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Tranchage est une autre technique dynamique. Seules les observations dans une plage de valeurs d'une variable (une tranche) sont affichés dans les affichages liés.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
