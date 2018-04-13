var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Tests about proportions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPropn1')\">1. Inference about parameters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When the data are a random sample, the null and alternative hypotheses are usually expressed in terms of population parameters. For categorical samples, the hypotheses refer to the probabilities of the categories.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPropn2')\">2. P-value for testing proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The p-value for testing a proportion is the probability of getting such an 'extreme' number of successes when the null hypothesis holds. It can be found from the binomial distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPropn3')\">3. Another example</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An example shows how to use a binomial distribution to find the p-value for a test.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPropn4')\">4. One- and two-tailed tests</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If values in both tails of the binomial distribution support the alternative hypothesis, the tail probability must be doubled to give the p-value for the test.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPropn5')\">5. Normal approximation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When the sample size is large, a normal approximation to the binomial distribution can be used to find the p-value for a hypothesis test.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPropn6')\">6. Statistical distance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The statistical distance between an estimate and hypothesised parameter value is the difference divided by the standard error of the estimate. It should have approximately a standard normal distribution if the null hypothesis is true.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPropn7')\">7. Tests based on statistical distance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The p-value for testing a proportion can be evaluated as a tail area of a standard normal distribution corresponding to values more 'extreme' than the statistical distance between p and π.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
