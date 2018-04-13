var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Affichage graphique des valeurs</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Dot parcelles et de la tige et les parcelles de feuilles montrent chaque valeur dans un ensemble graphique des données.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay1')\">1. L'analyse des variations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'information utile peut être obtenue à partir de la variation des valeurs d'une variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay2')\">2. Base dot plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'> Un tracé de points affiche chaque valeur comme une croix le long d'un axe numérique.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay3')\">3. Dot plot jittered</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Jittering est une modification du tracé de points de base qui évite certains problèmes liés à la croix qui se chevauchent.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay4')\">4. Stacked parcelles points</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Empilement des croix est une alternative à sautillement qui met en valeur des gammes de haute ou basse densité.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay5')\">5. Tiges et feuilles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Tiges et à feuilles parcelles sont semblables à des parcelles de points empilés, mais un chiffre est utilisé à la place d'une croix de conserver des informations supplémentaires.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay6')\">6. Division des tiges</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Pour augmenter la flexibilité de l'écran, chaque tige peut être répétée 2 ou 5 fois, en augmentant le nombre de classes dans la tige et la feuille intrigue de base par un facteur de 2 ou 5.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay7')\">7. Tiges et feuilles de dessin</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Pour l'analyse des données, la tige et les parcelles de feuilles sont rarement plus informatif que tracés de points empilés, mais ils sont faciles à dessiner à la main.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
