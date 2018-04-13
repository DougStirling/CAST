var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Groupes et régression</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnGroups1')\">1. Additional variables in regression</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Corrélation des moindres carrés et sont utilisés pour décrire la relation entre les deux variables numériques. Des mesures supplémentaires de chaque individu peuvent potentiellement aider à affiner notre compréhension de la relation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnGroups2')\">2. Displaying groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Différents symboles ou des couleurs peuvent être utilisés pour représenter une troisième variable catégorique dans un nuage de points.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnGroups3')\">3. Regression with grouped data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La relation entre Y et X peut être décrit séparément par une ligne des moindres carrés à l'intérieur de chaque groupe. Cela devrait conduire à une meilleure prédiction de la réponse si la relation est différente dans les différents groupes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnGroups4')\">4. Parallel regression lines</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si les lignes de régression pour les différents groupes sont parallèles, il est facile de résumer les différences entre les groupes numériquement et interpréter ces différences.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnGroups5')\">5. Transformed variables and groups</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avancé)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Transformations peuvent linéariser la relation entre les variables de réponse et explicatives dans chaque groupe et de donner également des lignes de régression en parallèle.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnGroups6')\">6. Grouping with a numerical variable</a>&nbsp;&nbsp;&nbsp;<span class='note'>(facultatif)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une variable numérique peut être utilisé pour séparer les individus en groupes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnGroups7')\">7. Scatterplot matrix with groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les groupes peuvent aussi être représentés par différents symboles ou couleurs sur une matrice de diagramme de dispersion qui décrit les relations entre 3 ou plus d'autres variables.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
