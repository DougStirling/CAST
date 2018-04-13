var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Numerical and categorical explanatory variables</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('mixedModel1')\">1. Model for X and 2 groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simple linear model for Y against X can be augmented with a 0/1 indicator variable distinguishing the groups. The model is a GLM and can be represented by two parallel lines on the scatterplot of Y vs X.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('mixedModel2')\">2. Inference for X and 2 groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A t-test for whether the coefficient of the indicator variable is zero tests whether the groups are the same.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('mixedModel3')\">3. Model for X and 3+ groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If there are g groups, (g-1) indicator variables can be added to the simple linear model. This corresponds to g parallel lines for the groups on the scatterplot of Y vs X.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('mixedModel4')\">4. Inference for X and 3+ groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Analysis of variance provides a single test for differences between the groups. If X is not orthogonal to the groups, there are two different anova tables corresponding to the two orders of adding X and the indicator variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures3')\">5. Categorical variables and groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Observations that are split into groups can be equivalently considered as a single data set with a categorical variable defining group membership.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('mixedModel6')\">6. Model for 2 categorical variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Data with two categorical explanatory variables often arise from designed experiments. Two sets of indicator variables can be used to model the effects of the two variables in a GLM.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('mixedModel7')\">7. Inference for 2 categorical variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The effects of the categorical explanatory variables can be tested with analysis of variance. The categorical explanatory variables are usually orthogonal in designed experiments and a single anova table can test both variables. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('mixedModel8')\">8. Mixtures of explanatory variable types</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The models in this section can be extended with terms for any mixture of numerical and categorical explanatory variables. If one or more categorical explanatory variables has 3+ levels, F-tests based on Type 3 sums of squares should be used to test significance instead of t-tests for individual parameters.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
