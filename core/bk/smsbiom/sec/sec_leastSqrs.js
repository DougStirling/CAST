var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Least squares</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs2')\">1. Linear models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A straight line can often be used to predict one variable from another.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs3')\">2. Fitted values and residuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The difference between the actual value of Y and the value predicted by a line is called a residual. Small residuals are clearly desirable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs4')\">3. Least squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sum of squared residuals describes the accuracy of predictions from a line. The method of least squares positions the line to minimise the sum of squared residuals.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('curvature3')\">4. Quadratic models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An alternative solution to nonlinearity is to fit a quadratic curve the data, again using the principle of least squares.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
