var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Deux ou plusieurs facteurs</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designTwo1')\">1. Experiments with 2 factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un deuxième facteur peut varier dans une expérience randomisée pour un facteur sans affecter la précision de l'effet estimé du premier facteur.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designTwo2')\">2. Factorial design</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans une expérience factorielle, chaque combinaison des niveaux de deux ou plusieurs facteurs est utilisée sur le même nombre d'unités expérimentales.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designTwo3')\">3. Simple model for two factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le modèle le plus simple de l'effet de deux facteurs suppose que l'effet de chaque facteur est la même, quelle que soit la valeur de l'autre facteur. La réponse moyenne peut être écrite comme la somme des effets des facteurs distincts.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designTwo4')\">4. Interaction between factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si l'effet d'un facteur dépend du niveau de l'autre, il est dit être interaction entre eux. Interaction peut être évalué à partir d'une expérience factorielle.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designTwo5')\">5. Example with interaction</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Cet exemple permet d'expliquer le concept d'interaction.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designTwo6')\">6. No-interaction model for three factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le modèle le plus simple pour trois ou plus des facteurs suppose que l'effet de chaque ne dépend pas des niveaux des autres. La réponse moyenne est modélisée comme la somme des termes pour les facteurs individuels.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designTwo7')\">7. Interaction in 3-factor designs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans des expériences factorielles avec 3 ou plus de facteurs, il peut y avoir des interactions entre deux ou plusieurs des facteurs.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
