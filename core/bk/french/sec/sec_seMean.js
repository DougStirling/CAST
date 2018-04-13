var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>L'écart de la moyenne</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean1')\">1. Error distribution for mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Lors de l'utilisation d'un échantillon signifie pour estimer une moyenne de population, les erreurs ont une distribution de moyenne nulle. L'écart type des erreurs (erreur standard) est l'écart type de la moyenne de l'échantillon.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean2')\">2. Standard error when σ is known</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si l'écart type de population est connue, l'erreur-type peut être évaluée.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean3')\">3. Interpreting the standard error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'erreur d'estimation a environ 95% de probabilité d'être dans les 2 erreurs types de zéro et est presque certainement dans les 3 erreurs standard.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean4')\">4. Standard error when σ is unknown</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans la plupart des applications pratiques, l'écart de population standard est inconnue. L'erreur standard de la moyenne de l'échantillon peut être approchée par le remplacement de la déviation standard de la population par l'écart type de l'échantillon dans sa formule.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean5')\">5. Standard error vs standard deviation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Il est important de faire la distinction entre l'interprétation (et la valeur) de l'erreur standard (SE) et la déviation standard (SD).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean6')\">6. Using SEs to compare estimators</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avancé)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si il ya deux autres estimateurs d'un paramètre, l'estimateur avec erreur standard inférieure est habituellement mieux. La moyenne de l'échantillon se révèle être un meilleur estimateur du centre d'une population normale que la médiane de l'échantillon.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean7')\">7. More about bias</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avancé)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Impartiales estimateurs sont généralement préférés. L'échantillon médian est indiqué comme étant un estimateur biaisé de la moyenne d'une distribution d'inclinaison.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
