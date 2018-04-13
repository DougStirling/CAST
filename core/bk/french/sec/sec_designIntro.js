var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Principes de conception expérimentale</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designIntro1')\">1. Experiments and treatments</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Des expériences sont menées pour évaluer l'effet d'une variable explicative catégorique ou numérique sur une réponse. Les expériences sont caractérisés par le fait que le chercheur peut contrôler les valeurs de la variable explicative qui sont utilisés.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designIntro2')\">2. Variable experimental units</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans de nombreuses expériences, les unités sur laquelle est menée l'expérience ne sont pas identiques. Les caractéristiques variables des unités expérimentales peuvent affecter la réponse.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designIntro3')\">3. A badly designed experiment</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si les traitements sont mal allouées aux unités expérimentales, l'expérience peut sur- ou sous-estimer leur effet.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designIntro4')\">4. Confounding</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si les unités expérimentales qui sont choisis pour obtenir un traitement diffèrent également par d'autres moyens, il sera impossible de dire si il est le traitement ou les autres caractéristiques distinctes des unités qui affecte la réponse.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designIntro5')\">5. Randomisation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une répartition aléatoire des traitements à des unités expérimentales évite sur- systématique ou sous-estimation des effets du traitement.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designIntro6')\">6. Replication</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si chaque traitement est utilisé en plus d'un appareil d'essai, la variabilité d'unité à unité peut être évaluée. Elle donne des informations pour savoir si les différences entre les traitements sont plus importantes que les différences de hasard.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designIntro7')\">7. Blocking</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>En regroupant les unités expérimentales similaires en blocs et en allouant des traitements au sein de blocs au hasard, les effets du traitement peuvent être estimés avec plus de précision.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
