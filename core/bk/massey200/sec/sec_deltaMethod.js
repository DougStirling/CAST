var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Delta method</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('deltaMethod1')\">1. Variance of transformed variable</a>&nbsp;&nbsp;&nbsp;<span class='note'>Proof not examined</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>It is sometimes difficult to find the pdf of a transformed variable. This page gives an approximation to the transformed variable's mean and variance called the delta method. When applied to parameter estimates, the accuracy of the approximation improves as the sample size increases.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('deltaMethod2')\">2. Examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The delta method is used to find the approximate variance of the maximum likelihood estimator of the Geometric distribution's parameter. It is also used to get an approximate standard error for the odds of success in a binomial experiment.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
