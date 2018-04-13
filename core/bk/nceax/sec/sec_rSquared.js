var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Coefficient of determination</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_rSquared1')\">1. Sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The residual, total and explained sums of squares describe unexplained, overall and explained variation in the response. They can all be described as sum of squared vertical distances on a scatterplot. This page shows these vertical distances on a scatterplot.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_rSquared2')\">2. Coefficient of determination</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The relative sizes of the explained and residual sums of squares holds information about the strength of the relationship. The coefficient of determination describes the proportion of total variation that is explained.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_rSquared3')\">3. Examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A few data sets are shown and the coefficient of determination is evaluated and interpreted.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
