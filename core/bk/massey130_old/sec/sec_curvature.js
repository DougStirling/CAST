var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Nonlinear relationships (advanced)</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('curvature2')\">1. Transformations and models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If a relationship is nonlinear, a linear model can often be fitted to transformed response or explanatory variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('curvature3')\">2. Quadratic models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An alternative solution to nonlinearity is to fit a quadratic curve the data, again using the principle of least squares.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('curvature4')\">3. Dangers of extrapolation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Since the form of a relationship is unknown beyond the range of x-values in the data, it is always dangerous to extrapolate.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
