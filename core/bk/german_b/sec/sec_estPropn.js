var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Estimating proportions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn1')\">1. Methoden zur Schätzung</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The methodology for describing the accuracy of a sample mean using standard errors and confidence intervals can also be used for other parameter estimates.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn2')\">2. Schätzung einer Proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A sample proportion estimates the corresponding population proportion, &pi;. There is likely to be an error in this estimate and these errors have a distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn_b3')\">3. Fehlerverteilung</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The estimation errors have a type of binomial distribution that is scaled to have mean zero. Its standard deviation is the standard error of the proportion.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn_b4')\">4. Annäherung der Fehlerverteilung</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the sample size is high enough, the error distribution is approximately normal. This page gives a few examples for which the error distribution is found.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn_b5')\">5. Konfidenzintervall von Proportionen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A 95% confidence interval for a population proportion is the sample proportion &plusmn; twice its standard deviation. Its confidence level is only approximately 95% and guidelines are given for the minimum sample size.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn6')\">6. Eigenschaften des 95%-Konfidenzintervalls von Proportionen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If samples are repeatedly taken, about 95% of them result in 95% confidence intervals that include the population proportion. Guidelines are given for the minimum sample size to make the confidence level close to 95%.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estPropn_b7')\">7. Beispiele</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>95% confidence intervals for proportions are found and interpreted for several data sets.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
