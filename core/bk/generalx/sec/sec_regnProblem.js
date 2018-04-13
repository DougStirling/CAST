var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Linear model assumptions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnProblem1')\">1. Assumptions in a normal linear model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page gives examples where the normal linear model assumptions are violated.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnProblem2')\">2. Curvature &mdash; transforming X</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram gives an example where transformation of X can linearise a relationship.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnProblem3')\">3. Curvature and non-constant variance &mdash; transforming Y</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this example, transformation of Y both linearises the relationship and fixes non-constant variance.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnProblem4')\">4. Prediction and transformations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows how predictions of the response can be made from fitted model involving transformed response and explanatory variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnProblem5')\">5. Prediction intervals and transformations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows how prediction intervals for the response can be found from a model fitted to transformed response and explanatory variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnProblem6')\">6. Standardised residuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram simulates data from a linear model and shows that about 5% of standardised residuals are outside +/-2 and very few are outside +/-3. However if the sample size is large, occasionally values a little outside +/-3 are seen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnProblem7')\">7. Outliers and leverage</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows that an outlier may not show up as a large residual if it is a high-leverage point.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnProblem8')\">8. Non-normal errors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A normal probability plot of residuals should be approximately normal if the model assumptions hold. In this page, simulations are used to assess curvature in probability plots for the residuals for 3 data sets. The reasons for the curvature are outliers, curvature and non-constant variance in the 3 examples.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnProblem9')\">9. Correlated errors  (optional)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page does a simulation to help assess the Durbin-Watson statistic applied to the residuals from a linear model fitted to a time series.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
