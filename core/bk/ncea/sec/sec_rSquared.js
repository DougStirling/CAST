var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Coefficient of determination</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Many teachers discuss how to interpret the value of R<sup>2</sup> without explaining how its value arises. This section provides an optional description of R<sup>2</sup> in terms of sums of squares.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('rSquared1')\">1. Sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Variability is often described in terms of sums of squares. The residual sum of squares summarises response variability that is unexplained by the explanatory variable. Sums of squares also describe total and explained variation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('rSquared2')\">2. Coefficient of determination</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The relative sizes of the explained and residual sums of squares holds information about the strength of the relationship. The coefficient of determination describes the proportion of total variation that is explained.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
