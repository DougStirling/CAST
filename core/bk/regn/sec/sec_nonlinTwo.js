var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Nonlinear relationships</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('nonlinTwo1')\">1. Linear models for curvature</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A general linear model is linear in its parameters, but not necessarily in the explanatory variables. Models with transformed variables and with quadratic terms are all general linear models.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('nonlinTwo2')\">2. Linearity of quadratic models</a>&nbsp;&nbsp;&nbsp;<span class='note'>(optional)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A model with a linear term and a quadratic term in x is still linear in the parameters and is a general linear model.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('nonlinTwo3')\">3. Polynomial models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Polynomial models have terms involving various powers of x and are flexible ways to model curvature. As the order of the polynomial increases, the curve can become less smooth. Polynomials are usually poor for extrapolation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('nonlinTwo4')\">4. Residual plots to detect nonlinearity</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For detecting curvature when there is more than one explanatory variable, it is better to plot residuals rather than the raw data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('nonlinTwo5')\">5. Partial residual plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If a plot of residuals against X shows curvature, a partial residual plot can give an indication of which nonlinear function of X to use in the model.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('nonlinTwo6')\">6. Model with quadratic in X, linear in Z</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the response in related linearly to Z but nonlinearly to X, a quadratic term in X can be added to the model to explain the curvature. The resulting model corresponds to a curved surface in a 3-dimensional scatterplot.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('nonlinTwo7')\">7. Model with quadratic terms in X and Z</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Quadratic terms in both X and Z can be added, resulting in a surface that is curved in both X and Z directions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('nonlinTwo8')\">8. Visualising least squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The residuals from a quadratic model can be represented as vertical lines from data points to the quadratic surface. If squares are drawn for each residual, least squares means minimising the total area of these squares.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('nonlinTwo9')\">9. Tests for curvature in X and Z</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Curvature can be assessed with t-test about whether the two quadratic parameters are non-zero.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
