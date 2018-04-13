var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Multiple regression</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegn1')\">1. More than one explanatory variable</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In many data sets, two or more explanatory variables could potentially affect the response. Using two or more explanatory variables may give more accurate predictions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegn2')\">2. Multiple regression equation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simple linear model with a single explanatory variable can be extended with extra terms to explain the additional effect of other explanatory variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegn3')\">3. Interpreting coefficients</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The slope coefficient associated with an explanatory variable describes its effect if all other variables are held constant. It may have a different sign from the correlation coefficient between the variable and the response.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegn4')\">4. Scatterplot of three variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The relationship between a response variable and two explanatory variables can be effectively displayed in a rotating 3-dimensional scatterplot.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegn5')\">5. Displayng the linear equation for Y vs X and Z</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The equation of a linear model for Y in terms of X and Z can be displayed as a plane in 3-dimensions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegn6')\">6. Fitted values and residuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The residuals are vertical distances from the crosses on a 3-dimensional scatterplot to the plane representing the model.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegn7')\">7. Least squares estimation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An objective estimation method is to minimise the sum of squared residuals -- the principle of least squares.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
