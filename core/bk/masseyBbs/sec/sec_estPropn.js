var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Estimating proportions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn1')\">1. General framework for estimation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The methodology for describing the accuracy of a sample mean using standard errors and confidence intervals can also be used for other parameter estimates.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn2')\">2. Estimating a proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A sample proportion estimates the corresponding population proportion, &pi;. There is likely to be an error in this estimate and these errors have a distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn_c3')\">3. Error distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The estimation errors have a type of binomial distribution that is scaled to have mean zero. Its standard deviation is the standard error of the proportion.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn_c4')\">4. Normal approximation to error distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the sample size is high enough, the error distribution is approximately normal. This page gives a few examples for which the error distribution is found.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn_c5')\">5. Confidence interval for proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A 95% confidence interval for a population proportion is the sample proportion &plusmn; 1.96 times its standard deviation. Its confidence level is only approximately 95% and guidelines are given for the minimum sample size.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciExtra4b')\">6. Other confidence levels</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Replacing 1.96 with other values gives interval estimates with different confidence levels.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn6')\">7. Properties of 95% CI for proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If samples are repeatedly taken, about 95% of them result in 95% confidence intervals that include the population proportion. Guidelines are given for the minimum sample size to make the confidence level close to 95%.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn_c7')\">8. Confidence interval examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A 95% confidence intervals for a proportion are found and interpreted for several data sets.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciExtra1')\">9. Margin of error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The margin of error for a survey is related to a confidence interval. It is close to a 95% CI when p is 0.5, but underestimates the accuracy of small or large sample proportions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_estPropn1')\">10. Exercise: Find standard error of proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A template is provided in this exercise to help evaluate the standard error of a sample proportion.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_estPropn3')\">11. Exercise: Find CI for probability</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise requests a mixture of 90%, 95% and 99% confidence intervals for a probability. A normal density can be used to find the relevant z-score and a template helps evaluate the 'plus-minus' value.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_estPropn4')\">12. Exercise: What affects width of CI?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks how the sample size, confidence level and population probability affect the width of a CI for the probability.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_estPropn5')\">13. Exercise: Interpret a 95% confidence interval</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise presents 3 different statements about a 95% confidence interval and asks which is correct.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
