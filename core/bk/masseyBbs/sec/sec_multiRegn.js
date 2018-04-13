var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Multiple regression</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegn1')\">1. More than one explanatory variable</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In many data sets, two or more explanatory variables could potentially affect the response. Using two or more explanatory variables may give more accurate predictions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegn2')\">2. Multiple regression equation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simple linear model with a single explanatory variable can be extended with extra terms to explain the additional effect of other explanatory variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('glm5')\">3. Interpreting coefficients</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The slope coefficient associated with an explanatory variable describes its effect if all other variables are held constant. It may have a different sign from the correlation coefficient between the variable and the response.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('glm6')\">4. Standard errors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The error standard deviation can be estimated from the residual sum of squares. A simple matrix equation uses this estimate to find the standard errors of the least squares estimates.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('glm7')\">5. Inference for general linear models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The significance of the individual parameters can be tested, but each such test assumes that all other variables are retained in the model.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
