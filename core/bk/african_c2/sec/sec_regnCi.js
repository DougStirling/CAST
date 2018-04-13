var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Confidence intervals</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnEst3')\">1. Distn of least squares estimates</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The least squares estimate of the model's slope has a normal distribution that is centred on the true value.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnEst4')\">2. Standard error of least squares slope</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The distribution of the least squares slope may be estimated from a single data set.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnEst5')\">3. 95% confidence interval for slope</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A confidence interval for the model's slope can be obtained from its least squares estimate and its standard error.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnEst6')\">4. Properties of confidence interval</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Confidence intervals for the model's slope have the same properties as confidence intervals for population means or proportions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnEst7')\">5. Influences on accuracy</a>&nbsp;&nbsp;&nbsp;<span class='note'>(advanced)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The standard error of the least squares slope depends on the response standard deviation round the model line, the sample size and the standard deviation of X. Collecting data with a big spread of x-values gives more accurate estimates but there are disadvantages.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
