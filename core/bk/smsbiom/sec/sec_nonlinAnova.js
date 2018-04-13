var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Trying a quadratic curve</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('nonlinAnova1')\">1. Linear and quadratic models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Linearity can be assessed by comparing the fits of a linear and quadratic model. The total sum of squares can be split into linear, quadratic and residual sums of squares.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('nonlinAnova2')\">2. Understanding the sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The quadratic sum of squares compares the fit of a linear and quadratic model and therefore holds information about whether there is curvature in the data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('nonlinAnova3')\">3. Testing for linearity</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An F ratio comparing the quadratic and residual mean sums of squares can be used to test for linearity.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
