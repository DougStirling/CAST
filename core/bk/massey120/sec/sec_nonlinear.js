var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Nonlinear relationships</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation5')\">1. Correlation and nonlinear relationships</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The correlation coefficient is only a good measure of the strength of a relationship if the points in a scatterplot are scattered round a straight line, not a curve.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('curvature1')\">2. Transformations and correlation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The correlation coefficient does not adequately describe the strength of a nonlinear relationship. Transforming the variables to linearise the relationship helps.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('curvature2')\">3. Transformations and models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If a relationship is nonlinear, a linear model can often be fitted to transformed response or explanatory variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('curvature3')\">4. Quadratic models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An alternative solution to nonlinearity is to fit a quadratic curve the data, again using the principle of least squares.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('curvature4')\">5. Dangers of extrapolation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Since the form of a relationship is unknown beyond the range of x-values in the data, it is always dangerous to extrapolate.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('smoothing6')\">6. Lowess smoothing of scatterplots</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A nonlinear relationship can be summarised with a smooth curve based on fitting least squares lines to 'local' points.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
