var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>En comparant des groupes</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupedCat1')\">1. Tableaux de contingence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les données catégoriques recueillies auprès de différents groupes peuvent être présentés dans un tableau de contingence. Il contient une table de fréquence simple pour chaque groupe.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupedCat2')\">2. Exemples de tableaux de contingence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les tableaux de contingence surgissent parfois à partir d'expériences. Les données recueillies à partir d'enquêtes sont souvent présentées dans des tableaux de contingence.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupedCat3')\">3. Diagrammes à barres en utilisant proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Il est plus facile de comparer des groupes si les graphiques à barres sont tirées des proportions dans chaque groupe plutôt que les fréquences.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupedCat4')\">4. Graphiques à barres empilées</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Empiler les barres dans chaque graphique à barres, il est plus facile de comparer les groupes. Graphiques à barres empilées sont particulièrement efficaces pour les données catégoriques ordinales.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupedCat5')\">5. Deux cas particuliers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Lorsque la variable a seulement deux catégories, les graphiques à barres empilées peuvent être simplifiée. Un exemple est également donnée où le groupement forme d'une série temporelle.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
