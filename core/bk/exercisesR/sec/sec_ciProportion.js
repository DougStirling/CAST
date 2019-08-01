var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Estimating proportions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_estPropn1')\">1. Standard error of proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A template is provided in this exercise to help evaluate the standard error of a sample proportion.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_estPropn2')\">2. 95% confidence interval for probability</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise gives practice at evaluating an approximate 95% confidence interval for a probability.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_estPropn3')\">3. Other confidence levels</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise requests a mixture of 90%, 95% and 99% confidence intervals for a probability. A normal density can be used to find the relevant z-score and a template helps evaluate the 'plus-minus' value.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_estPropn4')\">4. Factors affecting width of confidence interval</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks how the sample size, confidence level and population probability affect the width of a CI for the probability.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_estPropn5')\">5. Interpreting a 95% confidence interval</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise presents 3 different statements about a 95% confidence interval and asks which is correct.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
