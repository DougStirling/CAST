var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Populations finies</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('popSamp1')\">1. Census or sample?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un échantillon fournit des informations sur une population quand il est trop difficile ou coûteux d'effectuer des mesures à partir de l'ensemble de la population.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('popSamp2')\">2. Variability in a sample</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un échantillon est habituellement recueillies afin de fournir des informations au sujet d'une population sous-jacente. Cependant la variabilité échantillon à échantillon doit être pris en compte lors de cette opération.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('popSamp3')\">3. Sampling error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Quand un échantillon est utilisé pour estimer une caractéristique de la population, une erreur est habituellement impliqué. L'erreur d'échantillonnage est causée par la sélection aléatoire de l'échantillon de la population.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('popSamp4')\">4. Sampling error and sample size</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Comme la taille de l'échantillon est augmentée, l'erreur d'échantillonnage devient plus petite.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('popSamp5')\">5. Sampling from finite populations</a>&nbsp;&nbsp;&nbsp;<span class='note'>(facultatif)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Échantillonnage avec remplacement à partir d'une population finie permet la même valeur à être sélectionné deux fois ou plus. Échantillonnage sans remplacement assure qu'il n'y a pas de telles copies.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('popSamp6')\">6. Selecting a random sample</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Chiffres aléatoires peuvent être sélectionnés en lançant un dé à 10 faces, en regardant un tableau de chiffres aléatoires ou en utilisant un ordinateur. Ces chiffres aléatoires peuvent être combinés pour sélectionner un membre aléatoire d'une population. La répétition du processus donne un échantillon aléatoire.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
