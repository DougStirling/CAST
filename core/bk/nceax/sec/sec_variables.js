var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Variables and individuals</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_structures1')\">1. Data structures</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Examples showing that the same 'data structure' can apply to many contexts.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_structures2')\">2. Variables and individuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Illustration of variables and individuals in a data set.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_structures3')\">3. Types of variable</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Definitions of numerical and categorical variables. Example representing numerical variables and a categorical variable on a map.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
