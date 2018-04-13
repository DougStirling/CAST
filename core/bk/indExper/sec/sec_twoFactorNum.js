var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Numerical factors</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoFactorNum1')\">1. Categorical model for numerical factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Numerical factors can be modelled as though they were categorical but the resulting relationship may not be 'smooth'.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoFactorNum2')\">2. Linear terms for factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the controlled factors in an experiment are numerical, the response mean can be modelled using linear terms in the two variables. This model corresponds to a plane in 3-dimensions and can be fitted by least squares.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoFactorNum3')\">3. Analyisis of variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The reductions in the residual sum of squares from adding a linear term for each factor, then generalising it to a categorical term are explained sums of squares. They can be used in an analysis of variance table to test whether the two factors affect the response and to test for curvature in their effects.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoFactorNum_i4')\">4. Interaction between numerical factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Interaction occurs when the effect of X on the mean response is different for different values of Z. If X and Z are numerical, adding a term with the product of X and Z to the model may explain the interaction.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoFactorNum5')\">5. Numerical-categorical interaction</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When X is numerical and Z is categorical, interaction can be modelled with a separately adjustable regression line for each value of Z.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoFactorNum6')\">6. Quadratic terms</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Replacing a linear term by a quadratic allows some curvature without the full flexibility of a categorical term. Quadratic models will be fully investigated in a later chapter.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
