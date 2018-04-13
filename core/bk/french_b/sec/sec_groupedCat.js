var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>En comparant des groupes</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupedCat1')\">1. Tableaux de contingence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les donn&eacute;es cat&eacute;goriques recueillies aupr&egrave;s des diff&eacute;rents groupes peuvent &ecirc;tre affich&eacute;es dans un tableau de contingence. Il contient un tableau des fr&eacute;quences simples pour chaque groupe.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupedCat_b2')\">2. Contingency table examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Tableaux de contingence surgissent parfois &agrave; partir d'exp&eacute;riences. Les donn&eacute;es recueillies &agrave; partir d'enqu&ecirc;tes sont souvent pr&eacute;sent&eacute;es dans des tableaux de contingence.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupedCat_b3')\">3. Bar charts using proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Il est plus facile de comparer des groupes, si les graphiques &agrave; barres sont dessin&eacute;es &agrave; partir des proportions dans chaque groupe, plut&ocirc;t que les fr&eacute;quences.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupedCat_b4')\">4. Stacked bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'empilement des barres de chaque graphique le rend facile de comparer les groupes. Graphiques &agrave; barres empil&eacute;es sont particuli&egrave;rement efficaces pour ordinale des donn&eacute;es cat&eacute;goriques.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupedCat_b5')\">5. Two special cases</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Lorsque la variable n'a que deux cat&eacute;gories, les graphiques &agrave; barres empil&eacute;es peut &ecirc;tre simplifi&eacute;e. Un exemple est &eacute;galement donn&eacute;e lorsque le groupe forme une s&eacute;rie de temps.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
