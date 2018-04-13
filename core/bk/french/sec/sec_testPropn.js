var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Test d'hypothèse pour les proportions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPropn1')\">1. Inference about parameters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Lorsque les données sont un échantillon aléatoire, les hypothèses nulle et alternative sont généralement exprimés en termes de paramètres de la population. Pour les échantillons catégoriques, les hypothèses se réfèrent aux probabilités des catégories.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPropn2')\">2. P-value for testing proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La valeur p pour tester une proportion est la probabilité d'obtenir un tel nombre «extrême» de succès lorsque l'hypothèse nulle est titulaire. Il peut être trouvé à partir de la distribution binomiale.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPropn3')\">3. Another example of testing a proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un exemple montre comment utiliser une distribution binomiale pour trouver la valeur p pour un test.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPropn4')\">4. One- and two-tailed tests</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si les valeurs dans les deux extrémités de la distribution binomiale soutiennent l'hypothèse alternative, la probabilité de queue doit être doublé pour donner la p-valeur pour le test.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPropn5')\">5. Tests based on normal approximation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Lorsque la taille de l'échantillon est grande, une approximation normale de la distribution binomiale peut être utilisée pour trouver le p-valeur pour un test d'hypothèse.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPropn6')\">6. Statistical distance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La distance statistique entre une estimation et la valeur de paramètre hypothétique est la différence divisée par l'erreur-type de l'estimation. Il doit avoir environ une distribution normale standard si l'hypothèse nulle est vraie.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPropn7')\">7. Tests based on statistical distance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La valeur p pour tester une proportion peut être évaluée comme une zone de queue d'une distribution normale standard correspondant à des valeurs plus «extrêmes» que la distance statistique entre p et π.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
