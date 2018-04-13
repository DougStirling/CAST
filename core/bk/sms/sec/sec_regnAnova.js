var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Anova for simple linear model</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnAnova1')\">1. Components for regression model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In regression data, the difference between the response and its overall mean can be split into an explained component and a residual.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnAnova2')\">2. Sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The total sum of squares equals the explained sum of squares plus the residual sum of squares.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnAnova3')\">3. Coefficient of determination</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The relative sizes of the explained and residual sums of squares holds information about the strength of the relationship. The coefficient of determination describes the proportion of total variation that is explained.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnAnova5')\">4. Analysis of variance test</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The F ratio can be used to test whether the variables are related (i.e. to test whether the model slope is zero). Since the F ratio is the square of the t statistic for this test, the conclusions for the F and t tests are identical.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
