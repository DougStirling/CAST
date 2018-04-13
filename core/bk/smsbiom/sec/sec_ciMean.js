var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Confidence interval for mean</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean1')\">1. Confidence interval from standard error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The estimation error for any unbiased estimator, has approximately 0.95 probability of being between -2SE and +2SE. An approximate 95% confidence interval for the parameter is therefore the estimate ± 2SE.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean4')\">2. Confidence level</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In practice, the population standard deviation is usually unknown. If the population SD is simply replaced by its sample equivalent, the interval estimate has a lower confidence level than 95%.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean5')\">3. Confidence interval for mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>To get a 95% confidence level, a t-value from tables must replace the constant 1.96.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean6')\">4. Properties of 95% confidence interval</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation demonstrates that the resulting 95% confidence intervals have probability 0.95 of including the population mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean_b7')\">5. Examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Some examples of 95% confidence intervals for population means are given and interpreted.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
