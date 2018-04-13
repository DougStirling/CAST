var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>All-or-nothing anova</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegnAnova1')\">1. Components of variation for Y vs X and Z</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The difference between each response value and the overall mean can be split into a component explained by the explanatory variables and a residual.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegnAnova2')\">2. Sums of squares for Y vs X and Z</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The total, regression and residual sum of squares contain information about how well the explanatory variables explain variability in the response. The coefficient of determination is a useful summary statistic.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegnAnova3')\">3. F test for regression of Y vs X and Z</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The ratio of the mean regression and residual sums of squares has an F distribution if the response is unrelated to the explanatory variables but is larger if they are related. It can be used as a test statistic for whether there is a relationship.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegnAnova4')\">4. All-or-nothing F test for any GLM</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A similar F test can simultaneously test whether all slope parameters in a GLM are zero.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegnAnova5')\">5. Different interpretations of R-sqr and F</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The coefficient of determination, R-sqr, describes the proportion of response variation that is explained by the model. The F ratio describes the strength of evidence for there being any relationship at all. In large samples, R-sqr can be small even when F is large.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
