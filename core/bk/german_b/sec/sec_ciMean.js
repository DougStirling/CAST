var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Konfidenzintervall des Mittelwertes</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean1')\">1. Konfidenzintervalle und der Standardfehler</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The estimation error for any unbiased estimator, has approximately 0.95 probability of being between -2SE and +2SE. An approximate 95% confidence interval for the parameter is therefore the estimate ± 2SE.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean_b2')\">2. Konfidenzintervalle bei bekanntem σ</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the population standard deviation is known, the standard error can be found exactly. A 95% confidence interval is the sample mean ± twice this. (Or more exactly, 1.96 times the standard error.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean3')\">3. Konfidenzstufen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation shows that 95% confidence intervals are random — they vary from sample to sample. About 95% of samples give confidence intervals that include the true parameter.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean4')\">4. Konfidenzstufen, wenn σ durch s ersetzt wird</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In practice, the population standard deviation is usually unknown. If the population SD is simply replaced by its sample equivalent, the interval estimate has a lower confidence level than 95%.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean5')\">5. Konfidenzintervall für µ, bei unbekanntem σ</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>To get a 95% confidence level, a t-value from tables must replace the constant 1.96.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean6')\">6. Eigenschaften des 95% Konfidenzintervalls</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation demonstrates that the resulting 95% confidence intervals have probability 0.95 of including the population mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean_b7')\">7. Beispiele</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Some examples of 95% confidence intervals for population means are given and interpreted.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
