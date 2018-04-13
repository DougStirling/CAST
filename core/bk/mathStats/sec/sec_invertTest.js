var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>CI from inverting a test</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('invertTest1')\">1. Test statistics and pivots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The concepts of test statistics and pivots are closely related. Hypothesis tests and confidence intervals based on them are therefore also closely related.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('invertTest2')\">2. Test from a confidence interval</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An example shows how a hypothesis test about a binomial parameter with 5% significance level can be obtained from a 95% confidence interval.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('invertTest3')\">3. Confidence interval from a test</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Another example derives an exact confidence interval for a binomial probability by inverting a hypothesis test whose p-value is found exactly using the binomial distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('invertTest4')\">4. Confidence interval for median</a>&nbsp;&nbsp;&nbsp;<span class='note'>Difficult</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A confidence interval for the median of a continuous distribution can be found by inverting a hypothesis test about it.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('invertTest5')\">5. CI from likelihood ratio test</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Finally, an example shows how inverting a likelihood ratio test can be used to find a confidence interval for an exponential parameter.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
