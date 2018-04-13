var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Structures de données standard</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p><span style='color:red;'>(Cliquez sur un titre pour afficher la page.)</span></p> <p>La même boîte à outils de méthodes statistiques peut être appliquée aux données à partir d'un large éventail de contextes.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures1')\">1. Variables et individus</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La plupart des ensembles de données contiennent une ou plusieurs mesures de chacune d'une collection de «individus» (également appelés «cas» ou «unités»).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures2')\">2. Types de variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les variables sont classées en variables numériques et catégorielles. Une classification plus fine est également esquissée.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures3')\">3. Les variables catégorielles et les groupes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une variable catégorique peut être utilisé pour diviser les «individus» en groupes. De manière équivalente, les données groupées peuvent être représentées dans une matrice de données à une variable catégorique.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures4')\">4. Définir de nouvelles variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Parfois, un rapport ou une différence de deux variables dans une matrice de données est plus facile à interpréter que les variables d'origine.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures5')\">5. Temps-ordre de données</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans certaines matrices de données, les lignes sont ordonnée dans le temps.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures6')\">6. Multi-niveaux des données</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avancé)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Parfois, l'information est disponible à la fois le groupe et au niveau individuel - les données multi-niveaux. Ces données sont le plus naturellement stockées dans deux matrices de données.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures7')\">7. Structure de données et la méthode statistique</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'analyse statistique est spécifique à la structure des données (par exemple les types de variables dans la matrice de données). CAST commence avec des méthodes descriptives pour explorer les données; il se déplace ensuite à des méthodes déductives qui tiennent compte de l'aléatoire dans les données.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
