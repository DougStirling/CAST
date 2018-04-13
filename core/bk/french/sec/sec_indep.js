var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Indépendence</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Les relations entre les variables catégorielles peuvent être décrits dans des termes similaires à ceux-ci utilisé pour des variables numériques.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep1')\">1. Association between categorical variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Deux variables catégorielles, X et Y, sont associés lorsque la distribution conditionnelle de Y sachant X = x est différent pour différentes valeurs de x. Connaissant la valeur de X vous dit donc quelque chose sur Y.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep2')\">2. Independence of categorical variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Lorsque la distribution conditionnelle de Y est le même pour toutes les valeurs de X, les variables sont appelées indépendant. Ce cas particulier est d'une importance pratique.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep3')\">3. Independence from samples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'indépendance est une propriété de la population. Pour évaluer l'indépendance d'une table échantillon d'urgence, le nombre de cellules observées sont comparées à celles estimées à partir d'un modèle à l'indépendance.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep4')\">4. Testing for independence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La somme brute de différences au carré entre le nombre de cellules observés et estimés est pas une bonne statistique de test.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep5')\">5. Chi-squared test statistic</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'> La statistique de chi-carré est une somme modifiée de différences au carré qui a une distribution standard (une distribution chi-carré) quand il est l'indépendance.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep6')\">6. P-value for chi-squared test</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La statistique du chi-carré peut être utilisé pour trouver une p-valeur pour l'indépendance de test. La p-valeur n'a interprétation et propriétés similaires à p-valeurs pour tous les autres tests d'hypothèses.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep7')\">7. Examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le test du chi-carré est appliqué à quelques ensembles de données réelles. Lorsque les variables sont révélés être associés, la nature de la relation est décrite à partir d'une comparaison entre le nombre de cellules observées et estimées.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep8')\">8. Comparing groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le test du chi carré évalue l'indépendance de deux variables catégoriques. Il est également utilisé pour tester si une variable catégorique a la même répartition en plusieurs groupes.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
