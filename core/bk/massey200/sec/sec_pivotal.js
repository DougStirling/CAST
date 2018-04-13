var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Confidence intervals from pivots</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('pivotal1')\">1. Wald-type confidence intervals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If an estimator's distribution is approximately normal, a confidence interval can be found as the estimate ± a multiple of its standard error.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('pivotal2')\">2. Pivots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A pivot for a parameter is a function of the data and parameter whose distribution is fully known. A confidence interval can be based on quantiles of this distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('pivotal3')\">3. Confidence interval for exponential rate</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A pivot is defined from the sum of values in an exponential random sample. The pivot has a gamma distribution so a confidence interval for the rate parameter, λ, can be based on quantiles of this distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('pivotal4')\">4. Confidence interval for binomial probability</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An approximate pivot is found for a binomial probability. A confidence interval from it has better properties than the conventional Wald-type confidence interval.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
