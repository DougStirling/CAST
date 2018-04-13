var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Standard error of proportion</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn1')\">1. General framework for estimation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The methodology for describing the accuracy of a sample mean using standard errors can also be used for other parameter estimates.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn2')\">2. Estimating a proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A sample proportion estimates the corresponding population proportion. There is likely to be an error in this estimate. The estimation errors have a distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn_b3')\">3. Error distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The estimation errors have a type of binomial distribution that is scaled to have mean zero. Its standard deviation is the standard error of the proportion.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn_b4')\">4. Normal approximation to error distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the sample size is high enough, the error distribution is approximately normal. This page gives a few examples for which the error distribution is found.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
