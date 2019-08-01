var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Confidence interval for mean</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean1')\">1. Confidence interval from standard error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise displays an estimate and standard error and asks for an approximate 95% confidence interval. Various different types of parameters are estimated (not just means).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean2')\">2. 95% confidence interval, known sigma</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise gives practice with the calculations for finding the 95% confidence interval for a mean when the population standard deviation is known.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean3')\">3. 95% confidence interval, unknown sigma</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise is similar to the previous one but requires use of a t distribution since the population standard deviation is unknown.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean4')\">4. Other confidence levels, known sigma</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, confidence intervals are requested with a mixture of 90%, 95% and 99% confidence levels, but with known population standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean5')\">5. Mixture of levels, known &amp; unknown σ</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, the questions involve a mixture of types with known and unknown population standard deviation and with 90%, 95% and 99% confidence levels.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean6')\">6. Factors affecting width of CI</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks how the sample size, sample standard deviation and confidence level affect the width of a CI for the mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean7')\">7. Interpreting a 95% confidence interval</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you must choose which of four statements correctly interprets the meaning of a 95% confidence interval.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
