var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Modèles multiplicatifs</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiplicative1')\">1. Modèles additif et multiplicatif</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans certaines séries de temps, les différentes composantes affectent les données multiplicativement plutôt que additive. Si les données sont remplacées par leurs journaux, un modèle multiplicatif devient additif.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiplicative2')\">2. Propriétés des modèles multiplicatifs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans un modèle multiplicatif, la tendance saisonnière a une plus grande amplitude lorsque la tendance est plus élevé.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiplicative3')\">3. Prévision des modèles multiplicatifs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un modèle multiplicatif est monté à l'aide d'un modèle additif avec les données de journal. Les prévisions qui en résultent sont également des données du journal, et doivent donc être reconverti pour donner une prévision dans les unités d'origine.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiplicative4')\">4. Analyser les données correctes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>De nombreux types de données doivent être modifiés avant de tenter de les interpréter dans une parcelle de séries chronologiques. Désaisonnalisation, la transformation en dollars et l'utilisation des données par habitant sont des exemples constants.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiplicative5')\">5. Types de données de séries chronologiques</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les séries chronologiques peut décrire les processus qui sont discrète ou continue, et les mesures de procédés continus peut être des agrégats ou des instantanés. Les valeurs peuvent aussi être soit discrètes ou continues.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
