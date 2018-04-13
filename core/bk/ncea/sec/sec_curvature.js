var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Nonlinear relationships (advanced)</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('curvature1')\">1. Transformations and correlation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The correlation coefficient does not adequately describe the strength of a nonlinear relationship. Transforming the variables to linearise the relationship helps.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('curvature2')\">2. Transformations and models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If a relationship is nonlinear, a linear model can often be fitted to transformed response or explanatory variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('curvature3')\">3. Quadratic models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An alternative solution to nonlinearity is to fit a quadratic curve the data, again using the principle of least squares.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('curvature4')\">4. Dangers of extrapolation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Since the form of a relationship is unknown beyond the range of x-values in the data, it is always dangerous to extrapolate.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_curvature1')\">5. Exercise: Regression problems</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks you to identify the difficulties with using the least squares line to predict Y at a given X from the data in a displayed scatterplot (an outlier, curvature, a high-leverage point or extrapolation).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_curvature2')\">6. Exercise: Transformations of X and Y</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>You are asked whether a logarithmic transformation of X or Y might linearise the data in a scatterplot (and also give constant variability).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_curvature3')\">7. Exercise: Predictions and nonlinearity</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, a least squares line is fitted to a model that involves log(X) and/or log(Y). You are asked to use the equation of the line to predict Y from X.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
