var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Hypothèses de modèle linéaire</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnProblem1')\">1. Assumptions in a normal linear model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le modèle linéaire normale implique des hypothèses de linéarité, de variance constante, la distribution d'erreur normale et l'indépendance des différentes observations. Résidus peuvent être examinées pour déterminer si ces hypothèses sont appropriées pour un ensemble de données particulier.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnProblem2')\">2. Curvature &mdash; transforming X</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'> Si la relation entre X et Y est non linéaire, une transformation de X peut linéariser la relation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnProblem3')\">3. Curvature and non-constant variance &mdash; transforming Y</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Transformer la réponse peut retirer courbure dans la relation, mais affecte également si l'écart-type d'erreur est constante. Heureusement, la même transformation de Y supprime souvent la courbure et l'écart type non constante.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnProblem4')\">4. Transformations and prediction</a>&nbsp;&nbsp;&nbsp;<span class='note'>(advanced)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si un modèle linéaire normal décrit la relation entre une transformation de la réponse et une transformation de la variable explicative, les prédictions peuvent être faites en ajustant le modèle linéaire pour les données transformées, puis à effectuer la transformation inverse sur la prédiction.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnProblem5')\">5. Outliers and leverage</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une valeur aberrante est une valeur de réponse qui est inhabituellement grand ou petit. Un résiduelle extrême suggère une valeur aberrante et résidus standardisés peut être utilisé pour l'évaluer. Toutefois, si la valeur aberrante correspond à une valeur x extrême (un point de levier de haut), il peut ne pas apparaître comme une grande résiduelle.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnProblem6')\">6. Non-normal errors</a>&nbsp;&nbsp;&nbsp;<span class='note'>(facultatif)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les erreurs dans un modèle linéaire normale sont supposés avoir des distributions normales. Violation de cette hypothèse est moins important que la non-linéarité, variance ou aberrantes non constante, mais un tracé de probabilité des résidus peut être utilisée pour évaluer la normalité.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnProblem7')\">7. Correlated errors</a>&nbsp;&nbsp;&nbsp;<span class='note'>(facultatif)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les erreurs dans un modèle linéaire normale sont supposés indépendants. En données où les observations sont enregistrées séquentiellement, erreurs successives sont parfois observé de corrélation. Erreurs corrélées peuvent survenir quelle que soit la variable x, mais sont le plus souvent vu lorsque la variable x est temps lui-même.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
