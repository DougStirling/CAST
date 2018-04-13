var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Factorial experiments with 2 levels</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoNExper1')\">1. Factors with two levels</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If several factors must be assessed, factorial designs with more than 2 levels per factor usually involve too many runs of the experiment.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoNExper2')\">2. Main effects</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The factor levels can be coded as -1 and +1 and treated as numerical variables. The main effects for the factors are differences between the response means at the two levels.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoNExper3')\">3. Interactions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Interactions can be modelled with terms that are products of the +/-1 values of the coded main effect variables. The main effects and interactions are orthogonal in a factorial design.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoNExper4')\">4. Analysis of variance table</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If there are no replicates, the full model with all interactions has no residual degrees of freedom. Some high-order interactions must be negligible (assumed to be zero) before tests can be performed.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoNExper5')\">5. Picking important effects</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A half-normal probability plot of the main effects and interactions can guide the choice of terms to contribute to the residual sum of squares.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoNExper6')\">6. Describing factor effects</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Two-dimensional plots of the mean response against each factor can display the main effects and interactions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoNExper7')\">7. Designs with centre points</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If all factors are numerical, an alternative to replicating the complete design or assuming that high-order interactions are negligible is to conduct several runs of the experiment at an average level for all factor. This allows tests of all interactions and also provides a test for linearity.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
