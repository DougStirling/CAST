var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Normal linear model and inference</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnInfTwo1')\">1. Normal linear model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Randomness can be modelled by assuming that the response has a normal distribution whose mean is a linear function of the explanatory variables and whose standard deviation is constant.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnInfTwo2')\">2. Sampling variability of least squares plane</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The normal linear model also implies that the least squares plane varies from sample to sample.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnInfTwo3')\">3. Distribution of estimated coefficients</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The least squares estimate of each coefficient has a normal distribution whose mean is the underlying population parameter.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnInfTwo4')\">4. Estimate of error standard deviation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The error variance is estimated by the sum of squared residuals divided by (n-3). The best estimate of the error standard deviation is the square root of this.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnInfTwo5')\">5. 95% confidence intervals for coefficients</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The standard deviation of each parameter estimate depends on the error standard deviation. Replacing this with an estimate allows us to find a 95% confidence interval. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnInfTwo6')\">6. Hypothesis tests for coefficients</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A t test-statistic can be found by dividing a parameter estimate by its standard error. The p-value for testing whether the parameter is zero is the tail-area of a t distribution with (n-3) degrees of freedom.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
