var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Confidence interval for mean</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_ciMean1')\">1. Confidence interval for a mean, known SD</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Example where the value of the population standard deviation is a know value and diagram showing how a 95% confidence interval is calculated.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_ciMean2')\">2. Confidence level</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation demonstrates the 95% confidence level for this type of interval estimate.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_ciMean3')\">3. Confidence level if sigma is replaced by s</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation shows that simply replacing the population SD by the sample SD results in a CI whose confidence level is less than 95%.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_ciMean4')\">4. Adjusting CI width for unknown popn SD</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows how the confidence level depends on the value k that replaces 1.96. The necessary t-value is close to 1.96 when the sample size is large, but larger for small samples.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_ciMean5')\">5. Confidence interval for mean, unknown popn SD</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows how the t-value for a 95% CI depends on the degrees of freedom.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_ciMean6')\">6. Properties of 95% confidence interval</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation demonstrates that the 95% confidence intervals have probability 0.95 of including the population mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_ciMean_c7')\">7. Examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page gives some examples of 95% confidence intervals and their interpretation.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
