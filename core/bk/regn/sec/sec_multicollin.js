var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Multicollinearity of X and Z</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multicollin1')\">1. Correlated explanatory variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When the explanatory variables, X and Z, are correlated, their slope parameters can be estimated less accurately than for uncorrelated explanatory variables covering the same spreads of x- and z-values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multicollin2')\">2. Correlated explanatory variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The variance inflation factors for the slope parameters quantify the increase in their standard errors due to the explanatory variables being correlated.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multicollin3')\">3. Understanding multicollinearity</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The slope coefficient for X is the slope of a slice through the regression plane at any z-value. When X and Z are highly correlated, similar slices of the data contain small ranges of x-values and therefore hold little information about the parameter.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multicollin4')\">4. Understanding multicollinearity (cont)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The position of the least squares plane is most accurately determined near the data. When X and Z are highly correlated, the LS plane can be very variable away from the data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multicollin5')\">5. F- and t-tests: a paradox?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If X and Z are correlated, the F-test can show that the explanatory variables are related to Y but t-tests of the separate slopes may show that either one of X or Z can be dropped from the full model.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multicollin6')\">6. T-tests in full and partial models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If X and Z are correlated, the t-test for X in the full model with X and Z can give a different result from the t-test in the model with only the single explanatory variable X.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
