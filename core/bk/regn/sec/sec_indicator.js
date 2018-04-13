var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Indicator variable for two groups</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indicator1')\">1. Model and hypotheses</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>We assume that the data arise as random samples from two normal populations with the same standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indicator2')\">2. Indicator variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A linear model with an explanatory variable whose value is 0 or 1 depending on the group is equivalent to the model with separate parameters for each of the two group means.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indicator3')\">3. Least squares estimates</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The least squares estimates for the GLM with an indicator variable give fitted values that are the two group means.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indicator4')\">4. Test for equal group means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The t-test for whether the coefficient of the indicator variable is zero is identical to the standard t-test for comparing two sample means.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indicator5')\">5. Sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The explained sum of squares can be interpreted as the sum of squares between groups; the residual sum of squares is the sum of squares within groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indicator6')\">6. Anova test for equal means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The anova F test for equal group means gives the same p-value and conclusion as the standard t test.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
