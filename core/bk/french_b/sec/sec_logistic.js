var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>R&eacute;gression logistique</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Moindres carr&eacute;s est utilis&eacute;e pour pr&eacute;dire une r&eacute;ponse num&eacute;rique &agrave; partir d'une variable num&eacute;rique explicatives. Lorsque la variable de r&eacute;ponse est cat&eacute;gorique, l'objectif est de pr&eacute;dire la <span style='font-weight:bold;'>proportion</span> de chaque cat&eacute;gorie de r&eacute;ponse, et une analyse diff&eacute;rente est n&eacute;cessaire.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('logistic_b1')\">1. Categorical responses</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Avec une r&eacute;ponse cat&eacute;gorique et num&eacute;riques variable explicative, les graphiques &agrave; barres empil&eacute;es &agrave; chaque X sont un affichage efficace.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('logistic_b2')\">2. Fitted values and predictions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>En utilisant une ligne droite de d&eacute;crire comment la proportion dans une cat&eacute;gorie d&eacute;pend de X n'est pas appropri&eacute;e. Une courbe est n&eacute;cessaire.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('logistic3')\">3. Courbe logistique</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un &laquo;logistiques&raquo; courbe peut &ecirc;tre utilis&eacute;e pour mod&eacute;liser la fa&ccedil;on dont une proportion d&eacute;pend de X.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('logistic_b4')\">4. Obtaining a good fit</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une courbe logistique est &eacute;quip&eacute; d'un ensemble de donn&eacute;es par exemple.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
