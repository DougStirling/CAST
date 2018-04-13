var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Least squares for Y vs (X and Z)</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrsTwo1')\">1. More than one explanatory variable</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In many data sets, two or more explanatory variables could potentially affect the response. Using two or more explanatory variables may give more accurate predictions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrsTwo2')\">2. Three-dimensional scatterplots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Data sets with two explanatory variables and a response can be effectively displayed in a rotating 3-dimensional scatterplot.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrsTwo3')\">3. Linear equation and least squares plane</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The simple linear model can be extended by adding another linear term involving a second explanatory variable. This equation represents a plane in 3-dimensions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrsTwo4')\">4. Understanding the parameters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The intercept is the predicted y-value when x and z are zero. The two slope parameters give the predicted change in y when x and z increase by one.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrsTwo5')\">5. Fitted values and residuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The linear model provides predictions at all x- and z-values. The prediction for the x- and z-value corresponding to the i'th data point is its fitted value and the difference between this and the recorded y-value is its residual.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrsTwo6')\">6. Estimating the parameters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Parameter estimates that result in small residuals are good.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrsTwo7')\">7. Least squares estimation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An objective estimation method is to minimise the sum of squared residuals -- the principle of least squares.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrsTwo8')\">8. Interpreting the coefficients</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The slope coefficients give the predicted effect of changes to one variable, but only when the other variable remains the same.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
