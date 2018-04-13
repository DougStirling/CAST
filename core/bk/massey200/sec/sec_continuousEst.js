var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Estimating parameters</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('continuousEst1')\">1. Bias and standard error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bias, standard error, mean squared error and consistency are defined in the same way for estimators of parameters in discrete and continuous distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('continuousEst2')\">2. Method of moments</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If a distribution has a single unknown parameter, its method of moments estimator is the value that makes the distribution's mean equal to the mean of a random sample. The method of moments estimator for the maximum of a rectangular distribution is found.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('continuousEst3')\">3. Maximum likelihood</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The likelihood function of a continuous distribution's parameter is the product of the probability density functions of a random sample. The maximum likelihood estimate is usually found by setting the derivative of the log-likelihood to zero.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('continuousEst4')\">4. Properties of maximum likelihood estimators</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Maximum likelihood estimators are asymptotically unbiased with normal distributions. A formula is given for the approximate standard error.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('continuousEst5')\">5. Confidence intervals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An approximate 95% confidence interval is the maximum likelihood estimate ± 1.96 standard errors. Replacing &quot;1.96&quot; with other constants gives other confidence levels.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('continuousEst6')\">6. Example: normal distribution mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The maximum likelihood estimate of a normal distribution's mean is found. The asymptotic formula for the standard error of the estimator gives the exact standard error.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('continuousEst7')\">7. Example: Rectangular maximum</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The maximum likelihood estimate of the maximum of a rectangular distribution is at a discontinuity of the likelihood function and cannot be found by differentiating the log-likelihood.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
