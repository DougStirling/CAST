var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Simulation (facultatif)</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probSim1')\">1. Probability models and simulation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Probabilité peut être utilisée pour modéliser des situations complexes. Une simulation du modèle consiste à utiliser les probabilités du modèle à générer un exemple de la situation. Répétition de la simulation peut donner un aperçu du comportement du système.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probSim2')\">2. Simulation: Will the best team win?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une simulation démontre que la meilleure équipe est souvent supérieure d'une ligue à la fin de la saison, même si elle a une probabilité beaucoup plus élevée de gagner des matches individuels que toutes les autres équipes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probSim3')\">3. Is there evidence of skill in a league?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une simulation d'une ligue de soccer montre que la propagation de points à la fin d'une saison de football réelle est pas compatible avec toutes les équipes ayant des capacités égales.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probSim4')\">4. Assessing unusual features in data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La variabilité des expositions des populations «réguliers» (telles que les distributions normales) peut être utilisé pour évaluer les fonctionnalités dans un seul ensemble de données, tels que les valeurs aberrantes, clusters ou asymétrie.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probSim5')\">5. Random numbers</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avancé)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les simulations sont basées sur des valeurs générées aléatoirement. Ceux-ci sont généralement fondées sur des nombres aléatoires pour lesquels une valeur comprise entre 0 et 1 est également probable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probSim6')\">6. Generating categorical values</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avancé)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une valeur catégorique aléatoire peut être facilement généré à partir d'un nombre aléatoire entre 0 et 1.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probSim7')\">7. Generating numerical values</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avancé)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Générer des valeurs numériques aléatoires d'une distribution particulière est plus difficile. Cette page décrit une telle méthode.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
