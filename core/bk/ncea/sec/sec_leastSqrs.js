var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Least squares</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs1')\">1. Predicting Y from X</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A line or curve is useful for predicting the value of Y from a known value of X.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs2')\">2. Linear models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A straight line can often be used to predict one variable from another.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs3')\">3. Fitted values and residuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The difference between the actual value of Y and the value predicted by a line is called a residual. Small residuals are clearly desirable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs4')\">4. Least squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sum of squared residuals describes the accuracy of predictions from a line. The method of least squares positions the line to minimise the sum of squared residuals.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs5')\">5. Curvature and outliers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A linear model is not appropriate if there are either curvature or outliers in a scatterplot of the data. Outliers should be carefully examined.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs6')\">6. Residual plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Outliers and curvature in the relationship are often displayed more clearly in a plot of residuals.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs7')\">7. Predicting Y and predicting X</a>&nbsp;&nbsp;&nbsp;<span class='note'>(advanced)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Least squares does not treat Y and X symmetrically. The best line for predicting Y from X is different from the best line for predicting X from Y.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs1')\">8. Exercise: Pick the explanatory variable and response</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For several scenarios, you must identify the explanatory variable and response, then state whether the data are observational or experimental and whether the relationship is causal.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs2')\">9. Exercise: Draw a straight line</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise shows the equation of a straight line and asks you to sketch it.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs3')\">10. Exercise: Find the slope and intercept</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercises on this page do the inverse of the previous exercise -- you are shown a straight line and asked to find its equation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs4')\">11. Exercise: Interpret the slope and intercept</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you are asked to select one of four statements that correctly describes the slope or intercept of a least squares line in the context of the data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs5')\">12. Exercise: Find a residual</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise requests the least squares residual for a cross on a scatterplot.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs6')\">13. Exercise: Match data and residual plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you must identify which of four scatterplots is the correct residual plot when a linear model is fitted to a data set.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs7')\">14. Exercise: Predictions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise on this page gives a least squares line and asks for a prediction of the response, given the value of the explanatory variable.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
