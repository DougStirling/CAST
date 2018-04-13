var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Structures de donn&eacute;es standard</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p><span style='color:red;'>(Cliquez sur une rubrique pour afficher la page.)</span></p> <p>La m&ecirc;me bo&icirc;te &agrave; outils des m&eacute;thodes statistiques peuvent &ecirc;tre appliqu&eacute;es &agrave; des donn&eacute;es &agrave; partir d'un large &eacute;ventail de contextes.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures_b1')\">1. Variables and individuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La plupart des ensembles de donn&eacute;es contiennent une ou plusieurs mesures de chacun d'une collection des &laquo;individus&raquo; (aussi appel&eacute; &laquo;cas&raquo; ou &laquo;unit&eacute;s&raquo;).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures_b2')\">2. Types of variable</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les variables sont class&eacute;es en variables num&eacute;riques et cat&eacute;gorielles. Une classification plus fine est &eacute;galement esquiss&eacute;.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures3')\">3. Les variables catégorielles et les groupes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une variable cat&eacute;gorique peut &ecirc;tre utilis&eacute; pour diviser les &laquo;individus&raquo; en groupes. De fa&ccedil;on &eacute;quivalente, les donn&eacute;es group&eacute;es peuvent &ecirc;tre repr&eacute;sent&eacute;s dans une matrice de donn&eacute;es avec une variable cat&eacute;gorielle.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures4')\">4. Définir de nouvelles variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Parfois, un rapport ou une diff&eacute;rence de deux variables dans une matrice de donn&eacute;es est plus facile &agrave; interpr&eacute;ter que les variables d'origine.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures_b5')\">5. Time-ordered data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans certains matrices de donn&eacute;es, les lignes sont dans un ordre chronologique.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures_b6')\">6. Multi-level data</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avanc&eacute;)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Parfois, l'information est disponible &agrave; la fois du groupe et au niveau individuel -- multi-niveau des donn&eacute;es. Ces donn&eacute;es sont le plus naturellement stock&eacute;es dans des matrices de donn&eacute;es &agrave; deux.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures7')\">7. Structure de données et la méthode statistique</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'analyse statistique est sp&eacute;cifique &agrave; la structure des donn&eacute;es (ie le type de variable dans la matrice de donn&eacute;es). CAST commence avec des m&eacute;thodes descriptives pour explorer les donn&eacute;es, il passe ensuite &agrave; des m&eacute;thodes d&eacute;ductives qui tiennent compte de l'al&eacute;atoire dans les donn&eacute;es.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
