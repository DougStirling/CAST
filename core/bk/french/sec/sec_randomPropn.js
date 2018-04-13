var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Distribution de l'échantillon proportion</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Ensembles de données catégoriques sont généralement résumées par les proportions dans les catégories. Pour les données de l'échantillon, ces proportions sont variables aléatoires et ont des distributions.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomPropn1')\">1. Proportion and probability</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La proportion de la population dans une catégorie est appelée sa probabilité. Les proportions et les probabilités peuvent être obtenus à partir de variables catégoriques et numériques.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomPropn2')\">2. Properties of counts and proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La proportion de l'échantillon est une statistique qui varie d'un échantillon à. Le nombre d'échantillons dans une catégorie est également aléatoire avec une distribution discrète.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomPropn3')\">3. Binomial distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le nombre d'échantillons dans une catégorie a une distribution standard appelée une loi binomiale de paramètres n et π.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomPropn4')\">4. Binomial probability examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La distribution binomiale peut être utilisée pour trouver des probabilités relatives aux chiffres de l'échantillon.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomPropn5')\">5. Normal approximation to binomial</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Lorsque la taille de l'échantillon est grande, la distribution du nombre d'échantillons dans une catégorie devient proche d'une distribution normale.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomPropn6')\">6. Normal approximation examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Lorsque la taille de l'échantillon est grande, une approximation normale de la distribution binomiale peut être utilisée pour trouver des probabilités binomiales.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
