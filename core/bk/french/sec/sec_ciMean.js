var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Intervalle de confiance pour la moyenne</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean1')\">1. Intervalle de confiance à partir de l'erreur-type</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'erreur d'estimation pour tout estimateur sans biais, a environ 0,95 probabilité d'être entre -2SE et + 2SE. Un intervalle de confiance approximatif de 95% pour le paramètre est donc l'estimation ± 2SE.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean2')\">2. Intervalle de confiance pour la moyenne, connu sigma</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si l'écart type de population est connue, l'erreur-type peut être déterminée précisément. Un intervalle de confiance de 95% est la moyenne de l'échantillon deux fois cette ±. (Ou plus exactement, 1,96 fois l'erreur-type.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean3')\">3. Le niveau de confiance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une simulation montre que les intervalles de confiance à 95% sont aléatoires - elles varient d'un échantillon à. Environ 95% des échantillons donne des intervalles de confiance qui comprennent le véritable paramètre.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean4')\">4. Le niveau de confiance, si sigma est remplacé par s</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans la pratique, l'écart type de population est généralement inconnue. Si la population SD est simplement remplacée par son équivalent d'échantillon, l'estimation d'intervalle a un niveau de confiance inférieur à 95%.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean5')\">5. Intervalle de confiance pour μ, σ inconnu</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Pour obtenir un niveau de confiance de 95%, une valeur t à partir de tables doit remplacer la constante 1,96.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean6')\">6. Propriétés de l'intervalle de confiance à 95%</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une simulation montre que les intervalles de 95% de confiance qui en résultent ont une probabilité de 0,95 d'inclure la moyenne de la population.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean7')\">7. Exemples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Quelques exemples des intervalles de confiance de 95% pour les moyens de population sont donnés et interprétés.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
