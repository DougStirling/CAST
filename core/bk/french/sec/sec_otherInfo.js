var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'> Autre information</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('otherInfo1')\">1.  Navigateurs et Java</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les versions récentes des principaux navigateurs supportent CAST, mais vous aurez besoin d'installer séparément le support Java.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('otherInfo2')\">2.  Problèmes?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si nous découvrons des problèmes avec l'utilisation de CAST dans les navigateurs particuliers, nous fournirons des informations ici.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('otherInfo3')\">3.  Impression</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si un e-livre a été écrit avec des versions sommaires de ses pages, les pages de résumé dans un chapitre peuvent être imprimés ensemble.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('otherInfo4')\">4. Modifications récentes aux CAST</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Informations sur les changements majeurs dans les différentes versions de CAST.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('otherInfo5')\">5. Développements futurs possibles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Certains plans pour les développements futurs de CAST.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
