var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>The general linear model</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('glm1')\">1. General linear model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The linear models with one and two explanatory variables can be generalised to include p explanatory variables. The parameters can be estimated by least squares. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('glm2')\">2. Describing the simple linear model with matrices</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A normal linear model with a single explanatory variable can be expressed in a matrix equation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('glm3')\">3. General linear model with matrices</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When the linear model is generalised to allow any number of explanatory variables, a similar matrix equation describes the model.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('glm4')\">4. Least squares with matrices</a>&nbsp;&nbsp;&nbsp;<span class='note'>(advanced)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simple matrix equation provides the least squares estimates of all parameters of the general linear model.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('glm5')\">5. Interpreting coefficients</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The slope coefficient associated with an explanatory variable describes its effect if all other variables are held constant. It may have a different sign from the correlation coefficient between the variable and the response.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('glm6')\">6. Standard errors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The error standard deviation can be estimated from the residual sum of squares. A simple matrix equation uses this estimate to find the standard errors of the least squares estimates.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('glm7')\">7. Inference for general linear models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>95% confidence intervals can be found from the parameter estimates and their standard errors. The significance of the individual parameters can also be tested, but each such test assumes that all other variables are retained in the model.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
