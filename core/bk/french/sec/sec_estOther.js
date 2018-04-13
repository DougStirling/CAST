var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Simulation et bootstrap (avancé)</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estOther1')\">1. Need for simulation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Il existe des formules pour les erreurs types des estimateurs de nombreuses communes. Si une telle formule ne sont pas disponibles, une approche différente est nécessaire.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estOther2')\">2. Error distribution by simulation (advanced)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si une formule pour l'erreur-type ne peut être trouvé, une simulation peut souvent être utilisée pour trouver la distribution des erreurs.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estOther3')\">3. Simulation from normal approximation (advanced)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un exemple est montré où une simulation fournit la distribution d'erreur et l'erreur standard pour un quartile supérieur.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estOther4')\">4. Bootstrap error distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si répartition de la population ne semble pas être normal, les simulations peuvent être basées sur des échantillons avec remplacement à partir des données réelles.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estOther5')\">5. Standard error of correlation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>bootstrap échantillons peuvent également être utilisés pour générer une répartition approximative d'erreur (et l'erreur type) pour de nombreux types d'estimateur. Leur utilisation pour trouver l'erreur-type d'un coefficient de corrélation est décrite.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
