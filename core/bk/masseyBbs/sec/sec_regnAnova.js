var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Coefficient of determination</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnAnova1')\">1. Sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The overall variation in the response can be split into two component. The explained sum of squares summarises response variation that can be explained by X; the residual sum of squares summarises unexplained response variation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnAnova3')\">2. Coefficient of determination</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The relative sizes of the explained and residual sums of squares holds information about the strength of the relationship. The coefficient of determination describes the proportion of total variation that is explained.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
