var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Blocs randomisés</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randBlock1')\">1. Generalising the idea of paired data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans certains ensembles de données, les valeurs se présentent dans des blocs de 3 ou plus apparentées mesures. Bloc randomisé et les données de mesure sont répétées de ce formulaire.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randBlock2')\">2. Importance of using block information</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ignorant le blocage de valeurs perd des informations importantes à propos de la différence entre les traitements. En comparant les traitements séparément contre un traitement de référence utilisant les différences appariées peut être possible.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randBlock3')\">3. Data with no baseline treatment</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si il n'y a pas de traitement de référence à laquelle comparer les autres mesures dans chaque bloc, il est possible de tester simultanément si tous les moyens de traitement sont égaux. Encore une fois, en ignorant les blocs perd des informations importantes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randBlock4')\">4. Randomised block designs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les données de cette forme se pose souvent d'une expérience en blocs aléatoires dans lequel les unités expérimentales se produisent dans les blocs et les traitements connexes sont répartis de façon aléatoire dans chaque bloc.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randBlock5')\">5. Model for randomised blocks</a>&nbsp;&nbsp;&nbsp;<span class='note'>(facultatif)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bien que les blocs et les traitements se posent de manière différente, ils sont modélisées de manière similaire. Dispositif d'affichage en 3 dimensions des données représente les deux blocs et les traitements de la même manière.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randBlock6')\">6. Removing block effects</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'> La variation entre les blocs peut être éliminé par l'addition / soustraction d'une valeur pour chaque bloc à bloc des moyens de faire toute égal. Cela réduit la valeur résiduelle (inexpliquée) somme des carrés.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randBlock7')\">7. Sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La somme totale des carrés peut être divisée en sommes de carrés pour les blocs et les traitements, et une somme des carrés des résidus.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randBlock8')\">8. Anova table and examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une table d'analyse de variance montre ces sommes de carrés et de degrés de liberté associés. Le rapport F pour les traitements de la table est la base d'un test de moyens d'égalité de traitement. Plusieurs exemples sont donnés.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
