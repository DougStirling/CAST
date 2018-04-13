var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Inference for variances (optional)</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('varianceInf1')\">1. Confidence interval for the variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A 95% CI for the population variance can be found from the chi-squared distn with (n-1) degrees of freedom.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('varianceInf2')\">2. Properties of the confidence interval</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>As with other 95% CIs, there is 95% probability that a confidence interval for the variance will include the underlying population variance.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('varianceInf3')\">3. Warning about CI for variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The confidence level for the 95% CI is only accurate if the sample comes from a normal population. The CI should therefore be avoided unless you are sure about the shape of the population distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('varianceInf4')\">4. Independence of mean and variance</a>&nbsp;&nbsp;&nbsp;<span class='note'>(optional)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For random samples from a normal distribution, the sample mean and variance are independent.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('varianceInf5')\">5. Model and hypotheses</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For data that that arise as samples from normal distributions in both groups, we tested earlier whether the group means were the same. Equality of the group variances can also be examined.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('varianceInf6')\">6. Test statistic</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The ratio of the two sample variances has an F distribution whose shape depends on the sample sizes in the two groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('varianceInf7')\">7. F test</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>To test equality of two variances, the F ratio is compared to an F distribution. The test is 2-tailed and the p-value is twice the smaller tail area.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
