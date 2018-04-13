var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Missing treatments</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('missing1')\">1. Parameters that cannot be estimated</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If treatments are missing when there are two or more controlled factors, some interaction parameters cannot be estimated.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('missing2')\">2. Inference with missing treatments</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Missing treatments often result in explained sums of squares that depend on the order of adding terms to the model so there may be several possible anova tables. The marginal sum of squares for each term can be used to help find the best model.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('missing3')\">3. Missing treatments in block designs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If treatments are missing in some blocks of a randomised block design, the interactions between blocks and factors cannot be fully estimated. However if it is assumed that there is no block-treatment interaction, the effects of the controlled factors can usually still be estimated.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
