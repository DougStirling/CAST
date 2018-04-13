var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Les cartes de contrôle</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('controlChart1')\">1. Présentation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Beaucoup de processus d'affaires et industriels sont surveillés en permanence afin de détecter les problèmes tôt.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('controlChart2')\">2. Les graphiques de séquences</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un tableau de l'exécution tracé des mesures régulières d'un processus contre le temps. Les valeurs extrêmes indiquent des problèmes avec le processus.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('controlChart3')\">3. Les limites de contrôle</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Pour la plupart des distributions, presque toutes les valeurs sont dans un rayon de 3 écarts types de la moyenne. Contrôle limite 3s de chaque côté de la moyenne d'échantillon à partir de données de formation peuvent être utilisés pour indiquer des problèmes avec le processus.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('controlChart4')\">4. D'autres signaux d'être hors de contrôle</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Fonctionne de valeurs successives qui sont s ou 2 s à partir de la moyenne peuvent également être utilisés pour indiquer des problèmes dans le processus.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('controlChart5')\">5. Les fausses alarmes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les fausses alarmes se produisent occasionnellement, même lorsque le processus est sous contrôle. Plusieurs déclencheurs successives donnent une indication plus claire des problèmes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('controlChart6')\">6. Exemples de cartes courir</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les limites de contrôle sont définis à partir de la variation quand un processus est sous contrôle alors appliquée à de futures observations.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('controlChart7')\">7. Les cartes de contrôle des moyens</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les cartes de contrôle sont souvent basées sur de petits échantillons réguliers plutôt que des valeurs individuelles. Si les valeurs individuelles ont une distribution d'inclinaison, les limites +/- 3s peut être dépassé dans 2% ou plus de valeurs. Moyenne de l'échantillon sont plus proches de la normale, donc un tableau de commande pour les moyens dépasse rarement ses limites de contrôle lorsque le processus est sous contrôle.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('controlChart8')\">8. Les cartes de contrôle pour les gammes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un tableau de commande pour la gamme d'échantillons successifs peut indiquer augmentations de la variabilité du procédé.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('controlChart9')\">9. Trouver la cause des problèmes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si un problème est détecté dans un processus, remue-méninges et de diagrammes et de cause à effet peut aider à déterminer la cause du problème.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
