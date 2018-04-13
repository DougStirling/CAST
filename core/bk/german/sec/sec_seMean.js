var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Standard error of mean</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean1')\">1. Error distribution for mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When using a sample mean to estimate a population mean, the errors have a distribution with mean zero. The standard deviation of the errors (standard error) is the standard deviation of the sample mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean2')\">2. Standard error when σ is known</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the population standard deviation is known, the standard error can be evaluated.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean3')\">3. Interpreting the standard error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The estimation error has about 95% probability of being within ± standard errors of zero and is almost certainly within ±3 standard errors.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean4')\">4. Standard error when σ is unknown</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In most practical applications, the population standard deviation is unknown. The standard error of the sample mean can be approximated by replacing the population mean by the sample mean in its formula.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean5')\">5. Standardfehler vs Standardabweichung</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>It is important to distinguish between the interpretation (and value) of the standard error (SE) and standard deviation (SD).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean6')\">6. Using SEs to compare estimators</a>&nbsp;&nbsp;&nbsp;<span class='note'>(advanced)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If there are two alternative estimators of a parameter, the estimator with lower standard error is usually better. The sample mean is shown to be a better estimator of the centre of a normal population than the sample median. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean7')\">7. Weitere Informationen zum Bias</a>&nbsp;&nbsp;&nbsp;<span class='note'>(advanced)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Unbiased estimators are usually preferred. The sample median is shown to be a biased estimator of the mean of a skew distribution.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
