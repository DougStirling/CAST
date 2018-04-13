var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Least squares</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_leastSqrs_b1')\">1. Predicting Y from X</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this diagram, you can sketch a curve going close to the crosses on a scatterplot and use it to predict Y from X.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_leastSqrs2')\">2. Slope and intercept of straight line</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram illustrates the meaning of the intercept and slope of a line.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_leastSqrs3')\">3. Predicting Y from linear model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows a line on a scatterplot and illustrates how its equation can be used to predict Y from X.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_leastSqrs4')\">4. Fitted values and residuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>On this scatterplot, you can click on crosses to display actual and fitted values and residuals.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_leastSqrs5')\">5. Target of small residuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows all residuals from a potential model as vertical lines on a scatterplot and allows the regression line to be dragged to make the residuals 'small'.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_leastSqrs6')\">6. Least squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The squared residuals are displayed as squares on a scatterplot and the regression line can be dragged to minimise their total area.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_leastSqrs7')\">7. Outliers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This example illustrates an outlier and its effect. (The data are from cities in the USA and the crosses are linked to a map of the country. From this, it is clear that one city's latitude has been mistyped.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_leastSqrs8')\">8. Residual plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows a residual plot that is linked to a scatterplot of the raw data. Curvature is clearer in the residual plot.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_leastSqrs9')\">9. Predicting Y and predicting X</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows that minimising the resid ssq for predicting Y from X gives a different line from that for predicting X from Y. (A line can be dragged and both types of residual sum of squares are displayed to show that they are minimised by different lines.)</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
