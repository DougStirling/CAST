var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Données saisonnières</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seasonal1')\">1. Les tendances saisonnières</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Données saisonnières peuvent montrer un motif qui se répète à intervalles réguliers.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seasonal2')\">2. Lisser les variations saisonnières</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Moyennes mobiles afin égal au nombre de saisons peuvent lisser les variations saisonnières.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seasonal3')\">3. Estimation de l'effet saisonnier</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'écart moyen entre les données et les valeurs correspondantes lissées dans un mois est appelé l'effet saisonnier pour le mois.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seasonal4')\">4. Données désaisonnalisée</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>En soustrayant l'effet saisonnier partir des données brutes est appelé à désaisonnaliser les données et les valeurs qui en résultent sont appelés désaisonnalisée.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seasonal5')\">5. Mettre le tout ensemble</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Données saisonnières peuvent être divisés en quatre composantes - saisonnières, tendance, cycliques et résiduelles.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seasonal6')\">6. Prévision avec des données saisonnière</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La saison, composantes tendancielles et cycliques d'une série de temps peuvent chacun être prévus dans le futur. Les ajoutant fournit une prévision pour les valeurs futures.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
