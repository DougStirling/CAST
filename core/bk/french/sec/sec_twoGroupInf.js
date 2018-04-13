var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>En comparant les moyens en deux groupes</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Les intervalles de confiance et les tests d'hypothèses sont utilisées pour évaluer la différence entre les moyennes des deux groupes.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupInf1')\">1. Distn of difference between means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La différence entre les moyennes de deux échantillons provenant d'une population normale a une distribution normale dont la moyenne et l'écart-type peut être trouvé à partir des moyens et s.d.s. population Ceci est la répartition approximative, même lorsque les populations sont non-normale.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupInf2')\">2. Distribution of estimation error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Lorsque la différence entre les moyennes des échantillons est utilisée pour estimer la différence entre les moyennes de la population sous-jacente, il est susceptible d'être une erreur. La distribution des erreurs est approximativement normale de moyenne 0. Une formule de son écart-type est donné.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupInf3')\">3. CI for difference between means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un intervalle de confiance de 95% est donnée pour la différence entre les deux moyennes de population. Ses propriétés sont démontrées.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupInf4')\">4. Testing a hypothesis</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un test d'hypothèse est développé pour tester si deux moyens de groupe sont les mêmes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupInf5')\">5. One-tailed tests for differences</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si l'hypothèse alternative est pour une moyenne particulière à être plus grande, alors la p-valeur pour le test se trouve de seule queue de la distribution de t.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
