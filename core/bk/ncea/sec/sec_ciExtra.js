var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>More about estimation</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciExtra1')\">1. Margin of error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The margin of error for a survey is related to a confidence interval. It is close to a 95% CI when p is 0.5, but underestimates the accuracy of small or large sample proportions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciExtra2')\">2. Sample size for estimating mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Given a target width for a 95% confidence interval, it is possible to determine the necessary sample size to achieve this accuracy.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciExtra3')\">3. Sample size for estimating proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In a similar way, given a target width for a 95% confidence interval for a proportion, it is possible to determine the necessary sample size.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciExtra4')\">4. Other confidence levels</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>All earlier confidence intervals had 95% confidence level. Replacing 1.96 (or 2) with other values gives interval estimates with different confidence levels.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean4')\">5. Exercise: CIs for &micro; with other confidence levels</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, confidence intervals for a mean are requested with a mixture of 90%, 95% and 99% confidence levels.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_estPropn3')\">6. Exercise: CIs for &pi; with other confidence levels</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise requests a mixture of 90%, 95% and 99% confidence intervals for a probability. A normal density can be used to find the relevant z-score and a template helps evaluate the 'plus-minus' value.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean6')\">7. Exercise: Factors affecting CI width of CI for &micro;</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks how the sample size, sample standard deviation and confidence level affect the width of a CI for the mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_estPropn4')\">8. Exercise: Factors affecting width of CI for &pi;</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks how the sample size, confidence level and population probability affect the width of a CI for the probability.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
