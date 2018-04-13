var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Confidence interval for proportion</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn_b5')\">1. Confidence interval for proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A 95% confidence interval for a population proportion is the sample proportion +/- twice its standard deviation. Its confidence level is only approximately 95% and guidelines are given for the minimum sample size.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn6')\">2. Properties of 95% CI for proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If samples are repeatedly taken, about 95% of them result in 95% confidence intervals that include the population proportion. Guidelines are given for the minimum sample size to make the confidence level close to 95%.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn_b7')\">3. Confidence interval examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A 95% confidence intervals for a proportion are found and interpreted for several data sets.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
