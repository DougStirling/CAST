var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Tiges et à feuilles parcelles</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_m5')\">1. Stem and leaf plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Tiges et à feuilles parcelles sont semblables à des parcelles de points empilés, mais un chiffre est utilisé à la place d'une croix de conserver des informations à propos de la position de chaque valeur au sein de sa section.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_m6')\">2. Splitting the stems</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Pour augmenter la flexibilité de l'écran, chaque tige peut être répétée 2 ou 5 fois, en augmentant le nombre de classes dans la tige et la feuille intrigue de base par un facteur de 2 ou 5.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_m7')\">3. Drawing stem and leaf plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Pour l'analyse des données, la tige et les parcelles de feuilles sont rarement plus informatif que tracés de points empilés, mais ils sont faciles à dessiner à la main.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
