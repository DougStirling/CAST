var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Fluctuations à court terme</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('cyclic1')\">1. Autocorrélation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Même après le retrait de la tendance, les valeurs successives dans une série de temps sont souvent corrélées - des valeurs supérieures à la tendance sont souvent suivies par d'autres au-dessus et, de même, des valeurs inférieures à la tendance se produisent souvent ensemble.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('cyclic2')\">2. AR (1) le modèle de l'autocorrélation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La similitude des valeurs successives dans une série chronologique (ou une série de temps redressée) peut être modélisé par un modèle linéaire prévoit que chaque valeur (ou une valeur épurée de la tendance) comme une fonction linéaire de la précédente.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('cyclic3')\">3. AR (1) modèle et la tendance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La tendance devrait être enlevé avant de monter un modèle autorégressif ensuite ajouté Retour à la prévision des valeurs futures.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('cyclic4')\">4. Tendance ou autocorrélation?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un simple mécanisme d'auto-corrélation des résidus successifs peut donner l'impression de la tendance alors qu'aucun est présent dans le processus sous-jacent.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('cyclic5')\">5. Motifs cycliques</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Certaines séries de temps varient selon des cycles réguliers ou irréguliers. Des cycles irréguliers peuvent être modélisés et prévoir utilisant les méthodes de cette section, mais des cycles réguliers (modèles saisonniers) devrait être prévoir avec des méthodes différentes.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
