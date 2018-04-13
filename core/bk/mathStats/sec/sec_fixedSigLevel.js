var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Fixed significance level</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('fixedSigLevel1')\">1. Significance level</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Hypothesis tests are often based on interpreting a p-value. An alternative approach involves a decision that is made about which of the two hypotheses is true. The significance level is the probability of wrongly concluding that the null hypothesis is not true.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('fixedSigLevel2')\">2. Type I and II errors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Two types of error can be made from a test; deciding that H₀ is true when it is false, and deciding it is false when it is true.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('fixedSigLevel3')\">3. P-values and decisions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A test with significance level α can be based on the test's p-value. The null hypothesis is rejected if the p-value is less than α.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('fixedSigLevel4')\">4. Significance levels for discrete data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For discrete data, it is usually impossible to find a decision rule with significance level exactly 5% (or any other pre-specified value). A conservative test uses a significance level that is just under the required value.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('fixedSigLevel5')\">5. Power function</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The power of a test is the probability of accepting H₀ when it is false. Since this usually depends on the actual parameter value, it is a function that can be graphed.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('fixedSigLevel6')\">6. Deciding on the sample size</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If a hypothesis test's significance level and its power at some value of the parameter are specified, the sample size can be determined to achieve this.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
