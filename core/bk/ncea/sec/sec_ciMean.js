var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Confidence interval for mean</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean1')\">1. Confidence interval from standard error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The estimation error for any unbiased estimator, has approximately 0.95 probability of being between -2SE and +2SE. An approximate 95% confidence interval for the parameter is therefore the estimate &plusmn;2SE.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean2')\">2. Confidence interval for mean, known σ</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the population standard deviation is known, the standard error can be found exactly. A 95% confidence interval is the sample mean &plusmn; twice this. (Or more exactly, 1.96 times the standard error.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean3')\">3. Confidence level</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation shows that 95% confidence intervals are random -- they vary from sample to sample. About 95% of samples give confidence intervals that include the true parameter.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean1')\">4. Exercise: Find approx 95% CI from standard error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise displays an estimate and standard error and asks for an approximate 95% confidence interval. Various different types of parameters are estimated (not just means).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean2')\">5. Exercise: Find confidence intervals, known &sigma;</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise gives practice with the calculations for finding the 95% confidence interval for a mean when the population standard deviation is known.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean7')\">6. Exercise: Interpret a 95% confidence interval</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you must choose which of four statements correctly interprets the meaning of a 95% confidence interval.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
