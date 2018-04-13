var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Association &amp; relations causales</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('causal1')\">1. L'intérêt pour les relations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Pour la plupart des ensembles de données, nous sommes intéressés à comprendre les relations entre les variables. Cependant relations interprétation doit être fait avec soin.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('causal2')\">2. Relations causales et non causales</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si la relation entre X et Y est causal, il est possible de prédire l'effet de la modification de la valeur de X.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('causal3')\">3. Detecting causal relationships</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Causalité ne peut être déduite de la façon dont les données ont été recueillies - les données elles-mêmes valeurs ne contiennent pas d'informations sur la causalité.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('causal4')\">4. Les données d'observation et d'expérimentation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans une étude observationnelle, les valeurs sont enregistrées passivement des individus. Des expériences sont caractérisées par le contrôle de l'expérimentateur sur les valeurs d'une ou plusieurs variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('causal5')\">5. La collecte des données et de la causalité</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les relations causales ne peuvent être déduites des expériences bien conçues.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
