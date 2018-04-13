var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Inference for regression parameters</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnEst_c1')\">1. Estimating the slope and intercept</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A least squares line provides estimates of the linear model's slope and intercept. These estimates are random values — they vary from sample to sample.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnEst_c2')\">2. Estimating the error standard devn</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The third parameter of the normal linear model is the error standard deviation. It can be estimated using the residuals from the least squares line.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnEst3')\">3. Distn of least squares estimates</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The least squares estimate of the model's slope has a normal distribution that is centred on the true value.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnEst_c4')\">4. Standard error of least squares slope</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The distribution of the least squares slope may be estimated from a single data set.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnTest_c2')\">5. Testing whether slope is zero</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the model's slope is zero, the response distribution does not depend on the explanatory variable. The p-value for testing this is the probability that its least squares estimate is as far from zero as the recorded value.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnTest3')\">6. Strength of evidence and relationship</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>It is important to distinguish the strength of a relationship (summarised by the correlation coefficient) and the strength of evidence for existence of a relationship (summarised by the p-value).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_regnEst1')\">7. Exercise:  Standard error of slope</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Any estimator's standard error gives information about its accuracy. The exercise on this page gives the standard error of a least squares line's slope and asks for a roughly calculated interval that is likely to include the underlying model's slope. (T values are not required in this exercise.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_regnEst2')\">8. Exercise:  Confidence interval for slope</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In the two exercises on this page, confidence intervals for a regression model's slope should be calculated from the least squares slope and its standard error. The second exercise is a little harder -- it asks for various confidence levels.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_regnTest1')\">9. Exercise:  Test for zero slope</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise gives the least squares slope and its standard error. The p-value for testing whether the regression slope is zero should be calculated and interpreted.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
