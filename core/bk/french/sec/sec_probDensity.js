var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Densité de probabilité et la probabilité</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity1')\">1. Finite populations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Lors de la sélection au hasard une valeur à partir d'une population de N valeurs différentes, la probabilité d'obtenir une valeur individuelle est de 1 / N. Plus généralement, la probabilité d'échantillonnage d'une valeur dans l'intervalle est la proportion des valeurs de la population dans la gamme.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity2')\">2. Probabilities with infinite populations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La probabilité de tout type de valeur est encore la proportion de ces valeurs dans la population. Il peut également être interprété comme limitant la proportion d'un échantillon de valeurs si la taille de l'échantillon est augmentée indéfiniment.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity3')\">3. Bar charts of discrete probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Populations catégoriques ou discrets infinis peuvent être décrites par des diagrammes à barres des probabilités.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity4')\">4. Probability density functions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Populations numériques continues infinite sont décrits avec un type d'histogramme appelé une fonction de densité de probabilité.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity5')\">5. Normal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les distributions normales sont les populations continus infinis. Une distribution normale est symétrique et ses deux paramètres μ et σ, peut être ajustée pour modifier l'emplacement et la propagation de la distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity6')\">6. Probability and area under the pdf</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Lorsqu'une valeur est échantillonnée à partir d'une population continu infini, la probabilité qu'elle soit comprise entre a et b est égale à l'aire sous la pdf entre ces deux valeurs.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity7')\">7. Properties of probability</a>&nbsp;&nbsp;&nbsp;<span class='note'>(facultatif)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Cette page décrit quelques règles qui sont respectées par les probabilités.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
