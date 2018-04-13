var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Indicator variables for 3+ groups</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indicators1')\">1. Model for several groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The normal model for several groups has the same standard deviation in each group but allows the means to be different.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indicators2')\">2. Indicator variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Different means in g groups can be modelled with (g-1) indicator variables whose GLM coefficients are differences between the group means that of a baseline group.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indicators3')\">3. Least squares estimates</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The least squares estimates for the GLM with indicator variables for the groups result in fitted values that are the group sample means.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indicators4')\">4. Tests for separate indicator variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>T-tests for the coefficients of separate indicator variables test whether the mean of that group equals the mean of the baseline group. This may make sense if the baseline group is a control treatment, but in general there are too many pairwise comparisons to rely on the results of separate t-tests.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indicators5')\">5. Explained and residual sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Testing for equal group means requires simultaneous testing of the coefficients of the (g-1) indicator variables using analysis of variance. The explained and residual sums of squares describe between-group and within-group variation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indicators6')\">6. Coefficient of determination</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The coefficient of determination is the proportion of response variation that is explained by the groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indicators7')\">7. Anova test for equal group means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An anova table with between-group and within-group sums of squares provides a test for equal group means.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indicators8')\">8. Can groups be combined?</a>&nbsp;&nbsp;&nbsp;<span class='note'>(advanced)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Many parameterisations are possible for the model with arbitrary group means. An example is given that allows testing of whether a subset of group means are equal.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
