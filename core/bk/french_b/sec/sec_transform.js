var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Transformations</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transform_b1')\">1. Linear transformations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Transformations lin&eacute;aires de donn&eacute;es influent sur l'&eacute;chelle sur l'axe des affichages graphiques, mais ne sont pas contraires changer la forme de la distribution des valeurs.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transform_b2')\">2. Log transformations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Transformations non lin&eacute;aires changer la forme de la distribution des valeurs plus profond&eacute;ment. Une transformation logarithmique peut aider &agrave; d&eacute;tecter les mod&egrave;les dans les ensembles de donn&eacute;es tr&egrave;s oblique.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transform3')\">3. Quand utiliser une transformation logarithmique?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Transformations logarithmiques sont plus utiles pour &laquo;quantit&eacute;&raquo; des donn&eacute;es qui couvrent plusieurs ordres de grandeur.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transform4')\">4. Puissance transformations</a>&nbsp;&nbsp;&nbsp;<span class='note'>(avanc&eacute;)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Transformations de puissance sont une famille plus souple des transformations non lin&eacute;aires qui sont utiles dans l'exploration de donn&eacute;es.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transform5')\">5. Effet de transformations sur les écrans</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'effet des transformations de la puissance sur l'asym&eacute;trie des donn&eacute;es est &eacute;vidente dans un large &eacute;ventail d'affichages graphiques.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
