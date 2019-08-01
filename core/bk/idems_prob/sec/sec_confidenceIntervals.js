var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Confidence intervals</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('confidenceIntervals1')\">1. Interval estimates</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A point estimate (single value) may be far from the actual parameter. An interval estimate is a range of values that gives an indication of accuracy.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('confidenceIntervals2')\">2. Distribution of estimation error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Many estimators are approximately normally distributed, unbiased, and their standard error can be found. This allows us to sketch the approximate distribution of the estimation error.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('confidenceIntervals3')\">3. Confidence intervals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An approximate 95% confidence interval can be found as the estimate ± 1.96 standard errors. Replacing 1.96 with other constants gives intervals with other confidence levels.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('confidenceIntervals4')\">4. Other examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Examples are given in which parameters in geometric and log-series distributions are estimated with confidence intervals.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('confidenceIntervals5')\">5. Properties of confidence intervals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A 95% confidence interval has probability 0.95 of including the true parameter value. However from a single random sample, we cannot tell whether the CI will actually be one of these lucky ones.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
