var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Distributions normales</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn1')\">1. Importance of normal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les distributions normales sont parfois utiles en tant que modèles pour les données, mais la principale raison de leur importance est que moyenne de l'échantillon et de nombreuses autres statistiques sommaires ont des distributions d'environ normales.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn2')\">2. Shape of normal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Toutes les distributions normales ressemblent sur une échelle de déviations standards de la moyenne.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn3')\">3. Sketching a normal distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les distributions normales sont centrées sur leur moyenne, μ, et ont pratiquement aucune zone au-delà 3σ de chaque côté. Une petite surface (environ 5%) est plus de 2 écarts types de la moyenne.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn4')\">4. Some normal probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les probabilités d'être au sein de (σ, 2σ, et 3s) de la moyenne sont (0,68, 0,95 et 0,997) pour toutes les distributions normales. Ceci est un match proche de la règle empirique-70-95-100 pour les ensembles de données numériques.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn5')\">5. Z-scores</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Toute valeur, x, peut être traduit en un z-score qui donne le nombre d'écarts types au-dessus de la moyenne.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn6')\">6. Finding normal probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Z-scores ont une distribution normale standard (μ = 0 et σ = 1). La probabilité d'une valeur inférieure à x peut être traduit en une probabilité d'un z-score.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn7')\">7. Other probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La probabilité que X est supérieur à une valeur spécifiée ou est comprise entre deux valeurs peut également se traduire par une probabilité d'un score z.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn8')\">8. Normal tables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si un ordinateur ne sont pas disponibles, des tables de probabilités pour la distribution normale standard sont utilisés pour trouver des probabilités normales.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn9')\">9. Finding normal quantiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le problème inverse de trouver la valeur de x correspondant à une probabilité donnée est également résolu en utilisant z-scores. Si les tableaux normaux sont utilisés, ils doivent être examinés différemment.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn10')\">10. Normal probability plots</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avancé)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un tracé de probabilité normale est une méthode graphique informelle pour aider à évaluer si un ensemble de données provient d'une distribution normale. Courbure dans le tracé de probabilité suggère que les données peuvent ne pas être normale.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
