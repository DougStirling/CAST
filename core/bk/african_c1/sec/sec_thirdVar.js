var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Representing a third variable</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Relationships between three or more variables are often hard to understand,  		but a few simple extensions to the basic scatterplot can help when there are  		three variables.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multivariate_b1')\">1. Representing a third variable</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A third numerical variable can be represented in a scatterplot by use of different symbols or colours.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multivariate2')\">2. Rotating 3D scatterplots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Three numerical variables can be displayed in a 3-dimensional scatterplot; this may be rotated to help understand the relationships in the data.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
