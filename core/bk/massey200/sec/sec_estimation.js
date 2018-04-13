var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Estimation</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estimation1')\">1. Unknown parameters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Thinking about how data arose often suggests a possible model for the values, but this usually involves one or more unknown values called parameters.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estimation2')\">2. Estimators of parameters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The unknown parameters in a family of distributions may be estimated from a random sample, but there may be more than one way to do this from the data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estimation3')\">3. Bias</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An estimator is a function of a random sample and therefore has a distribution itself. Its bias is the difference between the distribution's mean and the actual parameter. An unbiased estimator is good.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estimation4')\">4. Standard error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A good estimator's distribution should also have small spread. Its standard deviation is called the standard error of the estimator.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estimation5')\">5. Mean squared error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mean squared error of an estimator combines its bias and standard error into a single value that can be used to compare competing estimators.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estimation6')\">6. Consistency</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Most estimators that are based on random samples have bias and standard error that tend to zero as the sample size increases. Such estimators are called consistent.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estimation7')\">7. Sample mean or median?</a>&nbsp;&nbsp;&nbsp;<span class='note'>Not examined</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sample mean and median are compared as estimators of parameters from different families of distributions.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
