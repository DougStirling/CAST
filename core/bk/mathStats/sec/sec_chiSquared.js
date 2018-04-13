var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Chi-squared distribution</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('chiSquared1')\">1. Chi-squared with 1 degree of freedom</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The square of a variable with a standard normal distribution has a chi-squared distribution with one degree of freedom. It is a special case of a gamma distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('chiSquared2')\">2. Properties of Chi-squared (1 df)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This chi-squared distribution is extremely skew. Its mean and variance are found from those of the gamma distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('chiSquared3')\">3. General chi-squared distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sum of n independent chi-squared variables (1 df) has a chi-squared (n df) distribution. It is also a special case of a gamma distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('chiSquared4')\">4. General chi-squared properties</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The general chi-squared distribution with n degrees of freedom is also skew but becomes closer to symmetric when n increases. Its mean and variance are also given.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('chiSquared5')\">5. Sample variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The variance of a random sample from a normal distribution has a distribution that is proportional to a chi-squared distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('chiSquared6')\">6. Confidence interval for normal variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A pivot can be based on a normal sample's variance. A confidence interval for the underlying normal distribution's variance σ² can be found from it.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('chiSquared7')\">7. Pooled variance from several samples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sample variances from several normal random samples can be combined. If the underlying normal variances are equal, this pooled variance has a chi-squared distribution, allowing a confidence interval for σ² to be found.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
