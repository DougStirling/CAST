var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Échantillons des distributions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('infPopn1')\">1. Data as representatives</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Nous avons souvent peu d'intérêt pour les individus particuliers dont les données sont collectées. Les données sont représentatives d'une situation plus large et nous voulons généraliser à partir des données pour décrire les caractéristiques de cette situation plus générale.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('infPopn2')\">2. Randomness of data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si la collecte de données a été répété, peut-être d'individus différents, les valeurs seraient différentes. Tous ces ensembles de données devraient donner des informations similaires mais pas identiques. Interprétation d'un ensemble de données devrait tenir compte de ce caractère aléatoire.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('infPopn3')\">3. Model to explain randomness</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>De nombreux ensembles de données ne sont pas générées comme des échantillons aléatoires de populations finies réels. Cependant, il est souvent utile pour traiter les données d'un échantillon aléatoire de certains population abstraite contenant les mesures qui auraient pu être enregistrées.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('infPopn4')\">4. Infinite populations (distributions)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les populations qui sont imaginées aux données sous-tendent contiennent souvent un nombre infini de valeurs et sont appelés distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('infPopn5')\">5. Information from a single sample</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le mécanisme d'échantillonnage d'une population explique aléatoire. Bien que la population est inconnu et nous ne disposons que d'un seul échantillon, l'échantillon fournit des informations sur la population.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
