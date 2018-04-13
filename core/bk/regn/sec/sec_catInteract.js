var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Interactions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('catInteract1')\">1. Interaction between numerical variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Interaction between two numerical variables can be modelled in a GLM with a term involving the product of the variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('catInteract2')\">2. Numerical-categorical interaction</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If there is no interaction between a numerical and categorical explanatory variable, the regression lines for all categories are parallel. If these regression lines are not parallel, then there is interaction. Extra terms can be added to the no-interaction GLM to model the interaction.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('catInteract3')\">3. Inference for num-cat interaction</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The existence of interaction can be tested with a test for whether the parameters for the interaction terms are zero. This can be done with a t-test if there are only 2 categories, but an F-test is needed for more categories.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('catInteract4')\">4. Interaction between categorical variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Indicator variables can be added to the no-interaction GLM to model an interaction between 2 categorical variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('catInteract5')\">5. Inference for categorical interaction</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Testing for interaction is equivalent to testing whether the parameters for the interaction indicator variables are all zero.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('catInteract6')\">6. Interactions with several variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An example is shown with several main effects and interactions.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
