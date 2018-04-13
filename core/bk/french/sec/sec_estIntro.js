var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Introduction à l'estimation</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estIntro1')\">1. Interest in populations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Lorsque les données sont collectées, nous sommes généralement plus intéressés par la distribution de la population inconnue à partir de laquelle nous supposons que les données ont été générées.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estIntro2')\">2. Interest in parameters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Quelques résumés numériques d'une répartition de la population (paramètres) capturent souvent ses caractéristiques les plus intéressantes. Les statistiques d'échantillon correspondant fournissent des estimations.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estIntro3')\">3. Applications of estimation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Cette page donne quelques exemples où les statistiques d'échantillonnage sont utilisées pour estimer les paramètres de population importants.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estIntro4')\">4. Estimation error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La différence entre le paramètre de la population et une estimation de l'échantillon est appelé l'erreur dans l'estimation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estIntro5')\">5. Distribution of errors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les erreurs d'estimation varient d'un échantillon à avoir et les distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estIntro6')\">6. Standard error and bias</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un bon estimateur comporte des erreurs qui sont proches de zéro. La distribution d'erreur devrait idéalement être centrée sur zéro (impartiale) et ont un faible écart (erreur standard). L'erreur-type est l'écart type des deux l'estimateur et l'erreur d'estimation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estIntro7')\">7. Interval estimates</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une estimation d'intervalle est une gamme de valeurs dans laquelle nous sommes 'confiant' que le paramètre de population inconnu réside.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
