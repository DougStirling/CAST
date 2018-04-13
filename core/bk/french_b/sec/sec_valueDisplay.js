var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Affichage graphique des valeurs</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Parcelles Dot et tiges et feuilles montrent chaque valeur dans un ensemble de donn&eacute;es graphiquement.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_b1')\">1. Analysing variation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Renseignements utiles peuvent &ecirc;tre obtenus &agrave; partir de la variation dans les valeurs d'une variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_b2')\">2. Basic dot plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un trac&eacute; de points affiche chaque valeur comme une croix le long d'un axe num&eacute;rique.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_b3')\">3. Jittered dot plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Jittering est une modification de la dot plot de base qui permet d'&eacute;viter certains probl&egrave;mes li&eacute;s &agrave; la traverse qui se chevauchent.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_b4')\">4. Stacked dot plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Empilement des croix est une alternative &agrave; sautillement qui va forts de haute ou basse densit&eacute;.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_b5')\">5. Stem and leaf plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Parcelles tige et les feuilles sont semblables &agrave; des parcelles de points superpos&eacute;s, mais un chiffre est utilis&eacute; au lieu d'une croix de conserver des informations suppl&eacute;mentaires.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay6')\">6. Division des tiges</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Pour augmenter la flexibilit&eacute; de l'&eacute;cran, chaque tige peut &ecirc;tre r&eacute;p&eacute;t&eacute;e 2 ou 5 fois, en augmentant le nombre de classes dans la tige de base et tracer la feuille par un facteur de 2 ou 5.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay7')\">7. Tiges et feuilles de dessin</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Pour les parcelles d'analyse de donn&eacute;es, tiges et feuilles sont rarement plus informatif que les parcelles de points superpos&eacute;s, mais ils sont faciles &agrave; dessiner &agrave; la main.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
