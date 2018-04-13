var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Exercises</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs2')\">1. Drawing a straight line</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise shows the equation of a straight line and asks you to sketch it.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs3')\">2. Slope and intercept</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercises on this page do the inverse of the previous exercise -- you are shown a straight line and asked to find its equation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs4')\">3. Interpreting the slope and intercept</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you are asked to select one of four statements that correctly describes the slope or intercept of a least squares line in the context of the data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_regnEst1')\">4. Standard error of slope</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise gives practice in evaluating a 95% confidence interval for a regression model's slope, based on its least squares estimate and standard error.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_regnTest1')\">5. Test for zero slope</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise gives practice with the calculations to evaluate the p-value for testing whether a linear model's slope is zero and interpreting the results.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_curvature1')\">6. Regression problems</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks you to identify the difficulties with using the least squares line to predict Y at a given X from the data in a displayed scatterplot (an outlier, curvature, a high-leverage point or extrapolation).</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
