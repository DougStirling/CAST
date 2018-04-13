var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Exercises</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_seMean1')\">1. Standard error of mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise on this page shows a data set with the sample mean and st devn. The standard error of the mean must be calculated.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_seMean2')\">2. Standard error vs standard deviation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise gives the value of either the standard deviation or the standard error or the mean. The question asks for an interval containing about 95% of the values or an interval with 95% confidence of including the popn mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_seMean3')\">3. Factors affecting the standard deviation and standard error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks 3 questions about the effect of sample size and spread of sample values on the sd and se, and about the interpretation of the se and sd.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean1')\">4. Confidence interval from standard error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise displays an estimate and standard error and asks for an approximate 95% confidence interval. Various different types of parameters are estimated (not just means).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean2')\">5. Find 95% CI for mean, known sigma</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise gives practice with the calculations for finding the 95% confidence interval for a mean when the population standard deviation is known.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean3')\">6. Find 95% CI for mean, unknown sigma</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise is similar to the previous one but requires use of a t distribution since the population standard deviation is unknown.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean6')\">7. Factors affecting width of CI</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks how the sample size, sample standard deviation and confidence level affect the width of a CI for the mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean7')\">8. Interpreting a 95% confidence interval</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you must choose which of four statements correctly interprets the meaning of a 95% confidence interval.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_estPropn1')\">9. Standard error of proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A template is provided in this exercise to help evaluate the standard error of a sample proportion.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_estPropn2')\">10. 95% confidence interval for probability</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise gives practice at evaluating an approximate 95% confidence interval for a probability.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_estPropn4')\">11. Factors affecting width of confidence interval</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks how the sample size, confidence level and population probability affect the width of a CI for the probability.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_estPropn5')\">12. Interpreting a 95% confidence interval</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise presents 3 different statements about a 95% confidence interval and asks which is correct.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean4')\">13. CIs for mean at other confidence levels, known sigma</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, confidence intervals are requested with a mixture of 90%, 95% and 99% confidence levels, but with known population standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean5')\">14. Mixture of levels, known &amp; unknown σ</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, the questions involve a mixture of types with known and unknown population standard deviation and with 90%, 95% and 99% confidence levels.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_estPropn3')\">15. CIs for proportions, various confidence levels</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise requests a mixture of 90%, 95% and 99% confidence intervals for a probability. A normal density can be used to find the relevant z-score and a template helps evaluate the 'plus-minus' value.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
