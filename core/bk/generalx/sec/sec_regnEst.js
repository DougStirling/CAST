var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Estimating parameters</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnEst1')\">1. Point estimates of slope and intercept</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page gives a real example where the least squares slope and intercept estimate these parameters of a regression model. A simulation also shows that these estimates are random.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnEst2')\">2. Estimating the error standard devn</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this diagram a line can be dragged on a scatterplot. The sum of squared residuals is shown and can be minimised by a least squares button. The estimate of the error standard deviation is then displayed.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnEst3')\">3. Distribution of least squares estimates</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This simulation builds up the distributions of the least squares slope and intercept, and shows their theoretical normal distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnEst4')\">4. Standard error of least squares slope</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram gives the calculations for the standard error of the least squares slope and the estimated error distributions for several real data sets.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnEst5')\">5. 95% confidence interval for slope</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This simulation shows that about 95% of the 95% CIs include the underlying model's slope.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnEst6')\">6. Standard error and data collection</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows that the accuracy of the least squares slope depends on the sample size, error standard deviation and the spread of x-values. Use it to discuss design of experiments for regression data.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
