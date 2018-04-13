var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Numerical factors</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneFactorNum1')\">1. One factor with numerical levels</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the levels of the controlled factor are numerical values -- quantities of some numerical variable -- then we usually expect a 'smooth' relationship between the factor and response.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneFactorNum2')\">2. Linear and quadratic models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The simplest model for a smooth relationship between a numerical factor and response contains a linear term in the factor value. Adding a further quadratic term can model some curvature in the relationship.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneFactorNum3')\">3. Terms and constraints</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Linear and quadratic models correspond to terms added to a model in which the factor does not affect the response. They can be equivalently defined through constraints on the smoothness of the parameters of the most general factor model.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneFactorNum4')\">4. Explained sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The differences between the residual sum of squares of different models for a numerical factor called explained sums of squares and are have degrees of freedom equal to the difference between the unknown parameters of the models.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneFactorNum5')\">5. Anova table and tests</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The explained and residual sums of squares can be presented in an analysis of variance table. The p-values can be used to test whether quadratic or linear relationships are consistent with the data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneFactorNum6')\">6. Equivalence of models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If there are only two levels of the factor, a linear model is equivalent to a model with parameters for each level mean. Similarly, a quadratic model is equivalent to a this general factor model if there are three factor levels.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneFactorNum7')\">7. Numerical factors in other designs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In any model with a numerical factor, its explained sum of squares can be split into linear and nonlinear components. The nonlinear sum of squares can be used to test whether the relationship is linear.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneFactorNum8')\">8. Response surface models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In some applications, we want to find the combination of values of two factors that optimises some response. A model with quadratic terms in the factors and an interaction term is often used.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
