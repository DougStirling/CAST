var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Introduction aux tests d'hypothèses</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro1')\">1. Inference</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Estimation demande qui valorise pour un paramètre inconnu sont compatibles avec les données qui ont été recueillies. Test d'hypothèse demande généralement si les données sont compatibles avec certaines valeurs de paramètres.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro2')\">2. Soccer league simulation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Certaines équipes dans une ligue de soccer sont mieux que d'autres, ou est le tableau de la ligue de fin de saison en accord avec des résultats aléatoires des équipes aussi assortis? Une simulation peut aider à répondre à cette question.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro3')\">3. Simulation to test a proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Cette page présente une simulation pour tester si le nombre d'observations observées dans une catégorie est compatible avec une probabilité donnée.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro4')\">4. Test for a mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Cette page utilise une simulation pour tester si un échantillon est compatible avec une moyenne de population particulier.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro5')\">5. Randomisation tests</a>&nbsp;&nbsp;&nbsp;<span class='note'>(facultatif)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un procédé est présenté pour déterminer si la population des moyens dans deux groupes sont identiques.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro6')\">6. Soccer league randomisation</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avancé)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La corrélation entre les points finaux des équipes en deux saisons successives sera relativement élevé si certaines équipes sont mieux que d'autres. Les points de randomisation dans la deuxième saison donne une indication de savoir si la corrélation réelle est anormalement élevée.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro7')\">7. Common patterns in hypothesis testing</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Tous les tests d'hypothèses impliquent une hypothèse nulle, une statistique sommaire pour les essais, une hypothèse alternative et une valeur p.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
